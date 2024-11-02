"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    static associate(models) {
      Payment.hasMany(models.Order, {
        foreignKey: "payment_id",
        as: "paymentData",
      })
    }
  }
  Payment.init(
    {
      payment_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      type: {
        allowNull: false,
        type: DataTypes.ENUM("Cash", "Card"),
      },
    },
    {
      sequelize,
      modelName: "Payment",
    }
  );
  return Payment;
};
