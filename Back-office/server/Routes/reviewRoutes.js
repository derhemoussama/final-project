// routes/reviewRoutes.js

const express = require('express');
const router = express.Router();
const reviewController = require('../Controllers/reviewController');

const isAdmin = require('../Middlewares/isAdmin');
const isManager = require('../Middlewares/isManager');

// Route pour accepter un avis
router.put('/:id/accept', reviewController.acceptReview);

// Route pour rejeter un avis
router.put('/:id/reject',isAdmin,isManager, reviewController.rejectReview);

module.exports = router;
