// import express
const express = require('express');
// add PORT designation
const PORT = process.env.PORT || 3001;
// add app expression
const app = express();

// add Express.js middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// testing express.js connection
// app.get('/', (req, res) => {
//     res.json({
//         message: 'Hello World'
//     });
// });

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

// add function that will start the Express.js server on port 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});