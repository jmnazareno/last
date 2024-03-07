import React, { useState } from 'react';
import axios from 'axios';
import { FRAPPE_BASE_URL } from '../../Data/Constants';
import './Registration.css'
import { PersonRounded, Lock } from '@mui/icons-material';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${FRAPPE_BASE_URL}/api/method/login`, {
        usr: username,
        pwd: password,
      });

      console.log('Login Response:', response.data);

      if (response.data.message === 'Logged In') {
        // Assuming your token is in response.data.auth_token (adapt this based on the actual response structure)
        const authToken = response.data.auth_token;

        // Store the authentication token in your React app
        localStorage.setItem('authToken', authToken);

        // Check user type
        if (response.data.full_name === 'Some Thing') {
          // Redirect or perform actions for the administrator
          console.log('Administrator logged in!');
        } else {
          // Assume any other user is a donor (website user)
          // Redirect or perform actions for donors
          console.log('Donor logged in!');
        }

        alert('Login successful!');
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      console.error('Login failed:', error.response || error);

      if (error.response && error.response.data && error.response.data.message) {
        setError(`Login failed: ${error.response.data.message}`);
      } else {
        setError('Login failed. Please try again.');
      }
    }
  };

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <div>
      <img className='logo' src='/Assets/logo.png' alt='Logo'/>
    <div className='wrapper'>
      <h1>Registration</h1>

      <label>Full Name</label>
        <div className='input-box'>
          <div className='icon'><Lock/></div>
         <input
          type="password"
          placeholder="Enter your full name"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </div> 

      <label>Email</label>
        <div className='input-box'>
          <div className='icon'><PersonRounded/></div>
          <input
           type="text"
           placeholder="Enter your email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            
         />
         
        </div>
       <label>Password</label>
        <div className='input-box'>
          <div className='icon'><Lock/></div>
         <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </div> 

        <label>Confirm Password</label>
        <div className='input-box'>
          <div className='icon'><Lock/></div>
         <input
          type="password"
          placeholder="Re-enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </div> 

      <button type="submit" onClick={handleLogin}>Login</button>
      <div className='Error'>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      </div>
    </div>
    </div>
  );
};

export default Login