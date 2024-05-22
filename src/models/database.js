import { createPool } from 'mysql2/promise.js';

const pool = createPool({
    host: 'localhost',
    user: 'root',  
    password: 'Lm3233310801',
    database: 'db_textiles',
})

export default pool;