// import express
const express = require('express');

// import connection
const db = require('./db/connection');

// routes
const apiRoutes = require('./routes/apiRoutes');

// add PORT designation
const PORT = process.env.PORT || 3001;
// add app expression
const app = express();


// import statement
// const inputCheck = require('./utils/inputCheck');


// add Express.js middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// use apiRoutes
app.use('/api', apiRoutes);

// testing express.js connection
// app.get('/', (req, res) => {
//     res.json({
//         message: 'Hello World'
//     });
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
// originally
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });

// Start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});