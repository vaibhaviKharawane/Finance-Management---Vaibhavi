// src/components/Expenses.js
import React, { useState, useEffect } from 'react';
import ExpenseList from './ExpenseList';
import AddExpense from './AddExpense';
import './Expenses.css';
import axios from 'axios';

const Expenses = () => {
    const [expenses, setExpenses] = useState([]);
    const [filterFrequency, setFilterFrequency] = useState('');
    const [filterType, setFilterType] = useState('');
    const [showAddForm, setShowAddForm] = useState(false);

    useEffect(() => {
        fetchExpenses();
    }, [filterFrequency, filterType]);

    const fetchExpenses = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/expenses?frequency=${filterFrequency}&type=${filterType}`);
            setExpenses(response.data);
        } catch (error) {
            console.error('Error fetching expenses:', error);
        }
    };

    const handleAddClick = () => {
        setShowAddForm(true);
    };

    const handleFormClose = () => {
        setShowAddForm(false);
    };

    return (
        <div className="expenses-container">
            <div className="filter-controls">
                <select value={filterFrequency} onChange={(e) => setFilterFrequency(e.target.value)}>
                    <option value="">All Frequencies</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                </select>
                <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
                    <option value="">All Types</option>
                    <option value="expense">Expense</option>
                    <option value="income">Income</option>
                </select>
                <button className="add-button" onClick={handleAddClick}>Add Expense</button>
            </div>
            {showAddForm && <AddExpense onClose={handleFormClose} onExpenseAdded={fetchExpenses} />}
            <ExpenseList expenses={expenses} handleDelete={fetchExpenses} />
        </div>
    );
};

export default Expenses;