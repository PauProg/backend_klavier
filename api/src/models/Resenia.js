const mongoose = require("mongoose");

const reseniaSchema = new mongoose.Schema({
  idReseña: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
    unique: true,
  },
  idProducto: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Producto",
    required: true,
  },
  idUsuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario",
    required: true,
  },
  valoracion: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
    validate: {
      validator: Number.isInteger,
      message: "La valoración debe ser un número entero",
    },
  },
  comentario: {
    type: String,
    trim: true,
    maxlength: 1000,
  },
  fecha: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

const Resenia = mongoose.model("Resenia", reseniaSchema);
module.exports = Resenia;
