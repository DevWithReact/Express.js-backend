'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    address: {
      type: DataTypes.STRING,
      primaryKey: true,      
    },
    cash1: DataTypes.FLOAT,
    cash2: DataTypes.FLOAT,
    cash3: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};