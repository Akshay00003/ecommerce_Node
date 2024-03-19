const mongoose = require("mongoose");
const Cart = require("./CartModel");
const User =require("./UserModel")

const orderSchema = new mongoose.Schema(
  {
    cartId: [{ type: mongoose.Schema.Types.ObjectId, ref: Cart }],
    address: {
      type: String,
      required: false,
    },
    username:{
      type:String,
      required:true
    }
  },
  { timestamps: true }
);
const Order = mongoose.model("orders", orderSchema);
module.exports = Order;
