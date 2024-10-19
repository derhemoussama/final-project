// Controllers/authController.js

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const Customer = require("../models/Customer");
const sendEmail = require("../utils/sendEmail");

/**-----------------------------------------------
 * @desc    Customer Registration
 * @route   /customers/register
 * @method  POST
 * @access  Public
 ------------------------------------------------*/

const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if customer with the same username or email already exists
    const existingCustomer = await Customer.findOne({
      $or: [{ username }, { email }],
    });
    if (existingCustomer) {
      return res
        .status(400)
        .json({ message: "Username or email already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Generate verification token
    const verificationToken = crypto.randomBytes(32).toString("hex");

    // Create new customer
    const newCustomer = new Customer({
      username,
      email,
      password: hashedPassword,
      verificationToken, // Store verification token in the database
    });

    // Save the new customer to the database
    await newCustomer.save();

    // Construct verification URL
    const verificationUrl = `${process.env.BASE_URL}/customers/verify/${verificationToken}`;

    // Send verification email
    await sendEmail(newCustomer.email, "Verify Email", verificationUrl, newCustomer.username);

    res.status(201).json({ message: "Customer registered successfully, Please verify your email" });
  } catch (error) {
    console.error("Error registering customer:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

/**-----------------------------------------------
 * @desc    Customer Login
 * @route   /customers/login
 * @method  POST
 * @access  Public
 ------------------------------------------------*/

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find the customer by username
    const customer = await Customer.findOne({ username });

    // If customer not found, return error
    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }

    // Check if the password is correct
    const passwordMatch = await bcrypt.compare(password, customer.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // If customer's email is verified, generate JWT token
    const token = jwt.sign(
      { customerId: customer._id, username: customer.username },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({ token });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};



module.exports = {
  register,
  login,
};