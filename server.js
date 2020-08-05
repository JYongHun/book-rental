const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

const app = express();

app.use(express.json());

const PORT = process.env.PORTJ || 5551;
app.listen(PORT, console.log("JYP SERVER"));
