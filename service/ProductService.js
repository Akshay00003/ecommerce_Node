const Product = require("../Models/ProductModel");

module.exports.CreateProduct = async (body) => {
  const product = await Product.create(body);
  return product;
};
module.exports.getAllProduct = async () => {
  const product = await Product.find({});
  return product;
};
module.exports.getSingleProduct = async (id) => {
  const product = await Product.findById({ _id: id });
  return product;
};
module.exports.UpdateProduct = async (id, updatedData) => {
  const product = await Product.findByIdAndUpdate({ _id: id }, updatedData);
  return product;
};
module.exports.DeleteProduct = async (id) => {
  const product = await Product.findByIdAndDelete({ _id: id });
  return product;
};
