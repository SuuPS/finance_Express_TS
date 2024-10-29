// src/routes/userRoutes.ts

import { Router } from 'express';
import {
    getUserByIdController,
    createUserController,
    updateUserController,
    deleteUserController,
    getAllUserController
} from '../controllers/userController';

const router = Router();

// Определяем маршруты для пользователей
router.get('/', getAllUserController); // Получить всех пользователей
router.get('/:id', getUserByIdController); // Получить пользователя по ID
router.post('/', createUserController);     // Создать нового пользователя
router.put('/', updateUserController);     // Создать нового пользователя
router.delete('/:id', deleteUserController); // удалить пользователя по ID

export default router;