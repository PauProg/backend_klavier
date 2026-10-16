const Product = require('../models/Product');

const createProduct = async (productData) => {
  const newProduct = new Product(productData);
  return await newProduct.save();
};

const getAllProducts = async () => {
  return await Product.find();
};

const getProductById = async (id) => {
  // si no encuentra ninguno no da error, devuelve null, eso lo gestionamos en el controlador
  return await Product.findById(id);
};

const updateProduct = async (id, updateData) => {
  return await Product.findByIdAndUpdate(
    id,
    updateData,
    { new: true, runValidators: true } // devuelve el nuevo producto, ejecuta las validaciones
  );
};

const deleteProduct = async (id) => {
  return await Product.findByIdAndDelete(id);
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
};