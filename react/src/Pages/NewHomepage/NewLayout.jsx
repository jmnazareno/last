import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import "./NewLayout.css"
import { useStateContext } from '../../Context/ContextProvider';
import { Outlet } from 'react-router-dom';
import axiosClient from '../../axios';

const NewLayout = () => {
  const { userToken, setCurrentUser } = useStateContext();
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState([]);

  if (!userToken) {
    return <Navigate to="login" />;
  }

  useEffect(() => {
    axiosClient.get('/me')
      .then(({ data }) => {
        setCurrentUser(data);
      })
      .catch(error => {
        setError(error.message || 'An error occurred while fetching user data');
      });
  }, []);

  useEffect(() => {
    axiosClient.get('/posts')
      .then(({ data }) => {
        setPosts(data.data);
      })
      .catch(error => {
        setError(error.message || 'An error occurred while fetching posts data');
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default NewLayout;
