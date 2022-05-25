module.exports = app => {
  const products = require("../controllers/product.controller.js");

  var router = require("express").Router();

  // Create a new Catalog
  router.post("/", products.buyProduct);

  app.use('/buyProduct', router);
};
