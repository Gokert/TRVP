const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'admin',
    password: 'admin',
    host: '127.0.0.1',
    port: 5432,
    database: 'hr',
});

module.exports = pool;
