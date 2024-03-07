import React from 'react';
import './AdminNavBar.css'; // Import your CSS file

const AdminNavBar = () => {
  return (
    <div className="top-bar">
      <div className="logo">
        {/* Add your logo or app name here */}
        <img src="/Assets/logo.png" alt="Logo" />
      </div>
      <div className="profile-icon">
        {/* Add your profile icon image here */}
        <img src="/Assets/person/1.jpeg" alt="Profile" />
      </div>
    </div>
  );
};

export default AdminNavBar;
