const mongoose = require("mongoose");

const lineaCarritoSchema = new mongoose.Schema({
  idLineaCarrito: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
    unique: true,
  },
  idCarrito: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Carrito",
    required: true,
  },
  idProducto: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Producto",
    required: true,
  },
  cantidad: {
    type: Number,
    required: true,
    min: 1,
    validate: {
      validator: Number.isInteger,
      message: "La cantidad debe ser un número entero",
    },
  },
});

const LineaCarrito = mongoose.model("LineaCarrito", lineaCarritoSchema);
module.exports = LineaCarrito;
