// backend/models/Expense.js
const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    amount: { type: Number, required: true },
    category: { type: String, required: true },
    // ... other fields
});

module.exports = mongoose.model('Expense', ExpenseSchema);