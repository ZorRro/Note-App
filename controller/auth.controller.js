const User = require("../model/user.model");

function validateUserData(userData) {
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
					console.log("User found");
					res.status(200).send(userResult);
				} else {
					res.sendStatus(204);
				}
			})
			.catch(err => {
				console.log("User not found.");
				res.sendStatus(204);
			});
	} else {
		console.log("User details not sent.");
		res.sendStatus(204);
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
