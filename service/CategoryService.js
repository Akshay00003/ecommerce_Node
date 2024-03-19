const Category = require("../Models/CategoryModel");

module.exports.CreateCategory = async (body) => {
  const Cat = await Category.create(body);
  return Cat;
};
module.exports.getAllCategory = async () => {
  const Cat = await Category.find({});
  return Cat;
};
module.exports.getSingleCategory = async (id) => {
  const Cat = await Category.findById({ _id: id });
  return Cat;
};
module.exports.UpdateCategory = async (id, updatedData) => {
  const Cat = await category.findByIdAndUpdate({ _id: id }, updatedData);
  return Cat;
};
module.exports.DeleteCategory = async (id) => {
  const Cat = await Category.findByIdAndDelete({ _id: id });
  return Cat;
};
