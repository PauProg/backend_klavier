const mongoose = require("mongoose");

const productoSchema = new mongoose.Schema({
  idProducto: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
    unique: true,
  },
  nombre: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
  },
  descripcion: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
  },
  marca: {
    type: String,
    required: true,
    trim: true,
  },
  modelo: {
    type: String,
    required: true,
    trim: true,
  },
  anioFabricacion: {
    type: Number,
    required: true,
    min: [1800, "El año de fabricación no es válido"],
    max: [
      new Date().getFullYear(),
      "El año de fabricación no puede ser futuro",
    ],
  },
  precio: {
    type: Number,
    required: true,
    min: 0,
  },
  stockActual: {
    type: Number,
    required: true,
    min: 0,
    validate: {
      validator: Number.isInteger,
      message: "El stock debe ser un número entero",
    },
  },
  imagenes: {
    type: [String],
    default: [],
  },
  peso: {
    type: Number,
    required: true,
    min: 0,
  },
  alto: {
    type: Number,
    required: true,
    min: 0,
  },
  ancho: {
    type: Number,
    required: true,
    min: 0,
  },
  profundidad: {
    type: Number,
    required: true,
    min: 0,
  },
});

const Producto = mongoose.model("Producto", productoSchema);
module.exports = Producto;
