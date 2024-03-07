import React from 'react';
import Logo from '../Assets/logo.png';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDonate } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const showForYou = () => {
    console.log('For You clicked');
    // Add logic for showing "For You"
  };

  const showDonationFunds = () => {
    console.log('Donation Funds clicked');
    // Add logic for showing "Donation Funds"
  };

  return (
    <nav style={{ display: 'flex', alignItems: 'center', backgroundColor: '#EBEBEB', padding: '10px', margin: 0 }}>
      {/* Replace the below image tag with your logo */}
      <img src={Logo} alt="Your Logo" style={{ width: 'auto', height: '50px', maxWidth: '100%', marginRight: '10px' }} />

      <div id="options" style={{ display: 'flex', justifyContent: 'center', flex: 1 }}>
        <Button color="inherit" onClick={showForYou} className="active">
          For You
        </Button>

        <Button color="inherit" onClick={showDonationFunds}>
          Donation Funds
        </Button>
      </div>

      <Button color="inherit" startIcon={<FontAwesomeIcon icon={faDonate} />}>
        Donate
      </Button>
    </nav>
  );
};

export default Navbar;
