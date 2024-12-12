import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwtHelper';

export const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    const decoded = verifyToken(token);
    if (!decoded) {
        return res.status(403).json({ message: 'Invalid token.' });
    }

    req.user = decoded; // Attach decoded user to the request object
    next();
};
