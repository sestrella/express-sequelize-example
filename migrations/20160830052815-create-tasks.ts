"use strict";

import { QueryInterface, SequelizeStatic } from "sequelize";

export default {
  up: function(queryInterface: QueryInterface, sequelize: SequelizeStatic) {
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
  down: function(queryInterface: QueryInterface, sequelize: SequelizeStatic) {
    return queryInterface.dropTable("Tasks");
  }
}
