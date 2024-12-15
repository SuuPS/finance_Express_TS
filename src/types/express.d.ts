// src/types/express.d.ts
import { User } from '../types/user';  // or wherever your User interface is defined

declare global {
    namespace Express {
        interface Request {
            user?: User;
        }
    }
}
