import React from 'react';
import DonorFeed from '../../Components/DonorBars/DonorFeed';
import DonorRightBar from '../../Components/DonorBars/DonorRightBar';
import "./DonorHomepage.css"
import DonorNavBar from '../../Components/DonorBars/DonorNavBar';
import DonorSideBar from '../../Components/DonorBars/DonorSideBar';
import { useStateContext } from '../../Context/ContextProvider';

// DonorHomepage.js
const DonorHomepage = () => {

  const { userToken } = useStateContext();

  if (!userToken) {
    return <Navigate to="login" />;
  }

  
  return (
    <>
      <DonorNavBar />
      <div className="DonorHomeContainer">
        <DonorSideBar />
        <DonorFeed />
        <DonorRightBar />
      </div>
    </>
  );
};

export default DonorHomepage;
