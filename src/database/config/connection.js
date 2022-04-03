const { Pool } = require('pg');

const {
  NODE_ENV, DEV_DB_URL, TEST_DB_URL, DATABASE_URL,
} = process.env;

let connectionString = '';
let ssl = false;

switch (NODE_ENV) {
  case 'dev':
    connectionString = DEV_DB_URL;
    break;
  case 'test':
    connectionString = TEST_DB_URL;
    break;
  default:
    connectionString = DATABASE_URL;
    ssl = {
      rejectUnauthorized: false,
    };
}

if (!connectionString) throw new Error('no db url, check .env file for valid keys');

const connection = new Pool({
  connectionString,
  ssl,
});

module.exports = { connection };
