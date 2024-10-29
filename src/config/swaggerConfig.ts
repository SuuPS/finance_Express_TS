// src/config/swaggerConfig.ts

import swaggerJsDoc from 'swagger-jsdoc';

const swaggerOptions: swaggerJsDoc.Options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Finance API',
            version: '1.0.0',
            description: 'API для управления финансами, пользователями, товарами и продажами.',
        },
        servers: [
            {
                url: 'http://localhost:3000/api',
            },
        ],
    },
    apis: ['./src/docs/*.ts'], // Путь к вашим файлам документации
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

export default swaggerDocs;