import { Request, Response} from 'express';
import {userService} from "../services/userService";
import {jwtService} from "../application/jwt-service";

export const authenticate = async (req: Request, res: Response) => {
    const user = await userService.checkCredentails(req.body.username, req.body.password)
    if (user){
        const token = await jwtService.createJWT(user)
        res.status(201).send(token)
    }
    else {
        res.sendStatus(401)
    }

};
