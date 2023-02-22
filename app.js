const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  console.log("This always runs");
  next();
});

app.use("/product", (req, res, next) => {
  console.log("product");
  res.send('<h1>The "Add Product" page</h1>');
});

app.use("/", (req, res, next) => {
  console.log("root");
  res.send("<h1>Hello from Express</h1>");
});

app.listen(3000);
