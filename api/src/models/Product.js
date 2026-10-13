const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
  },
  description: {
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
  manufacturingYear: {
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
  currentStock: {
    type: Number,
    required: true,
    min: 0,
    validate: {
      validator: Number.isInteger,
      message: "El stock debe ser un número entero",
    },
  },
  images: {
    type: [String],
    default: [],
  },
  weight: {
    type: Number,
    required: true,
    min: 0,
  },
  height: {
    type: Number,
    required: true,
    min: 0,
  },
  width: {
    type: Number,
    required: true,
    min: 0,
  },
  depth: {
    type: Number,
    required: true,
    min: 0,
  },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
