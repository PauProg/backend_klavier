const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
  cartId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cart",
    required: true,
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
    validate: {
      validator: Number.isInteger,
      message: "La cantidad debe ser un número entero",
    },
  },
});

const CartItem = mongoose.model("CartItem", cartItemSchema);
module.exports = CartItem;
