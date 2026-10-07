const mongoose = require("mongoose");

const cuponDescuentoSchema = new mongoose.Schema({
  idCuponDescuento: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
    unique: true,
  },
  codigo: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    uppercase: true,
    minlength: 3,
  },
  porcentaje: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
  fechaInicio: {
    type: Date,
    required: true,
  },
  fechaFin: {
    type: Date,
    required: true,
    validate: {
      validator: function (valor) {
        return valor >= this.fechaInicio;
      },
      message: "La fecha de fin debe ser posterior a la fecha de inicio",
    },
  },
  usosMaximos: {
    type: Number,
    required: true,
    min: 1,
    validate: {
      validator: Number.isInteger,
      message: "Los usos máximos deben ser un número entero",
    },
  },
  usosActuales: {
    type: Number,
    default: 0,
    min: 0,
    validate: [
      {
        validator: Number.isInteger,
        message: "Los usos actuales deben ser un número entero",
      },
      {
        validator: function (valor) {
          return valor <= this.usosMaximos;
        },
        message: "Los usos actuales no pueden superar los usos máximos",
      },
    ],
  },
});

const CuponDescuento = mongoose.model("CuponDescuento", cuponDescuentoSchema);
module.exports = CuponDescuento;
