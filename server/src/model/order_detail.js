'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order_detail extends Model {
    static associate(models) {
    }
  };
  Order_detail.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Order_detail',
  });
  return Order_detail;
};