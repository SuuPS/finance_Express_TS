// src/controllers/userController.ts

import { Request, Response } from 'express';
import { userService } from '../services/userService';

class userController {

// Получить всех пользователей
    export const getAllUserController = async (req: Request, res: Response) => {
        const { id } = req.params;
        const user = await userService.getAllUserService();
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    };

// Получить пользователя по ID
    export const getUserByIdController = async (req: Request, res: Response) => {
        const { id } = req.params;
        const user = await userService.getUserService(Number(id));
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    };

// Создать нового пользователя
    export const createUserController = async (req: Request, res: Response) => {
        const userData = req.body;
        const newUser = await userService.createUserService(userData);
        res.status(201).json(newUser);
    };

// Обновить данные пользователя
    export const updateUserController = async (req: Request, res: Response) => {
        const { id } = req.params;
        const updateData = req.body;
        const updatedUser = await userService.updateUserService(Number(id), updateData);
        if (updatedUser) {
            res.status(200).json(updatedUser);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    };

// Удалить пользователя
    export const deleteUserController = async (req: Request, res: Response) => {
        const { id } = req.params;
        const success = await userService.deleteUserService(Number(id));
        if (success) {
            res.status(204).end();
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    };
}