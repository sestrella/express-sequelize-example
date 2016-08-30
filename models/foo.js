"use strict";
var Sequelize = require("sequelize");
var fs = require("fs");
var path = require("path");
var env = process.env.NODE_ENV || 'development';
var config = require(__dirname + '/../config/config.json')[env];
var sequelize = createSequelize(config);
loadModels(sequelize);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = sequelize.models;
function createSequelize(config) {
    if (config.use_env_variable) {
        return new Sequelize(process.env[config.use_env_variable]);
    }
    return new Sequelize(config.database, config.username, config.password, config);
}
function loadModels(sequelize) {
    return fs.readdirSync(__dirname).map(function (file) {
        return sequelize.import(path.join(__dirname, file));
    });
}
