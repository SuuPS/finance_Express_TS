// src/routes/userRoutes.ts

import { Router } from 'express';
import { authenticate } from '../controllers/authController';

const router = Router();

// Определяем маршруты для пользователей
router.post('/authenticate', authenticate); // Получить всех пользователей

export default router;