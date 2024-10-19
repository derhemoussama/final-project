// controllers/customerController.js
const Customer = require('../models/Customer');


/**-----------------------------------------------
 * @desc    Get All Customers
 * @route   /customers/
 * @method  GET
 * @access  Public
 ------------------------------------------------*/
const getAllCustomers = async (req, res) => {
  try {
    // Retrieve all customers from the database
    const customers = await Customer.find();
    res.status(200).json(customers);
  } catch (error) {
    console.error('Error getting all customers:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

/**-----------------------------------------------
 * @desc    Get Customer by Profile (Username or Email)
 * @route   /customers/:usernameOrEmail
 * @method  GET
 * @access  Public
 ------------------------------------------------*/
const getCustomerByProfile = async (req, res) => {
  const { usernameOrEmail } = req.params;

  try {
    // Find the customer by username or email
    const customer = await Customer.findOne({ $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }] });
    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }
    res.status(200).json(customer);
  } catch (error) {
    console.error('Error getting customer by profile:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

/**-----------------------------------------------
 * @desc    Update a Customer
 * @route   /customers/:customerId
 * @method  PUT
 * @access  Public
 ------------------------------------------------*/
const updateCustomer = async (req, res) => {
  const { customerId } = req.params;
  const updateData = req.body;

  try {
    // Update customer in the database
    await Customer.findByIdAndUpdate(customerId, updateData);
    res.status(200).json({ message: 'Customer updated successfully' });
  } catch (error) {
    console.error('Error updating customer:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller function to delete a customer
const deleteCustomer = async (req, res) => {
  const { customerId } = req.params;

  try {
    // Delete customer from the database
    await Customer.findByIdAndDelete(customerId);
    res.status(200).json({ message: 'Customer deleted successfully' });
  } catch (error) {
    console.error('Error deleting customer:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  getAllCustomers,
  getCustomerByProfile,
  updateCustomer,
  deleteCustomer,
};