const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  addressId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Address",
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
  subtotal: {
    type: Number,
    required: true,
    min: 0,
  },
  shippingPrice: {
    type: Number,
    required: true,
    min: 0,
  },
  total: {
    type: Number,
    required: true,
    min: 0,
  },
  couponId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "DiscountCoupon",
  },
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
