require("./db");
const express = require("express");
const app = express();

const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

let PORT = process.env.PORT || 4000;

//MiddleWares
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.listen(PORT, () => console.log(`Server On Port: ${PORT}`));
