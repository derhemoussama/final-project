// Routes/authLogin.js
//login of user
const express = require('express');
const router = express.Router();
const loginUser = require('../Controllers/loginUserController');


router.post('/login', loginUser);

module.exports = router;
