
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// In-memory array to store users
const users = [];



// GET route

app.get('/',(req,res) => res.send("Hi from backend, do list"))

// POST route to create a new user
app.post('/users', (req, res) => {
    const { name, email } = req.body;

    // Create a new user object
    const newUser = { name, email };

    // Add the new user to the array
    users.push(newUser);

    // Send a response with the newly created user
    res.status(201).json(newUser);
});

// Start the server
const port = 3010;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});