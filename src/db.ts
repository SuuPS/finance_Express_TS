import pgPromise from 'pg-promise';

// Инициализация pg-promise
const pgp = pgPromise();

// Определение конфигурации для базы данных
const db = pgp({
    host: 'localhost',
    port: 5432,
    database: 'expressDB',
    user: 'postgres',
    password: '2000',
});

// Экспорт db как модуля
export default db;
