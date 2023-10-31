// import mysql2
const mysql = require('mysql2');

// add connection to MySQL database / connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username,
        user: 'root',
        // Your MySQL password
        password: 'Robert83752',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;