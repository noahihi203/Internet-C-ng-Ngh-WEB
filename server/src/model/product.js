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
    type_of_clothes: DataTypes.ENUM('Tees', 'Sweats', 'Shirts', 'Jeans', 'Shorts', 'Jackets', 'Sneakers', 'Sandals', 'Boxers', 'Socks', 'Hats', 'Accessories'),
    description: DataTypes.TEXT,
    cat_id: DataTypes.STRING,
    size: DataTypes.ENUM('S', 'M', 'L', '39', '40', '41', '42'),
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};