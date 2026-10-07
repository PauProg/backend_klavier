const mongoose = require("mongoose");

const categoriaSchema = new mongoose.Schema({
  idCategoria: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
    unique: true,
  },
  nombre: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
  },
  descripción: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
  },
});

const Categoria = mongoose.model("Categoria", categoriaSchema);
module.exports = Categoria;
