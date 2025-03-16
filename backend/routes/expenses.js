// backend/routes/expenses.js
const express = require('express');
const router = express.Router();
const expensesController = require('../controllers/expensesController');

router.get('/', expensesController.getAllExpenses);
router.post('/', expensesController.createExpense);
// ... other routes

module.exports = router;