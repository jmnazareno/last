import React from 'react';
import { Navigate } from 'react-router-dom';
import "./AdminLayout.css"
import { useUserStateContext } from '../../Context/ContextProvider';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  const { userToken } = useUserStateContext();

  if (!userToken) {
    return <Navigate to="login" />;
  }
  if (userToken) {
    return <Navigate to="/" />
  }

  return (
    <>
        <Outlet />
    </>
  );
};

export default AdminLayout;
