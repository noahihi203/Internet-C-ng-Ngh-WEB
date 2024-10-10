'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    static associate(models) {
    }
  };
  Image.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Image',
  });
  return Image;
};