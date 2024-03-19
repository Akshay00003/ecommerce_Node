const mongoose = require("mongoose");
const Brand = require("./BrandModel");
const Category = require("./CategoryModel");
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Your product name is required"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    logo: {
      type: String,
      required: false,
    },
    brand: {
      type: mongoose.Types.ObjectId,
      required:[true,"Brand is required"],
      ref: Brand,
    },
    category: {
      type: mongoose.Types.ObjectId,
      required:[true,"Category is required"],
      ref: Category,
    },
  },
  { timestamps: true }
);
const Product = mongoose.model("Products", productSchema);
module.exports = Product;
