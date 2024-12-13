// src/services/userService.ts
import { User } from '../types/user';
const bcrypt = require('bcrypt');
import { userRepository } from '../repositories/userRepository';

// Получить пользователя по ID
export const userService = {
    async getAllUserService (): Promise<User[]> {
        return userRepository.getAllUsers();
    },

    // Получить пользователя по ID
    async getUserService (id: number): Promise<User | undefined> {
        return userRepository.getUserById(id);
    },


    // Создать нового пользователя
    async createUserService (userData: User): Promise<User> {
        const passwordSalt = await bcrypt.genSalt(10)
        // const passwordHash = await this_

        return userRepository.createUser(userData);
    },

    // Обновить данные пользователя
    async updateUserService (id: number, updateData: Partial<User>): Promise<User | undefined> {
        return userRepository.updateUser(id, updateData);
    },

    // Удалить пользователя
    async deleteUserService (id: number): Promise<boolean> {
        return userRepository.deleteUser(id);
    },

    async checkCredentails () {

    }
}
