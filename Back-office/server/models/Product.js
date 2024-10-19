//models/Product.js

const mongoose = require("mongoose");

const schema = mongoose.Schema;

const productSchema = new schema(
  {
    productName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 999.99,
    },
    images: [
      {
        type: String,
        unique: true,
      },
    ],
  },
  { timestamps: true }
);

let createProductModel = mongoose.model("Products", productSchema);

module.exports = createProductModel;
