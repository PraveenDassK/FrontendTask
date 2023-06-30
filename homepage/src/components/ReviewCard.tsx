import React from "react";
import ProfileImage from "../assets/Lolla.svg";
import ReactStars from "react-stars";
export interface reviewCard {
  name: string;
  office: string;
}
const ReviewCard = ({ name, office }: reviewCard) => {
  return (
    <div className='w-[90%]  rounded-[15px] bg-white shadow-lg border  border-fuchsia-300 border-opacity-40 '>
      <div className='flex flex-row px-10 py-5 gap-5'>
        <div>
          <img src={ProfileImage} alt='review_image' />
        </div>
        <div className='flex flex-col text-left'>
          <div className='text-black text-[16px] font-bold'>{name}</div>
          <div className='text-black text-[14px] font-normal '>{office}</div>
          <div>
            <ReactStars count={5} value={5} size={24} color2={"#ffd700"} />
          </div>
        </div>
      </div>
      <div className='text-left px-10  pb-3 text-black text-[12px] font-normal'>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make
      </div>
    </div>
  );
};

export default ReviewCard;
