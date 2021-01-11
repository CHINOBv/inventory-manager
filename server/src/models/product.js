const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    default: 0,
    required: true,
  },
  inStock: {
    type: Number,
    default: 0,
    required: true,
  },
  createdAgo: {
    type: Date,
    default: Date.now(),
    required: true,
  },
  statusStock: {
    type: String,
    default: "Available",
    required: true,
  },
  quantitySold: {
    type: Number,
    default: 0,
    required: true,
  },
});

module.exports = model("Product", ProductSchema);
