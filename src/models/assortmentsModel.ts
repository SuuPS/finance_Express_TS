// src/models/userModel.ts
import db from '../db';

export interface Assortment {
    id: number;
    name: string;
    code: string;
}


// Функция для получения все номенклатуры
export const getAllAssortments = async (): Promise<Assortment[]> => {
    const result = await db.query('SELECT * FROM assortements');
    return result;
};


// Функция для добавления номенклатуры в БД
export const addAssortmentsToDb = async (userData: Assortment): Promise<Assortment> => {
    const { name, code } = userData;
    const result = await db.query(
        'INSERT INTO assortements (name, code) VALUES ($1, $2) RETURNING *',
        [name, code]
    );
    return result[0]; // Используем массив, возвращаемый pg-promise
};