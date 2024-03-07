import React from 'react';
import HomeNavbar from '../../Components/HomeBars/HomeNavBar';
import HomeSideBar from '../../Components/HomeBars/HomeSideBar';
import HomeFeed from '../../Components/HomeBars/HomeFeed';
import HomeRightBar from '../../Components/HomeBars/HomeRightBar';
import "./Homepage.css"

// Homepage.js
const Homepage = () => {
  return (
    <>
      <HomeNavbar />
      <div className="HomeContainer">
        <HomeSideBar />
        <HomeFeed />
        <HomeRightBar />
      </div>
    </>
  );
};

export default Homepage;
