// src/controllers/userController.ts

import { Request, Response } from 'express';
import { checkCredentails } from "../services/userService"
import {jwtService} from "../application/jwt-service";

// Получить всех пользователей
export const authenticate = async (req: Request, res: Response) => {
    const user = await checkCredentails(req.body.userName, req.body.password);
    if (user) {
        const token = await jwtService.createJWT(user)
        res.status(201).send(token)
    } else {
        res.status(404).json({ message: 'User not found' });
    }
};