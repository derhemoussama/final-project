// controllers/paymentController.js

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

/**
 * @desc    Process payment
 * @route   /payment/process
 * @method  POST
 * @access  Public
 */

const processPayment = async (req, res) => {
  try {
    const { orderId, amount } = req.body;

    // Create a charge with the payment method received from the client
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Amount in cents
      currency: 'usd',
      metadata:{
        orderId,
      },
  
    });


// Return client secret to frontend
res.status(200).json({ clientSecret: paymentIntent.client_secret });
} catch (error) {
  console.error('Error creating payment intent:', error);
  res.status(500).json({ error: 'An error occurred while creating the payment intent.' });
}
};

module.exports = {
  processPayment,
};
