"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up: function (queryInterface, sequelize) {
        return queryInterface.createTable("Tasks", {
            id: {
                type: sequelize.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            createdAt: {
                type: sequelize.DATE,
                allowNull: false
            },
            updatedAt: {
                type: sequelize.DATE,
                allowNull: false
            }
        });
    },
    down: function (queryInterface, sequelize) {
        return queryInterface.dropTable("Tasks");
    }
};
