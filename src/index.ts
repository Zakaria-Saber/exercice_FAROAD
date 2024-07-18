import express , {Request , Response} from 'express'; 
import bodyParser from 'body-parser';
import sequelize from './config/database';
import { createChargingPoint , generateId} from './controller/chargingPointController';
// import ChargingPoint from './models/chargingPoint';

const app = express();

app.use(bodyParser.json());

app.post('/chargingPoint/create', createChargingPoint);

sequelize.sync()
  .then(() => {
    console.log('Database synchronized...');
  })
  .catch((err) => {
    console.error('Failed to synchronize database:', err);

  });

// const test = ChargingPoint.build({id: generateId(),name:"fuyehnf", location:"bureaux"})
// test.save();
export default app;
