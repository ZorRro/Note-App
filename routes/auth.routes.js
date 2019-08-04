var express = require('express')
var authController = require('../controller/auth.controller')

const AuthRouter = express.Router()

AuthRouter.post('/login', authController.loginController)

AuthRouter.post('/signup', authController.signupController)

module.exports = AuthRouter