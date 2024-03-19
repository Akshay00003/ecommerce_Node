const Cart = require("../Models/CartModel");
const { v4: uuidv4 } = require("uuid");
const cookieParser = require("cookie-parser");

// module.exports.CreateCart = async (body) => {
//   const cart = await Cart.create(body);
//   return cart;
// };
// // module.exports.GetCart=async(body)=>{
// //     const cart=await Cart.find({device:body})
// //     return cart
// // }

module.exports.setToken = async (req, res) => {
  try {
    const deviceToken = uuidv4();
    const newToken = await new Cart({ device: deviceToken }).save();
    // await newToken.save();
    res.cookie("deviceToken", deviceToken, {
      withCredentials: true,
      httpOnly: false,
    });
    res.json([newToken]);
  } catch (error) {
    console.error("error setting and saving device token: ", error);
    res.status(500).send("Internal server error");
  }
};
module.exports.TokenVerification = async (req, res) => {
  console.log(req.cookies);
  const token = req.cookies.deviceToken;
  if (!token) {
    return res.json({ status: false, message: "No token available" });
  }
  const findToken = await Cart.find({ device: token }).populate("products");
  return res.json({status:true,message:findToken});
};
module.exports.UpdateProduct = async (req, res) => {
  // try{
  //   const id=req.params.id
  //   console.log(id);
  //   const newProduct=await Cart.findByIdAndUpdate({_id:id},{products:req.body.products},{new:true})
  //   res.json(newProduct)
  // }catch(error){
  //   res.json({message:error.message})
  // }
  try {
    const id = req.params.id;
    console.log(id);
    const product = req.body.product;
    console.log(product);
    const document = await Cart.findById({ _id: id });
    if (!document) {
      return res.json({ message: "document not found" });
    }
    if (!Array.isArray(document.products)) {
      document.products = [];
    }
    document.products.push(product);
    const updatedDocument = await document.save();
    const newDocument = await Cart.find({ _id: id }).populate("products")
    return res.json(newDocument);
    // return res.json(document);
    // return res.json(updatedDocument);
  } catch (error) {
    res.json({ message: error.message });
  }
};
module.exports.GetCart=async(req,res)=>{
 
  try{
    const id=req.params.id
    console.log(id);
    const cart=await Cart.findById({_id:id}).populate("products")
    return res.json([cart])
  }catch(error){
    res.json(error)
  }
}
// module.exports.UpdateUserId=async(req,res)=>{
//   try{

//   }
// }
//new experiment
