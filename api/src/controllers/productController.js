const productService = require('../services/productService');

const createProduct = async (req, res) => {
  try {
    const product = await productService.createProduct(req.body);
    res.status(201).json({ status: 'success', data: product });
  } catch (err) {
    res.status(400).json({ status: 'error', message: err.message });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    res.status(200).json({ status: 'success', data: products });
  } catch (err) {
    res.status(500).json({ status: 'error', message: err.message });
  }
};

const getProductById = async (req, res) => {
  try {
    // esto coge lo que viene en la url, concretamente el id
    const product = await productService.getProductById(req.params.id);

    if (!product) {
      return res.status(404).json({ status: 'error', message: 'No existe ningún producto con ese id' });
    }

    res.status(200).json({ status: 'success', data: product });
  } catch (err) {
    res.status(400).json({ status: 'error', message: err.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const product = await productService.updateProduct(req.params.id, req.body);

    if (!product) {
      return res.status(404).json({ status: 'error', message: 'No existe ningún producto con ese id' });
    }

    res.status(200).json({ status: 'success', data: product });
  } catch (err) {
    res.status(400).json({ status: 'error', message: err.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await productService.deleteProduct(req.params.id);

    if (!deletedProduct) {
      return res.status(404).json({ status: 'error', message: 'No existe ningún producto con ese id' });
    }

    res.status(204).send();
  } catch (err) {
    res.status(400).json({ status: 'error', message: err.message });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
};