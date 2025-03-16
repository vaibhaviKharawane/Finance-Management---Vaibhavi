import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const Home = () => {
    const navigate = useNavigate();
    const [financialData, setFinancialData] = useState({
        totalBalance: 5000,
        recentTransactions: [100, -50, 200, -75, 150],
        budget: { food: 60, utilities: 80, entertainment: 30 },
        goals: [{ name: 'Vacation', progress: 40 }, { name: 'Debt', progress: 70 }],
        dailySummary: { income: 0, expenses: 0 },
        weeklySummary: { income: 0, expenses: 0 },
        monthlySummary: { income: 0, expenses: 0 },
        yearlySummary: { income: 0, expenses: 0 },
    });

    const chartData = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        datasets: [
            {
                label: 'Recent Transactions',
                data: financialData.recentTransactions,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
            },
        ],
    };

    // Placeholder for transaction data (replace with your actual data source)
    const yourTransactions = [
        { date: new Date(), amount: 150 },
        { date: new Date(new Date().setDate(new Date().getDate() - 1)), amount: -80 },
        { date: new Date(new Date().setDate(new Date().getDate() - 7)), amount: 1000 },
        { date: new Date(new Date().setDate(new Date().getDate() - 7)), amount: -500 },
        { date: new Date(new Date().setDate(new Date().getDate() - 30)), amount: 4000 },
        { date: new Date(new Date().setDate(new Date().getDate() - 30)), amount: -2000 },
        { date: new Date(new Date().getFullYear(), 0, 1), amount: 48000 },
        { date: new Date(new Date().getFullYear(), 0, 1), amount: -24000 },
    ];

    useEffect(() => {
        const calculateSummary = (transactions, filterFunction) => {
            let income = 0;
            let expenses = 0;

            const filteredTransactions = transactions.filter(filterFunction);

            filteredTransactions.forEach(transaction => {
                if (transaction.amount > 0) {
                    income += transaction.amount;
                } else {
                    expenses += Math.abs(transaction.amount);
                }
            });

            return { income, expenses };
        };

        const today = new Date();
        const startOfWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay());
        const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
        const startOfYear = new Date(today.getFullYear(), 0, 1);

        const dailySummary = calculateSummary(yourTransactions, transaction => transaction.date.toDateString() === today.toDateString());
        const weeklySummary = calculateSummary(yourTransactions, transaction => transaction.date >= startOfWeek && transaction.date <= today);
        const monthlySummary = calculateSummary(yourTransactions, transaction => transaction.date >= startOfMonth && transaction.date <= today);
        const yearlySummary = calculateSummary(yourTransactions, transaction => transaction.date >= startOfYear && transaction.date <= today);

        setFinancialData(prev => ({
            ...prev,
            dailySummary,
            weeklySummary,
            monthlySummary,
            yearlySummary,
        }));
    }, [yourTransactions]); // Depend on your transactions

    return (
        <div className="home-container">
            <div className="background-overlay"></div>
            <div className="home-content">
                <h1 className="home-title">Take Control of Your Finances</h1>
                <p className="home-subtitle">Effortlessly manage your expenses and achieve your financial goals with real-time updates.</p>
                <div className="financial-grid">
                    <div className="financial-card balance-card">
                        <h2>Your Balance</h2>
                        <p className="balance-amount">${financialData.totalBalance}</p>
                    </div>
                    <div className="financial-card chart-card">
                        <h2>Expense Trends</h2>
                        <Line data={chartData} />
                    </div>
                    <div className="financial-card daily-card">
                        <h2>Daily Summary</h2>
                        <p>Income: ${financialData.dailySummary.income}</p>
                        <p>Expenses: ${financialData.dailySummary.expenses}</p>
                    </div>
                    <div className="financial-card weekly-card">
                        <h2>Weekly Summary</h2>
                        <p>Income: ${financialData.weeklySummary.income}</p>
                        <p>Expenses: ${financialData.weeklySummary.expenses}</p>
                    </div>
                    <div className="financial-card monthly-card">
                        <h2>Monthly Summary</h2>
                        <p>Income: ${financialData.monthlySummary.income}</p>
                        <p>Expenses: ${financialData.monthlySummary.expenses}</p>
                    </div>
                    <div className="financial-card yearly-card">
                        <h2>Yearly Summary</h2>
                        <p>Income: ${financialData.yearlySummary.income}</p>
                        <p>Expenses: ${financialData.yearlySummary.expenses}</p>
                    </div>
                    <div className="financial-card budget-card">
                        <h2>Budget Overview</h2>
                        {Object.entries(financialData.budget).map(([category, percentage]) => (
                            <div key={category} className="budget-item">
                                <span>{category}: {percentage}%</span>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: `${percentage}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="financial-card goals-card">
                        <h2>Financial Goals</h2>
                        {financialData.goals.map((goal, index) => (
                            <div key={index} className="goal-item">
                                <span>{goal.name}:</span>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: `${goal.progress}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="financial-card track-expenses-card">
                        <h2>Track Expenses</h2>
                        <p>Monitor your spending in real-time.</p>
                        <Link to="/expenses" className="btn btn-track-expenses">Go to Expenses</Link>
                    </div>
                </div>
                <div className="home-buttons">
                    <button className="btn btn-success btn-custom" onClick={() => navigate('/login')}>Login</button>
                    <button className="btn btn-success btn-custom" onClick={() => navigate('/register')}>Sign up</button>
                    <button className="btn btn-danger btn-custom" onClick={() => { navigate('/login'); }}>Logout</button>
                </div>
                <div className="home-images">
                    <img src="https://cdn-icons-png.flaticon.com/512/483/483652.png" alt="Expense Tracking" className="animated-image floating-image" />
                    <img src="https://cdn-icons-png.flaticon.com/512/3898/3898183.png" alt="Budgeting" className="animated-image rotating-image" />
                    <img src="https://cdn-icons-png.flaticon.com/512/2991/2991206.png" alt="Real time data" className="animated-image scaling-image" />
                </div>
            </div>
        </div>
    );
};

export default Home;