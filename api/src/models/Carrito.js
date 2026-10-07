const mongoose = require("mongoose");

const carritoSchema = new mongoose.Schema({
  idCarrito: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
    unique: true,
  },
  idUsuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario",
    required: true,
    unique: true
  },
  fechaCreacion: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

const Carrito = mongoose.model("Carrito", carritoSchema);
module.exports = Carrito;
