const mysql = require('mysql2/promise');

const pool = mysql.createPool({         // AWS DB 연결하기 (test: localDB 연결)
    /* host:    ,
    user:   ,
    port: '3306',
    password:   ,
    database:
    */
});

module.exports = {
    pool: pool
};