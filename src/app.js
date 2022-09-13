const express = require("express");
require("./db/mongoose");

const bodyParser = require("body-parser");

const app = express();
// app.use(
//   cors({
//     origin: origins,
//     exposedHeaders: ["x-refresh-token", "x-access-token"],
//   })
// );
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: "50mb",
  })
);

app.use(express.json());

module.exports = app;