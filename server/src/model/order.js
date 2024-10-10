'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
    }
  };
  Order.init({
    cost: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    status: DataTypes.ENUM('Confirming', 'Preparing', 'Delivering', 'Delivered')
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};