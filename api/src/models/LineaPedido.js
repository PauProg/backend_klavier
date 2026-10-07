const mongoose = require("mongoose");

const lineaPedidoSchema = new mongoose.Schema({
  idLineaPedido: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
    unique: true,
  },
  idPedido: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Pedido",
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
  precioCompra: {
    type: Number,
    required: true,
    min: 0,
  },
});

const LineaPedido = mongoose.model("LineaPedido", lineaPedidoSchema);
module.exports = LineaPedido;
