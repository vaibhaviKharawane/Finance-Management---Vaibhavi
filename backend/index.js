const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Keep only one declaration
const FormDataModel = require('./models/FormData');
const ExpenseModel = require('./models/Expense'); // Add model for expenses

const app = express();
app.use(express.json());
app.use(cors()); // Use cors middleware

mongoose.connect('mongodb://127.0.0.1:27017/practice_mern');

// Register endpoint
app.post('/register', (req, res) => {
    const { email, password } = req.body;
    FormDataModel.findOne({ email: email })
        .then(user => {
            if (user) {
                res.json("Already registered");
            } else {
                FormDataModel.create(req.body)
                    .then(log_reg_form => res.json(log_reg_form))
                    .catch(err => res.json(err));
            }
        });
});

// Login endpoint
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    FormDataModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("Success");
                } else {
                    res.json("Wrong password");
                }
            } else {
                res.json("No records found!");
            }
        });
});

// Expense endpoints
app.post('/expenses', (req, res) => {
    // Add expense to database
    ExpenseModel.create(req.body)
        .then(expense => res.json(expense))
        .catch(err => res.status(500).json({ error: err.message })); // Send error message
});

app.get('/expenses', (req, res) => {
    // Get all expenses from database
    ExpenseModel.find({})
        .then(expenses => res.json(expenses))
        .catch(err => res.status(500).json({ error: err.message })); // Send error message
});

app.listen(3001, () => {
    console.log("Server listening on http://127.0.0.1:3001");
});