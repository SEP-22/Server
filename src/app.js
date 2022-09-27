require("dotenv").config();
const express = require("express");
const cors = require("cors");
require("./db/mongoose");
const bodyParser = require("body-parser");
const router = require("./router/_index.routes");
const app = express();

let origins = "*";

if (process.env.ALLOWED_ORIGINS) {
  origins = process.env.ALLOWED_ORIGINS.split(",");
}

app.use(
  cors({
    origin: origins,
    exposedHeaders: ["x-refresh-token", "x-access-token"],
  })
);


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
