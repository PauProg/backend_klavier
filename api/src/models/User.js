const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  role: {
    type: String,
    enum: ["cliente", "admin"],
    default: "cliente",
  },
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
  },
  surnames: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
  },
  birthDate: {
    type: Date,
    required: true,
    validate: {
      validator: function (valor) {
        const hace100Anios = new Date();
        hace100Anios.setFullYear(hace100Anios.getFullYear() - 100);

        return valor <= new Date() && valor >= hace100Anios;
      },
      message: "Fecha de nacimiento no válida",
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  phone: {
    type: String,
    required: true,
    match: /^[0-9]{9}$/,
  },
  nationality: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
