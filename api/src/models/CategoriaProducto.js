const mongoose = require("mongoose");

const categoriaProductoSchema = new mongoose.Schema({
  idCategoriaProducto: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
    unique: true,
  },
  idCategoria: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Categoria",
    required: true,
  },
  idProducto: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Producto",
    required: true,
  },
});

categoriaProductoSchema.index(
  { idCategoria: 1, idProducto: 1 },
  { unique: true },
);

const CategoriaProducto = mongoose.model(
  "CategoriaProducto",
  categoriaProductoSchema,
);
module.exports = CategoriaProducto;
