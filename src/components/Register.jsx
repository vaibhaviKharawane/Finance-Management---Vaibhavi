// src/components/Register.jsx
import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Send data to the backend (modify the URL as needed)
    axios.post('http://localhost:3001/register', { name, email, password })
      .then(result => {
        if(result.data === "Success"){
          alert('Registration successful!');
          // Optionally, redirect or clear the form
        } else {
          alert('Registration failed! Please try again.');
        }
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="register-container">
      <div className="register-card">
        <h2 className="register-title">Create Your Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 text-start">
            <label htmlFor="name" className="form-label"><strong>Name</strong></label>
            <input 
              type="text" 
              placeholder="Enter Name"
              className="form-control input-field" 
              onChange={(event) => setName(event.target.value)}
              required
            /> 
          </div>
          <div className="mb-3 text-start">
            <label htmlFor="email" className="form-label"><strong>Email Id</strong></label>
            <input 
              type="email" 
              placeholder="Enter Email"
              className="form-control input-field" 
              onChange={(event) => setEmail(event.target.value)}
              required
            /> 
          </div>
          <div className="mb-3 text-start">
            <label htmlFor="password" className="form-label"><strong>Password</strong></label>
            <input 
              type="password" 
              placeholder="Enter Password"
              className="form-control input-field" 
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-success w-100">Register</button>
        </form>
        <p className='mt-3'>Already have an account?</p>
        <a href="/login" className="btn btn-outline-primary w-100">Login</a>
      </div>
    </div>
  );
}

export default Register;
