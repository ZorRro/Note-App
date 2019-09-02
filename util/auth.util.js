const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const secret = process.env.SECRET;

const self = module.exports;

module.exports.validateSignupUserData = function(userData) {
  if (
    userData.username &&
    userData.password &&
    userData.name &&
    userData.email
  ) {
    return true;
  }
  return false;
};

module.exports.sign = function(payload) {
  return jwt.sign(payload, secret);
};

module.exports.verify = function(token) {
  return jwt.verify(token, secret);
};

module.exports.hashContent = function(content) {
  console.log("In Hashing function.");
  return bcrypt.hash(content, 12);
};

module.exports.comparePasswords = function(requestPassword, user) {
  return bcrypt.compare(requestPassword, user.password).then(match => {
    if (match) {
      const payload = user.id;
      // const token = jwt.sign(payload, secret);
      const token = self.sign(payload);
      const data = {
        token: token,
        id: payload,
        name: user.name,
        notes: user.notes,
        email: user.email,
        activated: user.activated
      };
      // this data will be sent in response
      return data;
    } else {
      throw new Error("Username/Password did not match.");
    }
  });
};

module.exports.verifyToken = function(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).json({ message: "Unauthorized request" });
  }
  const token = req.headers.authorization.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized request" });
  }
  // const payload = jwt.verify(token, secret);
  const payload = self.verify(token);
  if (!payload) {
    return res.status(401).json({ message: "Unauthorized request" });
  }
  console.log("User is authorized.");
  // User is validated. Set the userID in request for next middlewares
  // userId will be available for the other middlewares
  req.body.userId = payload;
  next();
};

module.exports.validateTokenAndId = function(req, res, next) {
  const userId = req.query.identity;
  const token = req.query.info;

  // const payload = jwt.verify(token, secret);
  const payload = self.verify(token);
  if (payload === userId) {
    req.body.activated = true;
  } else {
    req.body.activated = false;
  }
  next();
};

module.exports.verifyResetPasswordRequest = function(req, res, next) {
  const action = req.query.action;

  switch (action) {
    // Update the user's password
    case "reset":
      const token = req.body.token;
      if (!token) {
        return res.status(400).json({ message: "User token is missing." });
      }
      const userId = self.verify(token);
      if (!userId) {
        return res.status(401).json({ message: "User token is invalid." });
      }
      req.body.userId = userId;
      next(); // Async call, therefore need to break.
      break;

    // Initiate a mail for user to reset password
    case "initiate":
      const email = req.body.regEmail;
      console.log("Initiate a new mail");
      next();
      break;

    default:
      return res.status(400).json({ message: "Invalid request." });
  }
};
