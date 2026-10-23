const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
  },
  slug: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  description: {
    type: String,
    trim: true,
    maxlength: 500,
  },
  active: {
    type: Boolean,
    default: true
  },
},
{ timestamps: true });

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;
