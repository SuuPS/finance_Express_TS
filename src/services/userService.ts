// src/services/userService.ts
import { User } from '../types/user';
const bcrypt = require('bcrypt');
import { userRepository } from '../repositories/userRepository';

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
        const passwordHash = await this._generateHash(userData.password, passwordSalt)

        const newUser: User = {
            id: userData.id,
            username: userData.username,
            email: userData.email,
            passwordSalt: passwordSalt,
            password: passwordHash,
        }

        return userRepository.createUser(newUser);
    },

    // Обновить данные пользователя
    async updateUserService (id: number, updateData: Partial<User>): Promise<User | undefined> {
        return userRepository.updateUser(id, updateData);
    },

    // Удалить пользователя
    async deleteUserService (id: number): Promise<boolean> {
        return userRepository.deleteUser(id);
    },

    async _generateHash(password: string, salt: string): Promise<string> {
        console.log(password, salt)
        try {
            const hash = await bcrypt.hash(password, salt);
            return hash;
        } catch (error) {
            throw new Error('Error hashing password');
        }
    },

    async checkCredentails (loginOrEmail: string, password: string) {
        const user = await userRepository.findByLoginOrEmail(loginOrEmail)
        if (!user) return false
        const passwordHash = await this._generateHash(password, user.passwordSalt)
        // return user.password === passwordHash
        if (user.password === passwordHash){
            return user
        }
        return false
    }
}
