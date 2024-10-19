// middleware/verifyEmailMiddleware.js

const Customer = require("../models/Customer");

const verifyEmailMiddleware = async (req, res, next) => {
  try {
    // Extract the customer's username from the request
    const { username } = req.body;

    // Find the customer by username
    const customer = await Customer.findOne({ username });

    // If customer not found, return error
    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }

    // Check if the customer's email is verified
    if (!customer.verified) {
      return res.status(401).json({ message: "Email not verified" });
    }

    // If email is verified, proceed to the next middleware or route handler
    next();
  } catch (error) {
    console.error("Error verifying email:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = verifyEmailMiddleware;
