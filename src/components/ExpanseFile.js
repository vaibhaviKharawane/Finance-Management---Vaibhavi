// Example: ExpenseForm.js (or your form component)
import React, { useState } from 'react';
import axios from 'axios';

function ExpenseForm({ onAddExpense }) {
    // ... (your state and other code)

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('YOUR_API_ENDPOINT', { date, amount, category });
            console.log('Expense added:', response.data);
            onAddExpense({ date, amount, category });
            // ... (rest of your success handling)
        } catch (error) {
            console.error('Error adding expense:', error);
            if (error.response) {
                console.error('Response data:', error.response.data);
                console.error('Response status:', error.response.status); // Add this
                console.error('Response headers:', error.response.headers); // Add this
            } else if (error.request) {
                console.error('Request:', error.request); // Add this
            } else {
                console.error('Error Message', error.message);
            }
            alert('Failed to add expense. Please try again.');
        }
    };

    // ... (rest of your component)
}

export default ExpenseForm;