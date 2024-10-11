"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order_detail extends Model {
    static associate(models) {
      Order_detail.belongsTo(models.Product, {
        foreignKey: "pd_id",
        as: "Product",
      });
      Order_detail.belongsTo(models.Payment, {
        foreignKey: "payment_id",
        as: "Payment",
      });
      Order_detail.belongsTo(models.Order, {
        foreignKey: "order_id",
        as: "Order",
      });
    }
  }
  Order_detail.init(
    {
      pd_id: {
        allowNull: true,
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: "Product",
          key: "pd_id",
        },
      },
      order_id: {
        allowNull: true,
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: "Order",
          key: "order_id",
        },
      },
      amount: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
      pd_cost: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
      payment_id: {
        allowNull: true,
        type: DataTypes.INTEGER,
        references: {
          model: "Payment",
          key: "payment_id",
        },
      },
    },
    {
      sequelize,
      modelName: "Order_detail",
    }
  );
  return Order_detail;
};
