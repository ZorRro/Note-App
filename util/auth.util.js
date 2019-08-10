const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const secret = process.env.SECRET;

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

module.exports.hashContent = function(content) {
    console.log("In Hashing function.");
    return bcrypt.hash(content, 12);
};

module.exports.comparePasswords = function(requestPassword, user) {
    return bcrypt.compare(requestPassword, user.password)
        .then(match => {
            if (match) {
                const payload = user.id;
                const token = jwt.sign(payload, secret);
                const data = {
                    token: token,
                    id: payload
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
        res.status(401).json({ message: 'Unauthorized request' });
    }
    const token = req.headers.authorization.split(' ')[1]
    if (!token) {
        res.status(401).json({ message: 'Unauthorized request' });
    }
    const payload = jwt.verify(token, secret)
    if (!payload) {
        res.status(401).json({ message: 'Unauthorized request' });
    }
    console.log('User is authorized.')
        // User is validated. Set the userID in request for next middlewares
        // userId will be available for the other middlewares
    req.body.userId = payload
    next()
}