import React from "react";
import Header from "../components/Header";
import HomeBanner from "../components/HomeBanner";
import HomeBackground from "../assets/HomeBanner.svg";
const Homepage = () => {
  return (
    <div>
      <div
        className=' bg-cover bg-no-repeat 	'
        style={{ backgroundImage: `url(${HomeBackground}) ` }}>
        <Header />
        <HomeBanner />
      </div>
    </div>
  );
};

export default Homepage;
