const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema({
  idUsuario: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
    unique: true,
  },
  rol: {
    type: String,
    enum: ["cliente", "admin"],
    default: "cliente",
  },
  nombre: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
  },
  apellidos: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
  },
  fechaNacimiento: {
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
  correo: {
    type: String,
    required: true,
    unique: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  contraseña: {
    type: String,
    required: true,
    minlength: 8,
  },
  telefono: {
    type: String,
    required: true,
    match: /^[0-9]{9}$/,
  },
  nacionalidad: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
  },
});

const Usuario = mongoose.model("Usuario", usuarioSchema);
module.exports = Usuario;
