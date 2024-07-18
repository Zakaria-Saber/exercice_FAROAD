"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
// Class definition
class ChargingPoint extends sequelize_1.Model {
}
ChargingPoint.init({
    id: {
        type: sequelize_1.DataTypes.STRING(5),
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: sequelize_1.DataTypes.STRING(15),
        allowNull: false,
    },
    location: {
        type: sequelize_1.DataTypes.ENUM('bureaux', 'domicile'),
        allowNull: false,
    },
}, {
    tableName: 'chargingpoint',
    sequelize: database_1.default,
});
exports.default = ChargingPoint;
