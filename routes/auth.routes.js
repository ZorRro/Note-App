var express = require("express");
var authController = require("../controller/auth.controller");
var authUtil = require("../util/auth.util");

const AuthRouter = express.Router();

AuthRouter.post("/login", authController.loginController);

AuthRouter.post("/signup", authController.signupController);

AuthRouter.get(
  "/activate",
  authUtil.validateTokenAndId,
  authController.activationController
);

module.exports = AuthRouter;
