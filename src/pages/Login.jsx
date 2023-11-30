import React, { useContext } from 'react'
import { useState } from "react";

import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from "../context/authContext";

// const {login} = useContext(AuthContext);

const Login = () => {
  
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const navigate = useNavigate();
    const { currentUser } = useContext(AuthContext)
    console.log(currentUser)
    const [error, setError] = useState('');
    const { login } = useContext(AuthContext)

    const handleChange = (e) => {
      setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {

        // login(inputs)
        console.log(credentials)
        const response = await axios.post('/api/auth/login', credentials);
 
        // login(credentials);
        // Handle response, store token, redirect user, etc.
        
        navigate('/home'); // Redirecting to home as an example
      } catch (err) {
        setError(err.response);
      }
    };
  
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input
          required
          type="text"
          placeholder="email"
          name="email"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <button onClick = {handleSubmit}>Login</button>
        {error && <p>{"Error"}</p>}
        <span>
          Don't you have an account? <Link to="/register">Register</Link>
        </span>
        </form>
        </div>
  )
}

export default Login