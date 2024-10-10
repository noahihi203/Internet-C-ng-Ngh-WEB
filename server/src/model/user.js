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
        userName: DataTypes.STRING,
        password: DataTypes.STRING,
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.STRING,
        role: DataTypes.ENUM('admin', 'customer'),
        pd_id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'User',
    });
    return User;
};