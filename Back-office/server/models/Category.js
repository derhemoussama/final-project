//models/Category.js

const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  },
  icon: {
    type: String,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  popular: {
    type: Boolean,
    default: false,
  },
  tags: {
    type: [String],
  },
  subcategories: {
    type: [String],
  },
  colors: {
    type: [String],
  },
  materials: {
    type: [String],
  },
  styles: {
    type: [String],
  },
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
