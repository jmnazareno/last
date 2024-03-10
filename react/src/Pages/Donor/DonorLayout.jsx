import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import "./DonorLayout.css"
import { useStateContext } from '../../Context/ContextProvider';
import { Outlet } from 'react-router-dom';
import axiosClient from '../../axios';

const DonorLayout = () => {
  const { userToken, setCurrentUser } = useStateContext();


  const [posts, setPosts] = useState([]);

  if (!userToken) {
    return <Navigate to="login" />;
  }

  useEffect(() => {
    axiosClient.get('/me')
      .then(({ data }) => {
        setCurrentUser(data)
      })
  }, [])

  useEffect(() => {
    axiosClient.get('/posts')
      .then(({data}) => {
        setPosts(data.data)
      })
  }, [])
  

  return (
    <>
        <Outlet />
    </>
  );
};

export default DonorLayout;
