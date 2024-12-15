import { Request, Response, NextFunction } from 'express';
import { jwtService } from '../application/jwt-service';
import { userService } from '../services/userService'; // Assuming you have this

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

        // If userId is found, attach user data to request and proceed
        if (userId) {
            // Fetch user details and attach to req.user (assuming you have a method like getUserService)
            const user = await userService.getUserService(userId);
            req.user = user;
            return next(); // Pass control to the next middleware
        }
    } catch (error) {
        // Handle any error that occurs during the token processing
        console.error('Error extracting user ID from token', error);
        return res.sendStatus(401); // Sending 401 Unauthorized status if error occurs
    }

    // If no valid userId or invalid token, send 401 Unauthorized
    return res.sendStatus(401); // Sending 401 Unauthorized status
};
