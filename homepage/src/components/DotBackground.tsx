import React from "react";
import GroupSvg from "../assets/office.svg";
import SmileSvg from "../assets/everyone-is-smiling.svg";
import MicroPhone from "../assets/microphone.png";
import Podcast from "../assets/podcast.png";
const DotBackground = () => {
  return (
    <div>
      <div className='w-[550px] xl:left-[700px] lg:left-[600px] 2xl:left-[900px] h-[370px] left-[774.10px] top-[153.96px] absolute'>
        <div className='w-2.5 h-2.5 left-0 top-[360px]  absolute bg-purple-800 rounded-full' />

        <div className='w-2.5 h-2.5 left-[60px] top-[360px] absolute bg-purple-800 rounded-full' />

        <div className='w-2.5 h-2.5 left-[120px] top-[360px] absolute bg-purple-800 rounded-full' />

        <div className='w-2.5 h-2.5 left-[180px] top-[360px] absolute bg-purple-800 rounded-full' />

        <div className='w-2.5 h-2.5 left-[240px] top-[360px] absolute bg-purple-800 rounded-full' />

        <div className='w-2.5 h-2.5 left-[300px] top-[360px] absolute bg-purple-800 rounded-full' />

        <div className='w-2.5 h-2.5 left-[360px] top-[360px] absolute bg-purple-800 rounded-full' />

        <div className='w-2.5 h-2.5 left-[420px] top-[360px] absolute bg-purple-800 rounded-full' />

        <div className='w-2.5 h-2.5 left-[480px] top-[240px] absolute bg-purple-800 rounded-full' />
        <div className='w-2.5 h-2.5 left-[480px] top-[300px] absolute bg-purple-800 rounded-full' />
        <div className='w-2.5 h-2.5 left-[480px] top-[360px] absolute bg-purple-800 rounded-full' />
        <div className='w-2.5 h-2.5 left-[540px] top-0 absolute bg-purple-800 rounded-full' />
        <div className='w-2.5 h-2.5 left-[540px] top-[60px] absolute bg-purple-800 rounded-full' />
        <div className='w-2.5 h-2.5 left-[540px] top-[120px] absolute bg-purple-800 rounded-full' />
        <div className='w-2.5 h-2.5 left-[540px] top-[180px] absolute bg-purple-800 rounded-full' />
        <div className='w-2.5 h-2.5 left-[540px] top-[240px] absolute bg-purple-800 rounded-full' />
        <div className='w-2.5 h-2.5 left-[540px] top-[300px] absolute bg-purple-800 rounded-full' />
        <div className='w-2.5 h-2.5 left-[540px] top-[360px] absolute bg-purple-800 rounded-full' />
        <div className=' right-[-30px] bottom-[-30px] absolute  '>
          <img
            src={MicroPhone}
            className='w-[100%] h-[100%]'
            alt='small_phone'
          />
        </div>
        <div className=' right-[-70px] top-[0px] absolute  '>
          <img src={Podcast} className='ww-[100%] h-[100%]' alt='small_phone' />
        </div>
      </div>
      <img
        className='w-[491px] h-[281px] xl:left-[720px] lg:left-[620px] 2xl:left-[900px] left-[773px] top-[94px] absolute rounded-lg'
        src={SmileSvg}
        alt='smile_svg'
      />
      <img
        className='w-[491px] h-[281px] xl:left-[700px] lg:left-[600px] 2xl:left-[900px] left-[720px] top-[184px] absolute rounded-lg'
        src={GroupSvg}
        alt='smile_svg'
      />
    </div>
  );
};

export default DotBackground;
