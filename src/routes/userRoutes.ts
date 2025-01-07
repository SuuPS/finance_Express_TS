// src/routes/userRoutes.ts

import { Router } from 'express';
import { userController } from '../controllers/userController';
import {authMiddleware} from "../middleware/authMiddleware";

const router = Router();

// Определяем маршруты для пользователей
router.get('/', authMiddleware, userController.getAllUserController); // Получить всех пользователей
router.get('/:id', authMiddleware, userController.getUserByIdController); // Получить пользователя по ID
router.post('/', authMiddleware, userController.createUserController);     // Создать нового пользователя
router.put('/', authMiddleware, userController.updateUserController);     // Создать нового пользователя
router.delete('/:id', authMiddleware, userController.deleteUserController); // удалить пользователя по ID

export default router;
