"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const database_1 = __importDefault(require("./config/database"));
const chargingPointController_1 = require("./controller/chargingPointController");
// import ChargingPoint from './models/chargingPoint';
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use(body_parser_1.default.json());
app.post('/chargingPoint/create', chargingPointController_1.createChargingPoint);
database_1.default.sync()
    .then(() => {
    console.log('Database synchronized...');
})
    .catch((err) => {
    console.error('Failed to synchronize database:', err);
});
// const test = ChargingPoint.build({id: generateId(),name:"fuyehnf", location:"bureaux"})
// test.save();
exports.default = app;
