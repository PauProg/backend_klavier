const mongoose = require("mongoose");

const orderStatusHistorySchema = new mongoose.Schema({
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order",
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: [
      "pendiente",
      "pagado",
      "preparando",
      "enviado",
      "entregado",
      "cancelado",
    ],
  },
  changedAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

const OrderStatusHistory = mongoose.model(
  "OrderStatusHistory",
  orderStatusHistorySchema,
);
module.exports = OrderStatusHistory;
