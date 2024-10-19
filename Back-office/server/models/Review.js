//models/Review.js

const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  reviewerName: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  reviewText: {
    type: String,
    required: true,
  },
  accepted: {
    type: Boolean,
    default: false,
  }
}, { timestamps: true });

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;

