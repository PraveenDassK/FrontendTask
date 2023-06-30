import React from "react";
import SmileSvg from "../assets/everyone-is-smiling.svg";
import GroupSvg from "../assets/group-business.svg";
import DotBackground from "./DotBackground";
const HomeBanner = () => {
  return (
    <div className='w-[100%] relative px-[5%] pb-[10%] flex '>
      <div className='w-[50%]  flex flex-col items-center justify-center gap-[2%] my-10 mx-20'>
        <div className='w-[100%] flex flex-col items-center justify-center'>
          <div className='w-[100%] text-white text-[48px] font-bold text-left'>
            Learn how to launch a successful podcast
          </div>
          <div className='w-[100%] mt-[4%]  text-white text-[16px] font-normal text-left'>
            Lorem Ipsum is simply dummy text of the printing and typesetting in
            ustry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s
          </div>
        </div>
        <div className='flex w-[100%] mt-[15%] '>
          <div className='w-[50%] h-[74.86px] pl-[55px] pr-14 pt-[19px] pb-[25.86px]   bg-gradient-to-r from-blue-500 to-violet-500 rounded-lg justify-center items-center inline-flex'>
            <div className='  text-white text-[20px] font-bold'>
              Sign up Now
            </div>
          </div>
        </div>
      </div>
      <div className='w-[50%] my-10 '>
        <DotBackground />
      </div>
    </div>
  );
};

export default HomeBanner;
