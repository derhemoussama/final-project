// Routes/authRoute.js

const express = require('express');
const router = express.Router();
const authController = require('../Controllers/authController');
const emailVerificationMiddleware = require('../Middlewares/emailVerification');
const verifyEmailMiddleware = require('../Middlewares/checkEmailVerification');


// Define routes for register, login, and email verification
router.post('/register', authController.register);
router.post('/login',verifyEmailMiddleware, authController.login);
router.get('/verify/:token', emailVerificationMiddleware, (req, res) => {
  res.status(200).json({ message: "Email verified successfully" });
});

module.exports = router;

