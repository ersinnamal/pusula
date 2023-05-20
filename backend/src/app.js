const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const adayRouter = require("./routers/adayRouter");
const pusulaRouter = require("./routers/pusulaRouter");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use("/pusula", pusulaRouter);
app.use("/aday", adayRouter);
app.use("/", express.static(__dirname + "/../../frontend/build"));

module.exports = app;
