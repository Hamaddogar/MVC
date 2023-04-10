import React, { useState } from 'react';
import axios from 'axios';

function LoginandSignup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:4000/api/signup', { email, password });
      const { token } = response.data;
      localStorage.setItem('token', token);
    
      setMessage('Signup successful');
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:4000/api/login', { email, password });
      const { token } = response.data;
      localStorage.setItem('token', token);
      setMessage('Login successful');
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div>
        
      <h1>Authentication Example</h1>
      <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignup}>Signup</button>
      <button onClick={handleLogin}>Login</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default LoginandSignup;
