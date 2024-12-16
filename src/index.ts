import 'source-map-support/register';
import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes'; // без .ts, так как это будет разрешено TypeScript
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../docs/swagger.json'; // также используем import для swagger.json

const index = express();
const PORT = process.env.PORT || 3000;

// Middleware
index.use(bodyParser.json());

// Используем маршруты
index.use('/api', routes);

// Настроим Swagger UI
index.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

index.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Swagger documentation available at http://localhost:${PORT}/api-docs`);
});
