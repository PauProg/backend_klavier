const mongoose = require("mongoose");

const movimientoStockSchema = new mongoose.Schema({
  idMovimientoStock: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
    unique: true,
  },
  idProducto: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Producto",
    required: true,
  },
  saleStock: {
    type: Boolean,
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
  motivo: {
    type: String,
    required: true,
    trim: true,
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
});

const MovimientoStock = mongoose.model(
  "MovimientoStock",
  movimientoStockSchema,
);
module.exports = MovimientoStock;
