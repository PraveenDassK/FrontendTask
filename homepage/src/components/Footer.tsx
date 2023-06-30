import React from "react";
import { styles } from "../styles/styles";
import Footerbg from "../assets/Footer.svg";
import Facebook from "../assets/facebook.svg";
import Twitter from "../assets//twitter.svg";
import Youtube from "../assets/youtube.svg";
import Instagram from "../assets/instagram.svg";

const Footer = () => {
  return (
    <div
      className='w-full h-[393px] relative bg-cover bg-no-repeat'
      style={{ backgroundImage: `url(${Footerbg})` }}>
      <div className='w-full text-center flex justify-center flex-col items-center gap-5 my-5 pt-16 pb-[4%]'>
        <div className='text-black text-[32px] font-bold'>
          We have what you’re looking for
        </div>
        <div className='twolinetxt'>
          <p className='w-[596px] text-center text-[#4776E6] text-[12px] font-normal'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            a
          </p>
        </div>
        <button className={`${styles.exploreNowButton} mt-4`}>
          Get Started Now
        </button>
      </div>
      <hr />
      <div className='w-full flex flex-row justify-center gap-[30%] pt-3 '>
        <div className='text-white text-[12px] font-normal'>
          <h5>All Right Reserved @Copyright 2023</h5>
        </div>
        <div className='flex flex-row gap-10 items-center'>
          <div className='text-white text-[12px] font-normal'>
            Terms of Service
          </div>
          <div className='text-white text-[12px] font-normal'>
            Privacy Policy
          </div>
          <div className='text-white text-[12px] font-normal'>Product</div>

          <div className='flex flex-row gap-3 pl-3'>
            <img src={Facebook} alt='footer_icon' className='h-[15] w-[15]' />
            <img src={Twitter} alt='footer_icon' className='h-[15] w-[15]' />
            <img src={Instagram} alt='footer_icon' className='h-[15] w-[15]' />
            <img src={Youtube} alt='footer_icon' className='h-[15] w-[15]' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
