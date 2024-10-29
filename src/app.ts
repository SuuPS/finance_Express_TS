// src/app.ts

import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import swaggerUi from 'swagger-ui-express'; // Импортируем Swagger UI
import swaggerDocs from './config/swaggerConfig';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Используем маршруты
app.use('/api', routes);

// Настройка Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs)); // Исправленный код

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Swagger documentation available at http://localhost:${PORT}/api-docs`);
});