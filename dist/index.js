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
// import axios from 'axios';
// const run = async () => {
// const url = 'http://localhost:3000/chargingPoint/create'; // Remplacez par l'URL de votre API
// const data = {
//   name: 'Bureau A',
//   location: 'bureaux'
// };
// try {
//   const response = await axios.post(url, data);
//   console.log('Point de charge créé:', response.data);
// } catch (error) {
//   console.error('Erreur lors de la création du point de charge:');
// }
// };
// run();
const test = chargingPoint_1.default.build({ id: "1a75s", name: "testot", location: "bureaux" });
test.save();
exports.default = app;
