import { Assortment, getAllAssortments, addAssortmentsToDb } from '../models/assortmentsModel';

// Получить все номенклатуры
export const getAllAssortmentsRepositories = async (): Promise<Assortment[]> => {
    return getAllAssortments();
};

// Создать номенклатуру через репозиторий
export const createAssortmentsInRepository = async (userData: Assortment): Promise<Assortment> => {
    return addAssortmentsToDb(userData);
};