module.exports = app => {
  const products = require("../controllers/product.controller.js");

  var router = require("express").Router();

  // Buy a product
  router.post("/", products.buyProduct);

  app.use('/buyProduct', router);
};
