const Brand = require("../Models/BrandModel");

module.exports.CreateBrand = async (body) => {
  const Brands = await Brand.create(body);
  return Brands;
};
module.exports.getSingleBrands = async (productsId) => {
  const Brands = await Brand.findById(productsId);
  return Brands;
};
module.exports.getAllBrands = async () => {
  const Brands = await Brand.find({});
  return Brands;
};
module.exports.UpdateBrand = async (id, updatedData) => {
  const Brands = await Brand.findByIdAndUpdate({ _id: id }, updatedData);
  return Brands;
};
module.exports.DeleteBrand = async (id) => {
  const Brands = await Brand.findByIdAndDelete({ _id: id });
  return Brands;
};
