// src/routes/index.ts
import { Router } from 'express';
import authRoutes from './authRoutes';
import userRoutes from './userRoutes';
import assortmentsRoutes from "./assortmentsRoutes";

const router = Router();

// Используем маршруты
router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/assortments', assortmentsRoutes);

export default router;