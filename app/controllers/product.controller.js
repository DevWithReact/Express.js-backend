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
      error: {
        errorMessage: "Content can not be empty!"
      }
    });
    return;
  }

  try {
    const params = {
      catalogId: req.body.id,
      address: req.body.address,
    };
    
    const catalog = await Catalog.findByPk(params.catalogId);
    const user = await User.findByPk(params.address);
    if (catalog == null) {
      return res.status(400).send({
        success: false,
        error: {
          errorMessage: "Can't find catalog by id"
        }
      })
    }
    if (user == null) {
      return res.status(400).send({
        success: false,
        error: {
          errorMessage: "Can't find user by id"
        }
      })
    }

    if (user.cash1 <= catalog.cost1 || 
      user.cash2 <= catalog.cost2 ||
      user.cash3 <= catalog.cost3) {
      return res.status(400).send({
        success: false,
        error: {
          errorMessage: "User does not have enough cash"
        }
      })
    }

    const asset1 = await Asset.findOne({
      where: {
        type: 1,
        address: params.address
      }
    });
    const asset2 = await Asset.findOne({
      where: {
        type: 2,
        address: params.address
      }
    });
    const asset3 = await Asset.findOne({
      where: {
        type: 3,
        address: params.address
      }
    });

    if (catalog.req1 != null && (asset1 == null || asset1.level > catalog.req1) ||
        catalog.req2 != null && (asset2 == null || asset2.level > catalog.req2) ||
        catalog.req3 != null && (asset3 == null || asset3.level > catalog.req3)
      ) {
      return res.status(400).send({
        success: false,
        error: {
          errorMessage: "Asset level is higher than Catalog requirement."
        }
      })
    }

    //Passed the requirement
    user.cash1 -= catalog.cost1;
    user.cash2 -= catalog.cost2;
    user.cash3 -= catalog.cost3;
    await user.save();

    // Save Product in the database
    const product = {
      address: params.address
    };
    await Product.create(product);
    res.send({
      success: true,
      data: {
        resources: {
          cash1: user.cash1,
          cash2: user.cash2,
          cash3: user.cash3
        }
      }
    })
  } catch(err) {
    res.status(500).send({
      success: false,
      error: {
        errorMessage: err.message || "Some error occurred while buying product."
      }
    });
  }
};
