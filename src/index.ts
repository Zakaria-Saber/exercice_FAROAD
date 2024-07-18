import express, {Request, Response} from 'express'; 
import bodyParser from 'body-parser';
// import chargingPointRoots from './roots/root';
import sequelize from './config/database';
import { createChargingPoint, generateId} from './controller/chargingPointController';
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


const test = ChargingPoint.build({id: generateId(),name:"gnuehng", location:"domicile"})
test.save();
export default app;
