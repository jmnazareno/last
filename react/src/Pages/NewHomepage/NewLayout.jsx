import React from 'react';
import "./NewLayout.css"
import { Outlet } from 'react-router-dom';


const GuestLayout = () => {

  return (
    <>
        <Outlet />
    </>
  );
};

export default GuestLayout;
