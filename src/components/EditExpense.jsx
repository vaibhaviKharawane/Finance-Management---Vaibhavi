// src/components/EditExpense.js
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditExpense = () => {
    const { id } = useParams();
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchExpense = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/expenses/${id}`);
                setDescription(response.data.description);
                setAmount(response.data.amount);
            } catch (error) {
                console.error('Error fetching expense:', error);
            }
        };

        fetchExpense();
    }, [id]);

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:3001/expenses/${id}`, { description, amount })
            .then(() => {
                alert('Expense updated successfully!');
                navigate('/expenses');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Edit Expense</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Description"
                    className="form-control mb-3"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Amount"
                    className="form-control mb-3"
                    value={amount}
                    onChange={(event) => setAmount(event.target.value)}
                    required
                />
                <button type="submit" className="btn btn-primary">Update Expense</button>
            </form>
        </div>
    );
};

export default EditExpense;