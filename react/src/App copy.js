import React from 'react';
import Login from './Pages/Login/Login';
import logo from './Assets/logo.png'; // Replace with your actual logo path

const App = () => {
  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <img src={logo} alt="Logo" style={{ maxWidth: '100%', marginBottom: '20px' }} />
      <Login />
    </div>
  );
};

export default App;
