const Razorpay = require("razorpay");

require("dotenv").config();

const razorpay = new Razorpay({

  key_id: process.env.RAZORPAY_KEY_ID,

  key_secret:process.env.RAZORPAY_KEY_SECRET,
    

});

const createOrder = async (req, res) => {
  try {
    const options = {
      amount: req.body.amount * 100,
      currency: "INR",
      receipt: "receipt_order",
    };

    const order = await razorpay.orders.create(options);

    res.json({
      order,
      key: process.env.RAZORPAY_KEY_ID 
    });

  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

module.exports = {
  createOrder,
};