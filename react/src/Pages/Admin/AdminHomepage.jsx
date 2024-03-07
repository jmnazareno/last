import React from 'react';
import AdminNavbar from '../../Components/AdminBars/AdminNavBar';
import AdminSideBar from '../../Components/AdminBars/AdminSideBar';
import AdminFeed from '../../Components/AdminBars/AdminFeed';
import AdminRightBar from '../../Components/AdminBars/AdminRightBar';
import "./AdminHomepage.css"

// AdminHomepage.js
const AdminHomepage = () => {
  return (
    <>
      <AdminNavbar />
      <div className="AdminHomeContainer">
        <AdminSideBar />
        <AdminFeed />
        <AdminRightBar />
      </div>
    </>
  );
};

export default AdminHomepage;
