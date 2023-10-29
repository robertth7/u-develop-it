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
db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
});

// Default response for any other request (Not Found) / 'catchall' route
app.use((req, res) => {
    res.status(404).end();
});

// add function that will start the Express.js server on port 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});