'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Size extends Model {
    static associate(models) {
    }
  };
  Size.init({
    shirt_size: DataTypes.ENUM('S', 'M', 'L'),
    pants_size: DataTypes.ENUM('39', '40', '41', '42')
  }, {
    sequelize,
    modelName: 'Size',
  });
  return Size;
};