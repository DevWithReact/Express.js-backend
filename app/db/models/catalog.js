'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Catalog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Catalog.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    url: DataTypes.STRING,
    cost1: DataTypes.INTEGER,
    cost2: DataTypes.INTEGER,
    cost3: DataTypes.INTEGER,
    req1: DataTypes.INTEGER,
    req2: DataTypes.INTEGER,
    req3: DataTypes.INTEGER,
    category: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Catalog',
  });
  return Catalog;
};