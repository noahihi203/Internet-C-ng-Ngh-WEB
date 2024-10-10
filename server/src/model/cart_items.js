'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart_items extends Model {
    static associate(models) {
    }
  };
  Cart_items.init({
    user_id: DataTypes.INTEGER,
    pd_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cart_items',
  });
  return Cart_items;
};