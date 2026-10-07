const mongoose = require("mongoose");

const pedidoSchema = new mongoose.Schema({
  idPedido: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
    unique: true,
  },
  idDireccion: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Direccion",
    required: true,
  },
  idUsuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario",
    required: true,
  },
  fecha: {
    type: Date,
    default: Date.now,
    required: true,
  },
  subtotal: {
    type: Number,
    required: true,
    min: 0,
  },
  precioEnvio: {
    type: Number,
    required: true,
    min: 0,
  },
  total: {
    type: Number,
    required: true,
    min: 0,
  },
  idCupon: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CuponDescuento",
  },
});

const Pedido = mongoose.model("Pedido", pedidoSchema);
module.exports = Pedido;
