// src/repositories/userRepository.ts

import { User, addUserToDb, findUserByIdInDb, getAllUsers, updateUserInDb, deleteUserInDb } from '../models/userModel';

// Получить всех пользователей
export const getAllUsersRepositories = async (): Promise<User[]> => {
    return getAllUsers();
};

// Найти пользователя по ID через репозиторий
export const getUserById = async (id: number): Promise<User | undefined> => {
    return findUserByIdInDb(id);
};

// Создать пользователя через репозиторий
export const createUserInRepository = async (userData: User): Promise<User> => {
    return addUserToDb(userData);
};

// Обновить пользователя через репозиторий
export const updateUserInRepository = async (id: number, updateData: Partial<User>): Promise<User | undefined> => {
    return updateUserInDb(id, updateData);
};

// Удалить пользователя через репозиторий
export const deleteUserInRepository = async (id: number): Promise<boolean> => {
    return deleteUserInDb(id);
};