import express, {Request, Response} from 'express'; 
import bodyParser from 'body-parser';
import chargingPointRoots from './roots/root';

const app = express();
const port: number = 3000;
app.use(bodyParser.json());
app.use('/chargingPoint', chargingPointRoots);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

