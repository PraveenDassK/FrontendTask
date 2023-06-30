import React from "react";
import ReviewCard from "./ReviewCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const YourReview = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const data = [
    {
      name: "Lolla Smith",
      office: "Microsoft",
    },
    {
      name: "Lolla Smith",
      office: "Google",
    },
    {
      name: "Lolla Smith",
      office: "Yahoo",
    },
    {
      name: "Lolla Smith",
      office: "Jio",
    },
  ];
  return (
    <div className='w-full mt-[4%] pt-[3%] mb-[3%] pl-[9%]'>
      <div className='text-black text-[32px] text-left font-bold'>
        Review from customers
      </div>
      <div className='w-full  text-left text-black text-[14px] font-normal mt-5'>
        Lorem Ipsum is simply dummy text of the printing and typesetting <br />
        industry. Lorem Ipsum has been the industry's
      </div>
      <div className=' pt-[3%]'>
        {/* {data.map((eachValue, index) => {
          return <ChooseYourCard {...eachValue} />;
        })} */}
        <Slider {...settings}>
          {data.map((eachValue, index) => {
            return <ReviewCard {...eachValue} />;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default YourReview;
