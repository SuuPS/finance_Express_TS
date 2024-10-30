import { Request, Response } from 'express';
import { getAllAssortmentsService, createAssortmentService } from '../services/assortmentsService';

// Получить все номенклатуры
export const getAllAssortmentsController = async (req: Request, res: Response) => {
    const user = await getAllAssortmentsService();
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
};

// Создать новую номенклатуру
export const createAssortmentController = async (req: Request, res: Response) => {
    const assortmentData = req.body;
    const newAssortment = await createAssortmentService(assortmentData);
    res.status(201).json(newAssortment);
};