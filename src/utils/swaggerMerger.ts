import fs from 'fs';
import path from 'path';
import YAML from 'yaml';

// Функция для загрузки YAML файла
function loadYamlFile(filePath: string): any {
    const file = fs.readFileSync(filePath, 'utf8');
    return YAML.parse(file);
}

// Функция для объединения YAML файлов
function mergeSwaggerFiles(mainFilePath: string): object {
    const mergedData: any = {};

    // Загружаем основной YAML файл
    const mainFile = loadYamlFile(mainFilePath);

    // Добавляем основной файл в объединённые данные
    Object.assign(mergedData, mainFile);

    // Если в основном файле указаны другие файлы, то их нужно добавить
    if (mainFile?.components?.schemas?.$ref) {
        const refPath = path.join(path.dirname(mainFilePath), mainFile.components.schemas.$ref);
        const referencedFile = loadYamlFile(refPath);
        Object.assign(mergedData, referencedFile);
    }

    return mergedData;
}

// Указываем путь к основному YAML файлу
const mainSwaggerFilePath = path.join(__dirname, '..', 'docs', 'swagger.yaml'); // Путь к основному файлу

// Получаем объединённый документ
const swaggerDocument = mergeSwaggerFiles(mainSwaggerFilePath);

// Экспортируем объединённый Swagger документ
export { swaggerDocument };
