// routes/orderRoute.js
const express = require('express');
const router = express.Router();
const { postOrder, getAllOrders, getOrderById, updateOrderStatus, deleteOrder, orderSuccess, orderReject } = require('../Controllers/orderController');

// POST endpoint to add a new order
router.post('/', postOrder);

// GET endpoint to retrieve all orders
router.get('/', getAllOrders);

// GET endpoint to retrieve a single order by ID
router.get('/:orderId', getOrderById);

// PUT endpoint to update the status of an order
router.put('/:orderId', updateOrderStatus);

// DELETE endpoint to delete an order
router.delete('/:orderId', deleteOrder);

// Endpoint for order success
router.put('/success/:orderId', orderSuccess);

// Endpoint for order rejection
router.put('/reject/:orderId', orderReject);

module.exports = router;
