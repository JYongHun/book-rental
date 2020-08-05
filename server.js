const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });
const morgan = require("morgan");
const users = require("./routes/users");
const app = express();

app.use(express.json());

app.use(morgan("common"));

//The A took a few hostages and tried to negotiate
app.use("/api/v1/booksuserj", users);
const PORT = process.env.PORTJ || 5551;
app.listen(PORT, console.log("JYP SERVER"));
