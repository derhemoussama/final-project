// middleware/emailVerification.js

const Customer = require("../models/Customer");

const emailVerificationMiddleware = async (req, res, next) => {
  const { token } = req.params; // Extract verification token from URL
  try {
    // Find the customer by verification token
    const customer = await Customer.findOne({ verificationToken: token });

    // If customer not found, return error
    if (!customer) {
      return res.status(404).json({ message: "Invalid verification token" });
    }

    // Mark the email as verified
    customer.verified = true;
    await customer.save();

    // Pass control to the next middleware or route handler
    next();
  } catch (error) {
    console.error("Error verifying email:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = emailVerificationMiddleware;
