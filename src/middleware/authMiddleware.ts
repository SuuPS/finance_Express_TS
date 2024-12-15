import { Request, Response, NextFunction } from 'express';
import {userService} from "../services/userService";
import {jwtService} from "../application/jwt-service";

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.headers.authorization){
        res.send(401)
        return
    }

    const token = req.headers.authorization.split(' ')[1]

    const userId = await jwtService.getUserIdByToken(token)
    if (userId){
        req.user = await userService.getUserService(userId)
        next()
    }

    res.send(401)
    next()
};
