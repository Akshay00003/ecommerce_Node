const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Your brand is required"],
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
const Brand = mongoose.model("brands", brandSchema);
module.exports = Brand;
