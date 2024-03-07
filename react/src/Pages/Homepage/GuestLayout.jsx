import React from 'react';
import "./GuestLayout.css"
import { Navigate, Outlet } from 'react-router-dom';
import { useStateContext } from '../../Context/ContextProvider';

const GuestLayout = () => {

const { userToken } = useStateContext();

  if (userToken) {
    return <Navigate to="/DonorHomepage" />
  }

  return (
    <>
        <Outlet />
    </>
  );
};

export default GuestLayout;
