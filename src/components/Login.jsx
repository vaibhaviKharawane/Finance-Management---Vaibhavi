// src/components/Login.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    
    axios.post('http://localhost:3001/login', { email, password })
      .then(result => {
        if(result.data === "Success"){
          alert('Login successful!');
          navigate('/');
        } else {
          alert('Incorrect email or password! Please try again.');
        }
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Finance Manager</h2>
        <form onSubmit={handleSubmit}>
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
          <button type="submit" className="btn btn-success w-100">Login</button>
        </form>
        <p className='mt-3'>Don't have an account?</p>
        <Link to='/register' className="btn btn-outline-primary w-100">Register</Link>
      </div>
    </div>
  );
}

export default Login;
