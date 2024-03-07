import React, { useState } from 'react';
import './Login.css';
import { Link, Navigate } from 'react-router-dom';
import { PersonRounded, Lock } from '@mui/icons-material';
import { useStateContext } from '../../Context/ContextProvider';
import axiosClient from '../../axios';

export default function Login() {
  const { setCurrentUser, setUserToken } = useStateContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ __html: "" });

  const onSubmit = (ev) => {
    ev.preventDefault();
    setError({ __html: "" });

    axiosClient
      .post("/login", {
        email,
        password,
      })
      .then(({ data }) => {
        setCurrentUser(data.user);
        setUserToken(data.token);
      })
      .catch((error) => {
        if (error.response) {
          const finalErrors = Object.values(error.response.data.errors).reduce(
            (accum, next) => [...accum, ...next],
            []
          );
          setError({ __html: finalErrors.join("<br>") });
        }
        console.error(error);
      });
  };

  const { userToken } = useStateContext();

  if (userToken) {
    return <Navigate to="/DonorHomepage" />
  }


  return (
    <div className='Loginbody'>
      <img className='logo' src='/Assets/logo.png' alt='Logo' />
      <form className='loginwrapper' onSubmit={onSubmit} action='#' method='POST'>
        <h1>Donation Portal | Login</h1>
        <label htmlFor='email-address'>Email</label>
        <div className='input-box'>
          <div className='icon'><PersonRounded /></div>
          <input
            id='email-address'
            name='email'
            type="email"
            autoComplete='email'
            required
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            placeholder="Email address"
          />
        </div>
        <label htmlFor='password'>Password</label>
        <div className='input-box'>
          <div className='icon'><Lock /></div>
          <input
            id='password'
            name='password'
            type="password"
            autoComplete='current-password'
            required
            placeholder="Enter your password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
        </div>
        <div className='remember-forgot'>
          <label htmlFor='remember-me'>
            <input
              type="checkbox"
              name='remember-me'
              id='remember-me' />
            Remember me</label>
          <a href='#'>Forgot Password?</a>
        </div>
        <button type="submit" >Login</button>

        <div className='register-link'>
          <p>Don't have an account? <Link to="/registration">Register</Link></p>
        </div>
      </form>
    </div>
  );
};

