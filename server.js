// import express
const express = require('express');
// import mysql2
const mysql = require('mysql2');
// add PORT designation
const PORT = process.env.PORT || 3001;
// add app expression
const app = express();

// add Express.js middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


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

// testing express.js connection
// app.get('/', (req, res) => {
//     res.json({
//         message: 'Hello World'
//     });
// });

// query the database
// db.query(`SELECT * FROM candidates`, (err, rows) => {
//     console.log(rows);
// });

// query single candidate
// db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(row);
// });

// query for delete operation / delete a candidate
// db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// });

// create a candidate
// const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
// VALUES (?,?,?,?)`;
// const params = [1, 'Ronald', 'Firbank', 1];

// db.query(sql, params, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// });

// Default response for any other request (Not Found) / 'catchall' route
app.use((req, res) => {
    res.status(404).end();
});

// add function that will start the Express.js server on port 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});