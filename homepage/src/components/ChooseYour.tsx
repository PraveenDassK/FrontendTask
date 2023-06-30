import React from "react";
import bgImage from "../assets/podcastbg.svg";
import ChooseYourCard from "./ChooseYourCard";
const ChooseYour = () => {
  const data = [
    {
      name: "Basic Plan",
      bgColor: "#ffffff",
      textColor: "#000000",
      priceColor: "#7A3199",
    },
    {
      name: "Premium Plan",
      bgColor: "#7A3199",
      textColor: "#ffffff",
      priceColor: "#ffffff",
    },
    {
      name: "Basic Plan",
      bgColor: "#ffffff",
      textColor: "#000000",
      priceColor: "#7A3199",
    },
  ];
  return (
    <div
      className='w-full mt-[4%] pt-[3%] mb-[3%] bg-contain bg-no-repeat'
      style={{ backgroundImage: `url(${bgImage})` }}>
      <div className='text-black text-[32px] font-bold'>Choose Your Plan </div>
      <div className='w-full flex justify-center items-center text-center text-black text-[14px] font-normal mt-5'>
        Lorem Ipsum is simply dummy text of the printing and <br />
        typesetting industry. Lorem Ipsum has been the industry's{" "}
      </div>
      <div className='flex w-full justify-center pt-[10%] gap-[5%]'>
        {data.map((eachValue, index) => {
          return <ChooseYourCard {...eachValue} />;
        })}
      </div>
    </div>
  );
};

export default ChooseYour;
