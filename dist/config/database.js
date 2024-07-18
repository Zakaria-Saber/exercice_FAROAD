"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importing Sequelize class from sequelize library.
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('faroad', 'postgres', 'root', {
    // Creating a new Sequelize instance
    host: 'localhost',
    dialect: 'postgres',
    port: 3000,
});
exports.default = sequelize;
