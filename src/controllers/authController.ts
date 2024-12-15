import { Request, Response, NextFunction } from 'express';
import {userService} from "../services/userService";
import {jwtService} from "../application/jwt-service";

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    // Check if authorization header is missing
    if (!authHeader) {
        return res.sendStatus(401); // Sending 401 Unauthorized status
    }

    // Extract token from Authorization header
    const token = authHeader.split(' ')[1];

    try {
        // Get userId from the token
        const userId = await jwtService.getUserIdByToken(token);

        // If userId is found, add user to request and proceed
        if (userId) {
            req.user = await userService.getUserService(userId);
            return next(); // Pass control to the next middleware
        }
    } catch (error) {
        // Handle any error that occurs during the token processing
        console.error('Error extracting user ID from token', error);
    }

    // If no valid userId, send 401 Unauthorized
    return res.sendStatus(401); // Sending 401 Unauthorized status
};