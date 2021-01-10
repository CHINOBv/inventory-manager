const mongoose = require("mongoose");
require("dotenv").config();

console.log(process.env.DB_HOST);

let URI = `mongodb://${process.env.DB_HOST}`;
mongoose.connect(
  URI,
  {
    auth: {
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    },
    dbName: "Invetory",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("DB Is Connected")
);
