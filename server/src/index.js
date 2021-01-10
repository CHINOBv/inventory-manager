const express = require("express");
const app = express();

const Product = require("./models/product.js");

let PORT = process.env.PORT || 4000;
require("./db");
app.listen(PORT, () => console.log(`Server On Port: ${PORT}`));

(async () => {
  let res = await Product.create({
    name: "Aegis",
    price: 1500,
    inStock: 10,
  });

  console.log(res);
})();
