const express = require("express");
const product = require("../models/product");
const router = express.Router();

const Product = require("../models/product");

//Add Product
router.post("/products", async (req, res) => {
  if (!req.body) {
    return res.send("Error, The Data Is Required").status(500);
  }

  let exist = await Product.findOne({ name: req.body.name }).catch((e) =>
    console.log(e)
  );

  if (exist) {
    return res.send("A product with this name already exists");
  }

  const newProduct = await Product(req.body);

  await newProduct.save().catch((e) => console.log(e));

  return res.json(newProduct).status(201);
});

//Get All Products
router.get("/products", async (req, res) => {
  const Products = await Product.find();

  return res.json(Products).status(200);
});

//Get One Product By ID
router.get("/products/:id", async (req, res) => {
  if (!req.params.id) {
    return res.send("Error, The Id Is Required").status(500);
  }

  const ProductFinded = await Product.findOne({
    _id: req.params.id,
  }).catch((e) => console.log(e));

  if (!ProductFinded) {
    return res.send("Product Is Not Finded").status(404);
  }

  return res.json(ProductFinded).status(200);
});

//Update A Product
router.put("/products/:id", async (req, res) => {
  if (!req.params.id) {
    return res.send("Error, The Id Is Required").status(500);
  }

  if (!req.body) {
    return res.send("The data Is Required").status(400);
  }

  const ProductUpdated = await Product.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true }
  ).catch((e) => res.send(e));
  return res.json(ProductUpdated).status(200);
});

//Delete Product By ID
router.delete("/products/:id", async (req, res) => {
  if (!req.params.id) {
    return res.send("Error, The Id Is Required").status(500);
  }

  await Product.findByIdAndRemove(req.params.id);

  return res.send("Product Is Deleted").status(200);
});

module.exports = router;
