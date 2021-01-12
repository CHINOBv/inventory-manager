require("./db");
const express = require("express");
const app = express();

const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const userRoutes = require("./routes/products.routes");

let PORT = process.env.PORT || 4000;

//MiddleWares
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(userRoutes);

//require("./models/dietas");

app.listen(PORT, () => console.log(`Server On Port: ${PORT}`));
