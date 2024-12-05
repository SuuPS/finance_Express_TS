// src/index.ts
import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import swaggerUi from 'swagger-ui-express'; // Импортируем Swagger UI
import swaggerDocs from './config/swaggerConfig.yaml';

const index = express();
const PORT = process.env.PORT || 3000;

// Middleware
index.use(bodyParser.json());

// Используем маршруты
index.use('/api', routes);

// Настройка Swagger
index.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs)); // Исправленный код

index.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Swagger documentation available at http://localhost:${PORT}/api-docs`);
});