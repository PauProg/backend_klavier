const mongoose = require("mongoose");

const discountCouponSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    uppercase: true,
    minlength: 3,
  },
  percentage: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
    validate: {
      validator: function (valor) {
        return valor >= this.startDate;
      },
      message: "La fecha de fin debe ser posterior a la fecha de inicio",
    },
  },
  maxUses: {
    type: Number,
    required: true,
    min: 1,
    validate: {
      validator: Number.isInteger,
      message: "Los usos máximos deben ser un número entero",
    },
  },
  currentUses: {
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
          return valor <= this.maxUses;
        },
        message: "Los usos actuales no pueden superar los usos máximos",
      },
    ],
  },
});

const DiscountCoupon = mongoose.model("DiscountCoupon", discountCouponSchema);
module.exports = DiscountCoupon;
