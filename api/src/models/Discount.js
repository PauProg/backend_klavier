const mongoose = require("mongoose");

const discountSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
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
});

discountSchema.index({ productId: 1 }, { unique: true });

const Discount = mongoose.model("Discount", discountSchema);
module.exports = Discount;
