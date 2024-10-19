// controllers/reviewController.js

const Review = require("../models/Review");

/**
 * @desc    Accepter un avis
 * @route   /reviews/:id/accept
 * @method  PUT
 * @access  Public
 */
const acceptReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(req.params.id, { accepted: true }, { new: true });
    res.json(review);
  } catch (error) {
    console.error("Error accepting review:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * @desc    Rejeter un avis
 * @route   /reviews/:id/reject
 * @method  PUT
 * @access  Public
 */

const rejectReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(req.params.id, { accepted: false }, { new: true });
    res.json(review);
  } catch (error) {
    console.error("Error rejecting review:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  acceptReview,
  rejectReview
};
