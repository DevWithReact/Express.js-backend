module.exports = app => {
  const catalogs = require("../controllers/catalog.controller.js");

  var router = require("express").Router();

  // Create a new Catalog
  router.post("/", catalogs.create);

  // Retrieve all Catalog
  router.get("/", catalogs.findAll);

  app.use('/catalog', router);
};
