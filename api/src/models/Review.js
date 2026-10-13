const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
    validate: {
      validator: Number.isInteger,
      message: "La valoración debe ser un número entero",
    },
  },
  comment: {
    type: String,
    trim: true,
    maxlength: 1000,
  },
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;
