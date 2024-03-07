import React from 'react';
import { HomeRounded, PersonRounded, Settings } from '@mui/icons-material';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import './DonorSideBar.css';

const navigation = [
  { name: 'home', to: '/' },
  { name: 'profile', to: '/profile' },
  { name: 'settings', to: '/settings' },
];

const DonorSideBar = () => {
  return (
    <div className="DonorSideBar">
      <div className="DonorSideBarWrapper">
        {/* Logo */}
        <div className="DonorSideBarLogo">
          <img src="/path/to/your/logo.png" alt="Logo" />
        </div>
        {/* Line separator */}
        <hr className="DonorSideBarLine" />
        {/* Icons */}
        <ul className="DonorSideBarList">
          {navigation.map((item) => (
            <li key={item.name} className="DonorSideBarListItem">
              {/* Use Link to create navigation links */}
              <Link to={item.to} className="DonorSidebarLink">
                {item.name === 'home' && <HomeRounded className="DonorSideBarIcon" />}
                {item.name === 'profile' && <PersonRounded className="DonorSideBarIcon" />}
                {item.name === 'settings' && <Settings className="DonorSideBarIcon" />}
                <span className="DonorSidebarListItemText">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DonorSideBar;
