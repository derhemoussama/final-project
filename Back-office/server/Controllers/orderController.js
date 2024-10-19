// controllers/orderController.js

const Order = require('../models/Order');


/**
 * @desc    Add new order
 * @route   /orders/
 * @method  POST
 * @access  Public
 */
const postOrder = async (req, res) => {
  try {
    const { customer, products,shippingAddress, totalPrice } = req.body;
    const newOrder = new Order({
      customer,
      products,
      shippingAddress,
      totalPrice
    });
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * @desc    Get all orders
 * @route   /orders/
 * @method  GET
 * @access  Public
 */

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * @desc    Get single order by ID
 * @route   /orders/:orderId
 * @method  GET
 * @access  Public
 */

const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * @desc    Update order status
 * @route   /orders/:orderId
 * @method  PUT
 * @access  Public
 */

const updateOrderStatus = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;
    const updatedOrder = await Order.findByIdAndUpdate(orderId, { status }, { new: true });
    if (!updatedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * @desc    Delete order
 * @route   /orders/:orderId
 * @method  DELETE
 * @access  Public
 */

const deleteOrder = async (req, res) => {
  try {
    const { orderId } = req.params;
    const deletedOrder = await Order.findByIdAndDelete(orderId);
    if (!deletedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.status(200).json({ message: 'Order deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


/**
 * @desc    Endpoint for order success
 * @route   /orders/success/:orderId
 * @method  PUT
 * @access  Public
 */

const orderSuccess = async (req, res) => {
  try {
    const orderId = req.params.orderId;
    await Order.findByIdAndUpdate(orderId, { status: 'Completed' });
    res.send('Payment was successful!');
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * @desc    Endpoint for order rejection
 * @route   /orders/reject/:orderId
 * @method  PUT
 * @access  Public
 */

const orderReject = async (req, res) => {
  try {
    const orderId = req.params.orderId;
    await Order.findByIdAndUpdate(orderId, { status: 'Rejected' });
    res.send('Order rejected');
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = {
  postOrder,
  getAllOrders,
  getOrderById,
  updateOrderStatus,
  deleteOrder,
  orderSuccess,
  orderReject
};