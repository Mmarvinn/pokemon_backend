import pkg from 'pg';
const { Pool } = pkg;

// const pool = new Pool({
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   database: process.env.DB_NAME,
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });

const pool = new Pool({
  user: 'postgres',
  password: 'root',
  host: 'localhost',
  port: 5432,
  database: 'thefloweressencespharmacydb',
});

export default pool;
