const mongoose = require("mongoose");

const descuentoSchema = new mongoose.Schema({
  idDescuento: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
    unique: true,
  },
  idProducto: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Producto",
    required: true,
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
});

descuentoSchema.index({ idProducto: 1 }, { unique: true });

const Descuento = mongoose.model("Descuento", descuentoSchema);
module.exports = Descuento;
