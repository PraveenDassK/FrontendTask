import React from "react";
import { styles } from "../styles/styles";
export interface dataCard {
  name: string;
  textColor: string;
  bgColor: string;
  priceColor: string;
}
const ChooseYourCard = ({ name, textColor, bgColor, priceColor }: dataCard) => {
  console.log(name, textColor, bgColor, priceColor);
  return (
    <div
      className={`w-[303px] 2xl:w-[380px] px-[27px] py-[35px]  rounded-lg border  border-purple-800 flex-col text-left gap-4 flex`}
      style={{ background: `${bgColor}` }}>
      <div
        className='text-black text-[16px] font-bold'
        style={{ color: `${textColor}` }}>
        {name}
      </div>
      <div
        className='text-black text-[12px] font-normal'
        style={{ color: `${textColor}` }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
      </div>
      <div
        className={` text-[32px] font-bold`}
        style={{ color: `${priceColor}` }}>
        $54
        <span
          className='text-purple-800 text-[14px] font-normal pl-2'
          style={{ color: `${priceColor}` }}>
          /month
        </span>
      </div>
      <p
        className='text-black text-[12px] font-bold'
        style={{ color: `${textColor}` }}>
        • Free access to video class
      </p>
      <p
        className='text-black text-[12px] font-bold'
        style={{ color: `${textColor}` }}>
        • Free access to video class
      </p>
      <p
        className='text-black text-[12px] font-bold'
        style={{ color: `${textColor}` }}>
        • Free access to video class
      </p>
      <button className=' justify-center items-center flex  py-3  w-[50%]  rounded border border-purple-800 bg-white text-purple-800 text-[12px] font-normal'>
        Start Free Trial
      </button>
    </div>
  );
};

export default ChooseYourCard;
