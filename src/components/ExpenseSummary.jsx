// src/components/ExpenseSummary.jsx
import React from 'react';

const ExpenseSummary = ({ expenses }) => {
    // Calculate summary statistics
    // ...

    return (
        <div>
            {/* Display summary statistics */}
            <p>Total Transactions: {expenses.length}</p>
            <p>Total Income: {totalIncome}</p>
            <p>Total Expenses: {totalExpenses}</p>
            {/* ... */}
        </div>
    );
};

export default ExpenseSummary;