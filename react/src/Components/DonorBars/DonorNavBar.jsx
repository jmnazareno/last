import React, { useState } from 'react';
import './DonorNavBar.css';
import { MonetizationOnRounded} from '@mui/icons-material'; // Import the Send icon
import { Link, NavLink } from 'react-router-dom';
import { useStateContext } from '../../Context/ContextProvider';
import axiosClient from '../../axios';

const DonorNavBar = () => {

  const [open, setOpen] = useState(false);
  const navigation = [
    { name: "Login", to: "/login" },
    { name: "Logout", onClick: (ev) => logout(ev) },
  ];

  const { setCurrentUser, setUserToken } = useStateContext();

  const logout = (ev) => {
    ev.preventDefault();
    axiosClient.post("/logout").then((res) => {
      setCurrentUser({});
      setUserToken(null);
    });
  };

  return (
    <div className="top-bar">
      <div className="logo">
        <Link to="/">
          <img src="/Assets/logo.png" alt="Logo" />
        </Link>
      </div>
      <div className="profile-section">
        <div className="donation-button">
          <button>
            <span><MonetizationOnRounded /></span> {/* Add the Send icon beside the button text */}
            Donate
          </button>
        </div>
        <div className='menu-trigger' onClick={() => { setOpen(!open) }}>
          <img src="/Assets/person/1.jpeg" alt="Profile" />
        </div>
        <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>
          <ul>
            {navigation.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.to}
                  activeClassName="active" // Apply active class when the NavLink is active
                  onClick={() => setOpen(false)} // Close dropdown when NavLink is clicked
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
            <li>
            <button onClick={logout}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DonorNavBar;
