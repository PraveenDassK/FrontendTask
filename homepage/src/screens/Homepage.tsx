import React from "react";
import Header from "../components/Header";
import HomeBanner from "../components/HomeBanner";
import HomeBackground from "../assets/HomeBanner.svg";
import Interactive from "../components/Interactive";
import ChooseYour from "../components/ChooseYour";
import YourReview from "../components/YourReview";
import Footer from "../components/Footer";
const Homepage = () => {
  return (
    <div>
      <div
        className=' bg-cover bg-no-repeat'
        style={{ backgroundImage: `url(${HomeBackground}) ` }}>
        <Header />
        <HomeBanner />
        <Interactive />
      </div>
      <ChooseYour />
      <YourReview />
      <div >
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
