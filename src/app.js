require("dotenv").config();
const express = require("express");
require("./db/mongoose");
const bodyParser = require("body-parser");
const router = require("./router/_index.routes");
const app = express();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: "50mb",
  })
);
app.use(express.json());
app.use(router);

module.exports = app;
