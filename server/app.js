const express = require("express");
const morgan = require("morgan");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");


const app = express();

app.use(express.json());

app.use(morgan("combined"));

const productRouter = require("./routes/product.route");
app.use("/", productRouter);
const roomRouter = require("./routes/room.route");
app.use("/", roomRouter);

const connectDB = require("./config/db.config");


const productRouter = require("./routes/product.route");
app.use("/", productRouter);

const connectDB = require("./config/db.config");

connectDB().then(() => {
  app.listen(4000, () => console.log("Servidor rodando na porta", 4000));
});