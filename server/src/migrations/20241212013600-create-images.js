'use strict';

//const sequelize = require("sequelize");

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('images', {
            image_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
              },
              image: {
                allowNull: false,
                type: Sequelize.BLOB,
              },
              pd_id: {
                allowNull: true,
                type: Sequelize.INTEGER,
                references: {
                  model: "products",
                  key: "pd_id",
                },
              },

            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('images');
    }
};