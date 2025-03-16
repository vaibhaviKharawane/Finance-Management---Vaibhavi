// src/components/App.jsx
import React from 'react';
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Expenses from "./Expenses";
import AddExpense from "./AddExpense";
import EditExpense from "./EditExpense";
import ExpenseList from "./ExpenseList";
import Contact from "./Contact"; // Import the Contact component
import { FaHome, FaSignInAlt, FaUserPlus, FaListAlt } from 'react-icons/fa';

const App = () => {
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    const handleLoginSuccess = () => {
        localStorage.setItem('isLoggedIn', 'true');
        navigate('/expenses'); // Redirect to Expenses after login
    };

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        navigate('/login');
    };

    return (
        <div>
            <nav style={{ backgroundColor: '#222', padding: '1rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <Link to="/" style={{ color: '#89cff0', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                    <FaHome style={{ marginRight: '5px' }} /> Home
                </Link>
                {!isLoggedIn && (
                    <>
                        <Link to="/login" style={{ color: '#89cff0', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                            <FaSignInAlt style={{ marginRight: '5px' }} /> Login
                        </Link>
                        <Link to="/register" style={{ color: '#89cff0', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                            <FaUserPlus style={{ marginRight: '5px' }} /> Register
                        </Link>
                        <Link to="/contact" style={{ color: '#89cff0', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                            Contact
                        </Link>
                    </>
                )}
                {isLoggedIn && (
                    <>
                        <Link to="/expenses" style={{ color: '#89cff0', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                            <FaListAlt style={{ marginRight: '5px' }} /> Expenses
                        </Link>
                        <button onClick={handleLogout} style={{ color: '#89cff0', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                            Logout
                        </button>
                    </>
                )}
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
                <Route path="/register" element={<Register />} />
                <Route path="/expenses" element={<Expenses />} />
                <Route path="/add-expense" element={<AddExpense />} />
                <Route path="/edit-expense/:id" element={<EditExpense />} />
                <Route path="/expense-list" element={<ExpenseList />} />
                <Route path="/contact" element={<Contact />} /> {/* Add the Contact route */}
            </Routes>
        </div>
    );
};

export default App;