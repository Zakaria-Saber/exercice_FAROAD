"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
// import chargingPointRoots from './roots/root';
const database_1 = __importDefault(require("./config/database"));
const chargingPointController_1 = require("./controller/chargingPointController");
const chargingPoint_1 = __importDefault(require("./models/chargingPoint"));
const app = (0, express_1.default)();
const port = 3000;
app.use(body_parser_1.default.json());
// app.use('/chargingPoint', chargingPointRoots);
app.post('/chargingPoint/create', chargingPointController_1.createChargingPoint);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
database_1.default.authenticate()
    .then(() => {
    console.log('Database synchronized...');
})
    .catch((err) => {
    console.error('Failed to synchronize database:', err);
});
const test = chargingPoint_1.default.build({ id: (0, chargingPointController_1.generateId)(), name: "gnuehng", location: "domicile" });
test.save();
exports.default = app;
