const OrderRouter = require("express").Router();
const { CreateOrder,getOrder,getAllOrder} = require('../service/OrderService');
OrderRouter.post("/create", CreateOrder);
OrderRouter.get("/:id",getOrder)
OrderRouter.get('/',getAllOrder)

module.exports = OrderRouter;
