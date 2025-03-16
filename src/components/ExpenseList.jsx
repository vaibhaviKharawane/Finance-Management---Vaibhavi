// src/components/ExpenseList.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import axios from 'axios';

const ExpenseList = ({ expenses, handleDelete }) => {
    const handleDeleteExpense = async (id) => {
        try {
            await axios.delete(`http://localhost:3001/expenses/${id}`);
            handleDelete();
        } catch (error) {
            console.error('Error deleting expense:', error);
            if (error.response) {
                console.error('Response data:', error.response.data);
                console.error('Response status:', error.response.status);
                console.error('Response headers:', error.response.headers);
                alert(`Failed to delete expense: ${error.response.data.message || 'Server error'}`);

            } else if (error.request) {
                console.error('Request:', error.request);
                alert('Failed to delete expense: No response from server.');
            } else {
                console.error('Error Message', error.message);
                alert(`Failed to delete expense: ${error.message}`);
            }
        }
    };

    if (!expenses || expenses.length === 0) {
        return <div className="no-expenses">No expenses to display.</div>;
    }

    return (
        <div className="expense-list-container">
            <h2>Expense List</h2>
            <table className="expense-table">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Type</th>
                        <th>Frequency</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.map(expense => (
                        <tr key={expense.id}>
                            <td>{expense.description}</td>
                            <td>{expense.amount}</td>
                            <td>{expense.type}</td>
                            <td>{expense.frequency}</td>
                            <td>
                                <Link to={`/edit-expense/${expense.id}`} className="edit-button">
                                    <FaEdit />
                                </Link>
                                <button onClick={() => handleDeleteExpense(expense.id)} className="delete-button">
                                    <FaTrashAlt />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ExpenseList;