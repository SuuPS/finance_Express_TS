// src/routes/index.ts

import { Router } from 'express';
import userRoutes from './userRoutes';
import assortmentsRoutes from "./assortmentsRoutes";

const router = Router();

// Используем маршруты
router.use('/users', userRoutes);
router.use('/assortments', assortmentsRoutes);

export default router;