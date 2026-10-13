const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  street: {
    type: String,
    required: true,
    trim: true,
  },
  postalCode: {
    type: String,
    required: true,
    match: /^[0-9]{5}$/,
  },
  province: {
    type: String,
    required: true,
    trim: true,
  },
  country: {
    type: String,
    required: true,
    trim: true,
  },
  city: {
    type: String,
    required: true,
    trim: true,
  },
  door: {
    type: String,
    required: true,
    trim: true,
  },
  additionalDetails: {
    type: String,
    trim: true,
    maxlength: 500,
  },
  primary: {
    type: Boolean,
    default: false,
  },
});

const Address = mongoose.model("Address", addressSchema);
module.exports = Address;
