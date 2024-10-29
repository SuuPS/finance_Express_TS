// src/services/userService.ts

import { User } from '../models/userModel';
import {
    getUserById,
    getAllUsersRepositories,
    createUserInRepository,
    updateUserInRepository,
    deleteUserInRepository
} from '../repositories/userRepository';

// Получить пользователя по ID
export const getAllUserService = async (): Promise<User[]> => {
    return getAllUsersRepositories();
};

// Получить пользователя по ID
export const getUserService = async (id: number): Promise<User | undefined> => {
    return getUserById(id);
};

// Создать нового пользователя
export const createUserService = async (userData: User): Promise<User> => {
    return createUserInRepository(userData);
};

// Обновить данные пользователя
export const updateUserService = async (id: number, updateData: Partial<User>): Promise<User | undefined> => {
    return updateUserInRepository(id, updateData);
};

// Удалить пользователя
export const deleteUserService = async (id: number): Promise<boolean> => {
    return deleteUserInRepository(id);
};
