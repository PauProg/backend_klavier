const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order",
    required: true,
  },
  method: {
    type: String,
    required: true,
    enum: ["tarjeta", "paypal", "transferencia"],
  },
  amount: {
    type: Number,
    required: true,
    min: 0,
  },
  status: {
    type: String,
    required: true,
    enum: ["pendiente", "completado", "fallido", "reembolsado"],
    default: "pendiente",
  },
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

const Payment = mongoose.model("Payment", paymentSchema);
module.exports = Payment;
