// src/models/userModel.ts
import db from '../db'; // Импортируйте ваш db.ts

export interface User {
    id: number;
    username: string;
    email: string;
    password: string; // В реальных приложениях пароли не должны храниться в открытом виде
}

// Пример базы данных пользователей (можно заменить на реальную БД)
let users: User[] = [];


// Функция для получения всех пользователей
export const getAllUsers = async (): Promise<User[]> => {
    const result = await db.query('SELECT * FROM users');
    return result; // Вернет массив всех пользователей
};

// Создать нового пользователя
// Функция для добавления пользователя в БД
export const addUserToDb = async (userData: User): Promise<User> => {
    const { username, email, password } = userData;
    const result = await db.query(
        'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
        [username, email, password]
    );
    return result[0]; // Используем массив, возвращаемый pg-promise
};

// Найти пользователя по ID
// Функция для поиска пользователя по ID
export const findUserByIdInDb = async (id: number): Promise<User | undefined> => {
    const result = await db.query('SELECT * FROM users WHERE id = $1', [id]);
    return result[0]; // Вернет undefined, если не найдено
};

// Обновить данные пользователя
// Функция для обновления пользователя
export const updateUserInDb = async (id: number, updateData: Partial<User>): Promise<User | undefined> => {
    const { username, email, password } = updateData;
    const result = await db.query(
        'UPDATE users SET username = $1, email = $2, password = $3 WHERE id = $4 RETURNING *',
        [username, email, password, id]
    );
    return result[0]; // Вернет undefined, если пользователь не найден
};

// Удалить пользователя
export const deleteUserInDb = async (id: number): Promise<boolean> => {
    const result = await db.query('DELETE FROM users WHERE id = $1', [id]);
    return result.length > 0; // Вернет true, если удаление успешно
};