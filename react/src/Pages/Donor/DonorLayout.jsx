import React from 'react';
import { Navigate } from 'react-router-dom';
import "./DonorLayout.css"
import { useStateContext } from '../../Context/ContextProvider';
import { Outlet } from 'react-router-dom';

const DonorLayout = () => {
  const { userToken } = useStateContext();

  if (!userToken) {
    return <Navigate to="login" />;
  }

  return (
    <>
        <Outlet />
    </>
  );
};

export default DonorLayout;
