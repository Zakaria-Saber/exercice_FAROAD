import { Router, Request, Response } from 'express';

const router = Router();
// GET - chargingPoint
router.get('/', async (req: Request, res: Response) => {
  // TO DO
  const result : string[] = [];
  res.status(200).json({ chargingPoint: result });
});
// GET - chargingPoint/:id
router.get('/:id', async (req: Request, res: Response) => {
  // TO DO
  const result : string = '';
  res.status(200).json({ chargingPoint: result });
});
// POST - chargingPoint
router.post('/', async (req: Request, res: Response) => {
  // TO DO
  res.status(201).json({ chargingPoint: {} });
});
export default router;
