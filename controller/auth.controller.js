const User = require("../model/user.model");
const bcrypt = require("bcrypt");
const authUtil = require("../util/auth.util");
const mailer = require("../util/mailer.util");
// const jwt = require("jsonwebtoken");
// const secret = process.env.SECRET;

module.exports.loginController = (req, res, next) => {
  const userRequest = req.body;
  console.log("Login Request : " + JSON.stringify(userRequest));
  if (userRequest.username && userRequest.password) {
    console.log(`Try login for user ${userRequest.username}`);
    User.findOne({
      username: userRequest.username
    })
      .then(userResult => {
        if (userResult) {
          console.log("User Found");
          // compare passwords and send response.
          authUtil
            .comparePasswords(userRequest.password, userResult)
            .then(data => {
              if (data.activated) {
                // User's email is verified
                res.status(200).json(data);
              } else {
                res.status(401).json({
                  message: "Email is not verified."
                });
              }
            })
            .catch(err => {
              const sendMessage = err.message || "Internal Server error.";
              res.status(500).json({ message: sendMessage });
            });
        } else {
          res.status(400).json({ message: "User Not Found." });
        }
      })
      .catch(err => {
        const sendMessage = err.message || "Internal Server error.";
        res.status(500).json({ message: sendMessage });
      });
  } else {
    console.log("Username/Password not submitted.");
    res.status(400).json({ message: "Username/Password not submitted." });
  }
};

module.exports.signupController = (req, res) => {
  let signupUserData = req.body;
  if (authUtil.validateSignupUserData(signupUserData)) {
    console.log("User Data Validated");
    authUtil
      .hashContent(signupUserData.password)
      .then(hashedPassword => {
        console.log("Returned from hashing function.");
        if (hashedPassword) {
          signupUserData.password = hashedPassword;
          const user = new User(signupUserData);
          user
            .save()
            .then(dbResult => {
              console.log("User created.");
              const resource = {
                email: dbResult.email
              };
              res.status(200).json(resource);
              // const token = jwt.sign(dbResult.id, secret);
              const token = authUtil.sign(dbResult.id);
              mailer.createInstance();
              mailer.buildEmail("user@gmail.com", dbResult.id, token);
              mailer.send();
            })
            .catch(err => {
              console.error(err);
              res.status(400);
            });
        } else {
          res.status(400);
        }
      })
      .catch(err => {
        res.status(400);
      });
  } else {
    console.log("Invalid User Data.");
    res.status(400);
  }
};

module.exports.activationController = (req, res) => {
  if (req.body.activated) {
    const userId = req.query.identity;
    User.findByIdAndUpdate({ _id: userId }, { activated: true }, { new: true })
      .then(user => {
        console.log("User is activated.");
        return res.status(200).json({ activated: req.body.activated });
      })
      .catch(err => {
        console.error(err);
        return res.status(500).json({ message: "Unable to activate user." });
      });
  } else {
    return res.status(401).json({ activated: req.body.activated });
  }
};

// Updates the user's password.
// Expects userId in req.body
//         new password in req.body
module.exports.resetPasswordController = async (req, res) => {
  const email = req.body.regEmail;
  if (email) {
    try {
      const user = await User.findOne({ email: email });
      if (!(user && user.id)) {
        return res.status(404).json({ message: "email is not registered." });
      } else {
        res.sendStatus(200);
        // next send mail
      }
      const token = authUtil.sign(user.id);
      mailer.createInstance();
      mailer.buildEmail(user.email, user.id, token, "reset");
      mailer.send();
    } catch (err) {
      console.error(err);
      return res.sendStatus(500);
    }
  } else {
    const userId = req.body.userId;
    const newPassword = req.body.password;
    if (userId && newPassword) {
      try {
        const hashedPassword = await authUtil.hashContent(newPassword);
        if (hashedPassword) {
          const user = await User.findByIdAndUpdate(
            { _id: userId },
            { password: hashedPassword },
            { new: true, upsert: false, select: { _id: 1 } }
          );
          if (user && user.id) {
            res.sendStatus(200);
          } else {
            res.sendStatus(404);
          }
        }
      } catch (error) {
        console.error("Error occurred while hashing password.");
        res.sendStatus(500);
      }
    }
  }
};
