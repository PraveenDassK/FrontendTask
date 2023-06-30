import React from "react";
import { styles } from "../styles/styles";
import InteractiveCard from "./InteractiveCard";
import bgImage from "../assets/pngwing.svg";
const Interactive = () => {
  return (
    <div
      className='w-full flex flex-row gap-20 pt-[8%] pl-[10%] 2xl:pl-[15%] 2xl:pt-[10%] bg-no-repeat bg-right-top'
      style={{ backgroundImage: `url(${bgImage})` }}>
      <div className='grid grid-rows-2 grid-cols-2 gap-5'>
        <div>
          <InteractiveCard />
        </div>
        <div className='mt-10'>
          <InteractiveCard />
        </div>
        <div>
          <InteractiveCard />
        </div>
        <div className='mt-10'>
          <InteractiveCard />
        </div>
      </div>
      <div className='w-[40%] flex items-left flex-col justify-center gap-3'>
        <div className={`${styles.aboutCourseText}`}>About the Course</div>
        <div className={`${styles.aboutPara}`}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unkno
        </div>
        <div className='mt-10'>
          <button className={`${styles.exploreNowButton}`}>Explore Now</button>
        </div>
      </div>
    </div>
  );
};

export default Interactive;
