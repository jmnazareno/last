import React from 'react';
import { HomeRounded, PersonRounded, Settings } from '@mui/icons-material';
import './HomeSideBar.css';

const HomeSideBar = () => {
  return (
    <div className="HomeSideBar">
      <div className="HomeSideBarWrapper">
        {/* Logo */}
        <div className="HomeSideBarLogo">
          <img src="/path/to/your/logo.png" alt="Logo" />
        </div>
        {/* Line separator */}
        <hr className="HomeSideBarLine" />
        {/* Icons */}
        <ul className="HomeSideBarList">
          <li className="HomeSideBarListItem">
            <HomeRounded className="HomeSideBarIcon" />
            <span className="HomeSidebarListItemText">Home</span>
          </li>
          <li className="HomeSideBarListItem">
            <PersonRounded className="HomeSideBarIcon" />
            <span className="HomeSidebarListItemText">Profile</span>
          </li>
          <li className="HomeSideBarListItem">
            <Settings className="HomeSideBarIcon" />
            <span className="HomeSidebarListItemText">Settings</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomeSideBar;
