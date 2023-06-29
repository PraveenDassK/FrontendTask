import React from "react";
import { styles } from "../styles/styles";
const Header = () => {
  return (
    <div className='flex justify-between w-full flex-row bg-transparent	pt-[2%]'>
      <div className={`${styles.homeText} w-full`}>Logo</div>
      <div className='flex justify-center w-full flex-row  gap-[15%]'>
        <div className={`${styles.homeText}`}>About</div>
        <div className={`${styles.homeText}`}>Pricing</div>
        <div className={`${styles.homeText}`}>Review</div>
      </div>
    </div>
  );
};

export default Header;
