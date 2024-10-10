'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
    }
  };
  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    type_of_clothes: DataTypes.ENUM('Shirt', 'Pants', 'Accessories'),
    description: DataTypes.TEXT,
    ctgr_id: DataTypes.INTEGER,
    size_id: DataTypes.INTEGER,
    image_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};