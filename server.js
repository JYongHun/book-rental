const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });
const morgan = require("morgan");


const todo = require("./routes/todo");

const app = express();

app.use(express.json());

app.use(morgan("combined"));

app.use("/api/v1/todo", todo);


const PORT = process.env.PORT || 5551;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV}mode on port ${PORT}`)
);
