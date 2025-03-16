// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const expenseRoutes = require('./routes/expenses');
const userRoutes = require('./routes/users'); // If you have user auth

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/expense_tracker', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Routes
app.use('/api/expenses', expenseRoutes);
app.use('/api/users', userRoutes); // If you have user auth

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});