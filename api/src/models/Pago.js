const mongoose = require("mongoose");

const pagoSchema = new mongoose.Schema({
  idPago: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
    unique: true,
  },
  idPedido: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Pedido",
    required: true,
  },
  metodo: {
    type: String,
    required: true,
    enum: ["tarjeta", "paypal", "transferencia"],
  },
  importe: {
    type: Number,
    required: true,
    min: 0,
  },
  estado: {
    type: String,
    required: true,
    enum: ["pendiente", "completado", "fallido", "reembolsado"],
    default: "pendiente",
  },
  fecha: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

const Pago = mongoose.model("Pago", pagoSchema);
module.exports = Pago;
