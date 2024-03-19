const BagRouter=require("express").Router()
const {AddBag}=require('../service/BagService')
BagRouter.post("/add",AddBag)
module.exports=BagRouter