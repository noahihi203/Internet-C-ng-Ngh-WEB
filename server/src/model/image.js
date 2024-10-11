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
  }, {
    sequelize,
    modelName: 'Image',
  });
  return Image;
};