// routes/paymentRoute.js
const express = require('express');
const router = express.Router();
const paymentController = require('../Controllers/paymentController');

// POST endpoint to process payment
router.post('/process', paymentController.processPayment);

module.exports = router;
