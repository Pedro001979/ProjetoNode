import { Sql } from './db.js';

sql`
    CREATE TABLE videos (
    video_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    duration INT
);`.then(() => {
    console.log('tabela Criada!')
})