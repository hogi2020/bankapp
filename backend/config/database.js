const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "cx@1076044150",
    database: "testdb",
    waitForConnections: true,
    connectionLimit: 10, // 동시에 생성 가능한 최대 연결 수
    queueLimit: 10,      // 대기열 요청 수 제한
});

module.exports = pool;