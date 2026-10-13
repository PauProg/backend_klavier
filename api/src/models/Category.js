const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
  },
  description: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
  },
});

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;
