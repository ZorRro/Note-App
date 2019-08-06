const User = require("../model/user.model");
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET

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

module.exports.loginController = (req, res) => {
    const userRequest = req.body;
    console.log("Login Request : " + JSON.stringify(userRequest));
    if (userRequest.username && userRequest.password) {
        console.log(`Try login for user ${userRequest.username}`);
        User.findOne({
                username: userRequest.username,
                password: userRequest.password
            })
            .then(userResult => {
                if (userResult) {
                    console.log("User Found");
                    const payload = userResult.id;
                    const token = jwt.sign(payload, secret);
                    const data = {
                        token: token,
                        id: payload
                    };
                    res.status(200).json(data);
                } else {
                    res.status(400).json({ message: "User Not Found." });
                }
            })
            .catch(err => {
                res.status(500).json({ message: "Internal Server error." });
            });
    } else {
        console.log("User details not submitted.");
        res.status(400).json({ message: "User details not submitted." });
    }
};

module.exports.signupController = (req, res) => {
    signupUserData = req.body;
    if (validateUserData(signupUserData)) {
        console.log("User Data Validated");
        const user = new User(signupUserData);
        user
            .save()
            .then(dbResult => {
                console.log(dbResult);
                res.sendStatus(200);
            })
            .catch(err => {
                console.error(err);
                res.sendStatus(400);
            });
    }
};