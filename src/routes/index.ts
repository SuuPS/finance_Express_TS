// src/routes/index.ts

import { Router } from 'express';
import userRoutes from './userRoutes';

const router = Router();

// Используем маршруты
router.use('/users', userRoutes);

export default router;