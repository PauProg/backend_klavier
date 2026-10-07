const mongoose = require("mongoose");

const direccionSchema = new mongoose.Schema({
  idDireccion: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
    unique: true,
  },
  nombre: {
    type: String,
    required: true,
    trim: true,
  },
  calle: {
    type: String,
    required: true,
    trim: true,
  },
  codigoPostal: {
    type: String,
    required: true,
    match: /^[0-9]{5}$/,
  },
  provincia: {
    type: String,
    required: true,
    trim: true,
  },
  pais: {
    type: String,
    required: true,
    trim: true,
  },
  ciudad: {
    type: String,
    required: true,
    trim: true,
  },
  puerta: {
    type: String,
    required: true,
    trim: true,
  },
  masDetalles: {
    type: String,
    trim: true,
    maxlength: 500,
  },
  principal: {
    type: Boolean,
    default: false,
  },
});

const Direccion = mongoose.model("Direccion", direccionSchema);
module.exports = Direccion;
