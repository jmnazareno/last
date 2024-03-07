import React from 'react';
import { HomeRounded, PersonRounded, Settings } from '@mui/icons-material';
import './AdminSideBar.css';

const AdminSideBar = () => {
  return (
    <div className="AdminSideBar">
      <div className="AdminSideBarWrapper">
        {/* Logo */}
        <div className="AdminSideBarLogo">
          <img src="/path/to/your/logo.png" alt="Logo" />
        </div>
        {/* Line separator */}
        <hr className="AdminSideBarLine" />
        {/* Icons */}
        <ul className="AdminSideBarList">
          <li className="AdminSideBarListItem">
            <HomeRounded className="AdminSideBarIcon" />
            <span className="AdminSidebarListItemText">Home</span>
          </li>
          <li className="AdminSideBarListItem">
            <PersonRounded className="AdminSideBarIcon" />
            <span className="AdminSidebarListItemText">Profile</span>
          </li>
          <li className="AdminSideBarListItem">
            <Settings className="AdminSideBarIcon" />
            <span className="AdminSidebarListItemText">Settings</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminSideBar;
