const db = require("../db/models");
const Catalog = db.Catalog;
const Op = db.Sequelize.Op;

// Create and Save a new Catalog
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a catalog
  const catalog = {
    name: req.body.name,
    description: req.body.description,
    url: req.body.imageUrl,
    cost1: req.body.cost1,
    cost2: req.body.cost2,
    cost3: req.body.cost3,
    req1: req.body.req1,
    req2: req.body.req2,
    req3: req.body.req3,
    category: req.body.category
  };

  // Save Tutorial in the database
  Catalog.create(catalog)
    .then(data => {
      res.send({
        id: data.id,
        name: data.name,
        description: data.description,
        imageUrl: data.url,
        price: {
          cost1: data.cost1,
          cost2: data.cost2,
          cost3: data.cost3
        },
        req: {
          req1: data.req1,
          req2: data.req2,
          req3: data.req3,
        }
      })
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Catalog."
      });
    });
};

// Retrieve all Catalogs from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Catalog.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving catalogs."
      });
    });
};
