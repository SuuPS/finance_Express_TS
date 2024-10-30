// src/services/userService.ts
import { Assortment } from '../models/assortmentsModel';
import { getAllAssortmentsRepositories, createAssortmentsInRepository } from '../repositories/assortmentsRepository';

// Получить все номенклатуры
export const getAllAssortmentsService = async (): Promise<Assortment[]> => {
    return getAllAssortmentsRepositories();
};

// Создать новую номенклатуру
export const createAssortmentService = async (userData: Assortment): Promise<Assortment> => {
    return createAssortmentsInRepository(userData);
};
