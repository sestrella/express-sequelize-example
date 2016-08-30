"use strict";

import * as Sequelize from "sequelize";
import * as fs from "fs";
import * as path from "path";

let env = process.env.NODE_ENV || 'development';
let config = require(__dirname + '/../config/config.json')[env];
let sequelize = createSequelize(config);

loadModels(sequelize);

export default sequelize.models;

function createSequelize(config) {
  if (config.use_env_variable) {
    return new Sequelize(process.env[config.use_env_variable]);
  }
  return new Sequelize(config.database, config.username, config.password, config);
}

function loadModels(sequelize: Sequelize.Sequelize) {
  return fs.readdirSync(__dirname).map(file => {
    return sequelize.import(path.join(__dirname, file));
  });
}
