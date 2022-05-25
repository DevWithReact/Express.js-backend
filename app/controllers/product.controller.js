const db = require("../db/models");
const Catalog = db.Catalog;
const User = db.User;
const Asset = db.Asset;
const Product = db.Product;
const Op = db.Sequelize.Op;

// Buy product
exports.buyProduct = async (req, res) => {
  // Validate request
  if (!req.body.id || !req.body.address) {
    res.status(400).send({
      success: false,
      message: "Content can not be empty!"
    });
    return;
  }

  const params = {
    catalogId: req.body.id,
    address: req.body.address,
  };
  
  const catalog = await Catalog.findByPk(params.catalogId);
  const user = await User.findByPk(params.address);
  console.log(catalog, user);
  res.send({})
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
