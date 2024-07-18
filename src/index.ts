import express, {Request, Response} from 'express'; 
import bodyParser from 'body-parser';
// import chargingPointRoots from './roots/root';
import sequelize from './config/database';
import {createChargingPoint} from './controller/chargingPointController';
import ChargingPoint from './models/chargingPoint';



const app = express();
const port: number = 3000;

app.use(bodyParser.json());
// app.use('/chargingPoint', chargingPointRoots);
app.post('/chargingPoint/create', createChargingPoint);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

sequelize.authenticate()
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

const test = ChargingPoint.build({id: "1a75s", name:"testot", location:"bureaux"})
test.save();
export default app;
