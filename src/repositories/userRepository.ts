// src/repositories/userRepository.ts
import db from '../db'; // Импортируйте ваш db.ts
import { User } from '../types/user';

// Получить всех пользователей
export const userRepository = {
    async getAllUsers (): Promise<User[]> {
        const result = await db.query('SELECT * FROM users');
        return result; // Вернет массив всех пользователей
    },

    // Найти пользователя по ID
    async getUserById (id: number): Promise<User | undefined> {
        const result = await db.query('SELECT * FROM users WHERE id = $1', [id]);
        return result[0]; // Вернет undefined, если пользователь не найден
    },

    // Создать нового пользователя
    async createUser(userData: User): Promise<User> {
        const { username, email, password, passwordSalt } = userData;

        // Исправленный SQL-запрос с запятой между $3 и $4
        const result = await db.query(
            'INSERT INTO users (username, email, password, passwordSalt) VALUES ($1, $2, $3, $4) RETURNING *',
            [username, email, password, passwordSalt]
        );

        return result[0]; // Возвращаем добавленного пользователя
    },

    // Обновить пользователя
    async updateUser (id: number, updateData: Partial<User>): Promise<User | undefined> {
        const { username, email, password } = updateData;
        const result = await db.query(
            'UPDATE users SET username = $1, email = $2, password = $3 WHERE id = $4 RETURNING *',
            [username, email, password, id]
        );
        return result[0]; // Вернет undefined, если пользователь не найден
    },

    // Удалить пользователя
    async deleteUser (id: number): Promise<boolean> {
        const result = await db.query('DELETE FROM users WHERE id = $1', [id]);
        return result.rowCount > 0; // Вернет true, если удаление успешно
    },

    async findByLoginOrEmail(loginOrEmail: string): Promise<User | null> {
        try {
            const result = await db.oneOrNone('SELECT * FROM users WHERE username = $1 OR email = $1', [loginOrEmail]);
            return result ? result : null;
        } catch (error) {
            throw new Error('Error fetching user by login or email');
        }
    }

}