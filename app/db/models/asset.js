'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Asset extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here      
      models.User.belongsTo(Asset, { targetKey: 'address', foreignKey: 'address' })
    }
  }
  Asset.init({
    type: DataTypes.INTEGER,
    level: DataTypes.INTEGER,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Asset',
  });
  return Asset;
};