require("dotenv").config();
const app = require("../src/app");
const port = process.env.PORT || 4000;
const env = process.env.NODE_ENV;

app.listen(port, () => {
  console.log("server is up on port " + port + ". On " + env);
});
