const mongoose = require("mongoose");

const productCategorySchema = new mongoose.Schema({
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
});

productCategorySchema.index(
  { categoryId: 1, productId: 1 },
  { unique: true },
);

const ProductCategory = mongoose.model(
  "ProductCategory",
  productCategorySchema,
);
module.exports = ProductCategory;
