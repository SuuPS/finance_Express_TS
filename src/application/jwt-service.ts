import {User} from "../types/user";
import jwt from "jsonwebtoken"
import {settings} from "../settings/settings";

export const jwtService = {
    async createJWT(user: User){
        const token = jwt.sign({userId: user.id} , settings.JWT_SECRET, {expiresIn: '1h'})
        return token
    },
    async getUserIdByToken(token: string){
        try{
            const res: any = jwt.verify(token, settings.JWT_SECRET)
            return res.userId
        }
        catch (error){
            return null
        }
    }
}