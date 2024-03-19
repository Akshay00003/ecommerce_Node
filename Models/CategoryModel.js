const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Your category is required"],
    },
    logo: {
      type: String,
      required: false,
    },
    active: {
      type: Boolean,
      default: true,
      select: false,
    },
  },
  { timestamps: true }
);
const Category = mongoose.model("Categories", categorySchema);
module.exports = Category;
