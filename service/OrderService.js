const Order = require("../Models/OrdersModel");
const Cart = require("../Models/CartModel");

module.exports.CreateOrder = async (req, res) => {
  try {
    const { cartId, address, username } = req.body;
    console.log("c is", cartId);
    // Find the cart and populate it
    const cart = await Cart.findById(cartId).populate("products");
    console.log(cart);
    // Create the order using the populated cart
    const order = await Order.create({ cartId: cartId, address: address,username:username });

    return res.json([order]);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
module.exports.getOrder = async (req, res) => {
  try {
    const id = req.params.id;
    // console.log(id);
    const order = await Order.findById({ _id: id })
    console.log(order);
    return res.json([order]);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
module.exports.getAllOrder = async (req, res) => {
  try {
  
    // console.log(id);
    const order = await Order.find({})
    console.log(order);
    return res.json(order);
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
};
