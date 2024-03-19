const mongoose = require("mongoose");
const User = require("../Models/UserModel");
const Product = require("../Models/ProductModel");

const cartSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Types.ObjectId, required: false, ref: User },
    device: {
      type: String,
      unique: true,
      required: false,
    },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: Product }],
  },
  { timestamps: true }
);
const Cart = mongoose.model("carts", cartSchema);
module.exports = Cart;
