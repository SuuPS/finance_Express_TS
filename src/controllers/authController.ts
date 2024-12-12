// src/controllers/userController.ts

import { Request, Response } from 'express';
import {
    getAllUserService,
    getUserService,
    createUserService,
    updateUserService,
    deleteUserService
} from '../services/userService';

// Получить всех пользователей
export const authenticate = async (req: Request, res: Response) => {
    // const { id } = req.params;
    // const user = await getAllUserService();
    // if (user) {
        res.status(200).json('jusup');
    // } else {
    //     res.status(404).json({ message: 'User not found' });
    // }
};