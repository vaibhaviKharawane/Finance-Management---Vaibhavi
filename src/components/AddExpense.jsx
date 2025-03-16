// src/components/AddExpense.js
import React, { useState } from 'react';
import axios from 'axios';

const AddExpense = ({ onClose, onExpenseAdded }) => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('expense');
    const [frequency, setFrequency] = useState('monthly');
    const [errorMsg, setErrorMsg] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrorMsg(''); // Clear previous error messages
        try {
            await axios.post('http://localhost:3001/expenses', { description, amount, type, frequency });
            alert('Expense added successfully!');
            onExpenseAdded();
            onClose();
        } catch (err) {
            console.error('Failed to add expense:', err);
            if (err.response) {
                console.error('Response data:', err.response.data);
                console.error('Response status:', err.response.status);
                console.error('Response headers:', err.response.headers);
                setErrorMsg(`Failed to add expense: ${err.response.data.message || 'Server error'}`);

            } else if (err.request) {
                console.error('Request:', err.request);
                setErrorMsg('Failed to add expense: No response from server.');
            } else {
                console.error('Error Message', err.message);
                setErrorMsg(`Failed to add expense: ${err.message}`);
            }
        }
    };

    return (
        <div className="add-expense-form">
            <h2>Add New Expense</h2>
            {errorMsg && <div style={{ color: 'red' }}>{errorMsg}</div>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                />
                <select value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="expense">Expense</option>
                    <option value="income">Income</option>
                </select>
                <select value={frequency} onChange={(e) => setFrequency(e.target.value)}>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                </select>
                <button type="submit">Add</button>
                <button type="button" onClick={onClose}>Cancel</button>
            </form>
        </div>
    );
};

export default AddExpense;