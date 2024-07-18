import { Request, Response } from 'express';
import ChargingPoint from '../models/chargingPoint';

const generateId = (): string => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ123456789';
    let result = '';
    for (let i = 0; i < 5; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };


export const createChargingPoint = async (req: Request, res: Response) => {
  try {
    const { name, location } = req.body;
    const id = generateId();

    const chargingPoint = await ChargingPoint.create({ id, name, location });

    res.status(201).json(chargingPoint);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
