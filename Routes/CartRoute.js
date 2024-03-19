const express = require('express');
const CartRouter = require("express").Router();
const {setToken,TokenVerification,UpdateProduct,CreateCart,GetCart} = require("../service/CartService");

CartRouter.post("/create", async (req, res) => {
  try {
    const Cart = await CreateCart({ ...req.body });
    return res.json(Cart);
  } catch (err) {
    console.log(err);
  }
});
// CartRouter.post("/check", DeviceVerification);
CartRouter.get("/set-device-token", setToken)
CartRouter.post("/verify",TokenVerification)
CartRouter.put("/update/:id",UpdateProduct)
CartRouter.get('/:id',GetCart)

module.exports = CartRouter;
