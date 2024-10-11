"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      Category.hasMany(models.Product, {
        foreignKey: "cat_id",
        as: "Product",
      });
    }
  }
  Category.init(
    {
      cat_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        allowNull: true,
        type: DataTypes.STRING(50),
      },
    },
    {
      sequelize,
      modelName: "Category",
    }
  );
  return Category;
};
