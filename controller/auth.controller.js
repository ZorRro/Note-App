const User = require("../model/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const authUtil = require("../util/auth.util");
const secret = process.env.SECRET;

function validateSignupUserData(userData) {
    if (
        userData.username &&
        userData.password &&
        userData.name &&
        userData.email
    ) {
        return true;
    }
    return false;
}

function hashContent(content) {
    console.log("In Hashing function.");
    return bcrypt.hash(content, 12);
}

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
                            res.status(200).json(data);
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
        console.log("User details not submitted.");
        res.status(400).json({ message: "User details not submitted." });
    }
};

module.exports.signupController = (req, res) => {
    let signupUserData = req.body;
    if (validateSignupUserData(signupUserData)) {
        console.log("User Data Validated");
        hashContent(signupUserData.password)
            .then(hashedPassword => {
                console.log("Returned from hashing function.");
                if (hashedPassword) {
                    signupUserData.password = hashedPassword;
                    const user = new User(signupUserData);
                    user
                        .save()
                        .then(dbResult => {
                            console.log(dbResult);
                            res.status(200).json(dbResult);
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