const productService = require('../services/productService');

const createProduct = async (req, res, next) => {
  try {
    const product = await productService.createProduct(req.body);
    res.status(201).json({ status: 'success', data: product });
  } catch (err) {
    next(err);
  }
};

const getAllProducts = async (req, res, next) => {
  try {
    const products = await productService.getAllProducts();
    res.status(200).json({ status: 'success', data: products });
  } catch (err) {
    next(err);
  }
};

const getProductById = async (req, res, next) => {
  try {
    // esto coge lo que viene en la url, concretamente el id
    const product = await productService.getProductById(req.params.id);

    if (!product) {
      const error = new Error('No existe ningún producto con ese id');
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({ status: 'success', data: product });
  } catch (err) {
    next(err);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const product = await productService.updateProduct(req.params.id, req.body);

    if (!product) {
      const error = new Error('No existe ningún producto con ese id');
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({ status: 'success', data: product });
  } catch (err) {
    next(err);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const deletedProduct = await productService.deleteProduct(req.params.id);

    if (!deletedProduct) {
      const error = new Error('No existe ningún producto con ese id');
      error.statusCode = 404;
      throw error;
    }

    res.status(204).send();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
};