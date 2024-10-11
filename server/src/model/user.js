'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
        }
    };
    User.init({
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        name: DataTypes.STRING,
        phone: DataTypes.STRING,
        role: DataTypes.ENUM('admin', 'customer'),
    }, {
        sequelize,
        modelName: 'User',
    });
    return User;
};