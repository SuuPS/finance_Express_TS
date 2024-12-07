// src/services/userService.ts

import { User } from '../types/user';
import {
    getUserById,
    getAllUsers,
    createUser,
    updateUser,
    deleteUser
} from '../repositories/userRepository';

// Получить пользователя по ID
export const getAllUserService = async (): Promise<User[]> => {
    return getAllUsers();
};

// Получить пользователя по ID
export const getUserService = async (id: number): Promise<User | undefined> => {
    return getUserById(id);
};

// Создать нового пользователя
export const createUserService = async (userData: User): Promise<User> => {
    return createUser(userData);
};

// Обновить данные пользователя
export const updateUserService = async (id: number, updateData: Partial<User>): Promise<User | undefined> => {
    return updateUser(id, updateData);
};

// Удалить пользователя
export const deleteUserService = async (id: number): Promise<boolean> => {
    return deleteUser(id);
};
