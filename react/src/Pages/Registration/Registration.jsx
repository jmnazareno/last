import React, { useState } from 'react';
import './Registration.css'
import { PersonRounded, Lock } from '@mui/icons-material';
import axiosClient from '../../axios';
import { useStateContext } from '../../Context/ContextProvider';
import { Navigate } from 'react-router-dom';


export default function Registration() {
  const { setCurrentUser, setUserToken } = useStateContext();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState({ __html: "" });

  const { userToken } = useStateContext();

  if (userToken) {
    return <Navigate to="/DonorHomepage" />
    }


  const onSubmit = (ev) => {
    ev.preventDefault();
    setError({ __html: "" });

    axiosClient
      .post("/signup", {
        name: fullName,
        email,
        password,
        password_confirmation: passwordConfirmation,
      })
      .then(({ data }) => {
        setCurrentUser(data.user)
        setUserToken(data.token)
      })
      .catch((error) => {
        if (error.response) {
          const finalErrors = Object.values(error.response.data.errors).reduce((accum, next) => [...accum, ...next], [])
          console.log(finalErrors)
          setError({__html: finalErrors.join('<br>')})
        }
        console.error(error)
      });
  };



  return (
    <div className='Registerbody'>
      <img className='logo' src='/Assets/logo.png' alt='Logo'/>
    <form onSubmit={onSubmit} className='registerwrapper' action='#' method='POST'>
      <h1>Registration</h1>
      <label>Full Name</label>
        <div className='input-box'>
          <div className='icon'><Lock/></div>
         <input
          id="full-name"
          name='name'
          type="text"
          required
          value={fullName}
          onChange={ev => setFullName(ev.target.value)}
          placeholder="Enter your full name"
        />
        </div> 

      <label>Email</label>
        <div className='input-box'>
          <div className='icon'><PersonRounded/></div>
          <input
           id="email-address"
           name='email'
           type="email"
           autoComplete='email'
           required
           value={email}
           onChange={ev => setEmail(ev.target.value)}
           placeholder="Enter your email"
         />
         
        </div>
       <label>Password</label>
        <div className='input-box'>
          <div className='icon'><Lock/></div>
         <input
          id="password"
          name='password'
          type="password"
          autoComplete='current-password'
          required
          value={password}
          onChange={ev => setPassword(ev.target.value)}
          placeholder="Enter your password"
        />
        </div> 

        <label>Confirm Password</label>
        <div className='input-box'>
          <div className='icon'><Lock/></div>
         <input
          id="password-confirmation"
          name='password_confirmation'
          type="password"
          required
          value={passwordConfirmation}
          onChange={ev => setPasswordConfirmation(ev.target.value)}
          placeholder="Re-enter your password"
          
          
        />
        </div> 

      {error.__html && (<div className="bg-red-500 rounded py-2 px-3 text-white" dangerouslySetInnerHTML={error}>
      </div>)}

      <button type="submit" >Signup</button>
      <div className='Error'>
      
      </div>
    </form>
    </div>
  );
};
