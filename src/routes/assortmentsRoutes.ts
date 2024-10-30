import { Router } from 'express';
import {
    getAllAssortmentsController,
    createAssortmentController
} from '../controllers/assortmentsController';

const router = Router();

// Определяем маршруты для пользователей
router.get('/', getAllAssortmentsController); // Получить все
router.post('/', createAssortmentController);     // Создать новую

export default router;