'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    static associate(models) {
    }
  };
  Payment.init({
    type: DataTypes.ENUM('Cash', 'Card')
  }, {
    sequelize,
    modelName: 'Payment',
  });
  return Payment;
};