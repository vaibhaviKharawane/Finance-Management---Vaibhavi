// backend/controllers/expensesController.js
const Expense = require('../models/Expense');

exports.getAllExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find();
        res.json(expenses);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createExpense = async (req, res) => {
    const expense = new Expense(req.body);
    try {
        const newExpense = await expense.save();
        res.status(201).json(newExpense);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
// ... other functions