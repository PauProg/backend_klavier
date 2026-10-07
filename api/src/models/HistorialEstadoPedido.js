const mongoose = require("mongoose");

const historialEstadoPedidoSchema = new mongoose.Schema({
  idHistorialEstadoPedido: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
    unique: true,
  },
  idPedido: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Pedido",
    required: true,
  },
  estado: {
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
  fechaCambio: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

const HistorialEstadoPedido = mongoose.model(
  "HistorialEstadoPedido",
  historialEstadoPedidoSchema,
);
module.exports = HistorialEstadoPedido;
