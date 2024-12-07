// src/repositories/userRepository.ts
import db from '../db'; // Импортируйте ваш db.ts
import { User } from '../types/user';

// Получить всех пользователей
export const getAllUsers = async (): Promise<User[]> => {
    const result = await db.query('SELECT * FROM users');
    return result; // Вернет массив всех пользователей
};

// Найти пользователя по ID
export const getUserById = async (id: number): Promise<User | undefined> => {
    const result = await db.query('SELECT * FROM users WHERE id = $1', [id]);
    return result[0]; // Вернет undefined, если пользователь не найден
};

// Создать нового пользователя
export const createUser = async (userData: User): Promise<User> => {
    const { username, email, password } = userData;
    const result = await db.query(
        'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
        [username, email, password]
    );
    return result[0]; // Возвращаем добавленного пользователя
};

// Обновить пользователя
export const updateUser = async (id: number, updateData: Partial<User>): Promise<User | undefined> => {
    const { username, email, password } = updateData;
    const result = await db.query(
        'UPDATE users SET username = $1, email = $2, password = $3 WHERE id = $4 RETURNING *',
        [username, email, password, id]
    );
    return result[0]; // Вернет undefined, если пользователь не найден
};

// Удалить пользователя
export const deleteUser = async (id: number): Promise<boolean> => {
    const result = await db.query('DELETE FROM users WHERE id = $1', [id]);
    return result.rowCount > 0; // Вернет true, если удаление успешно
};