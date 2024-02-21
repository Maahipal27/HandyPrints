import React from "react";
import { useState } from "react";

const Frontt = ({ setIsVisible }) => {
  const onClickHandler = () => {
    setIsVisible(true);
    console.log(window.innerWidth);
    const scrollLength = window.innerWidth > 600 ? 815 : 970;
    setTimeout(() => {
      window.scrollTo({
        top: scrollLength,
        behavior: "smooth", // You can change this to 'auto' if you prefer an instant scroll
      });
    }, 1);
  };
  return (
    <div className='bg-[#F6F5F4] flex-col flex md:flex-row md:-top-96 justify-between items-center h-screen mb-12'>
      <div className='h-1/2 w-full md:h-full px-10 flex flex-col justify-center items-center mb-48 py-1'>
        <h2 className='text-[#2B788B] font-bold  text-xl mt-14 mb-10 text-center px-5'>
          E-PLATFORM FOR PROJECTS
        </h2>
        <h1 className='text-black-500 text-4xl md:text-6xl m-1 font-bold text-center px-10'>
          Academic assignments made easy online.
        </h1>
        <p className='text-gray-600 m-3 text-center'>
          Experience the synergy of speed, affordability,<br></br>and excellence
          with our comprehensive assignment assistance services. We're here to
          empower you with the tools and resources you need to ace your academic
          pursuits.
        </p>
        <div className='pr-14 flex flex-row w-full justify-center'>
          <button className='text-center cursor-pointer bg-[#C3DCE3] text-[#2B788B] font-sans font-bold w-36 py-2 rounded-full'>
            TRY NOW
          </button>
          <button
            onClick={onClickHandler}
            className='text-center cursor-pointer ml-5 bg-[#C3DCE3] text-[#2B788B] font-sans font-bold w-36 py-2 rounded-full'
          >
            LEARN MORE
          </button>
        </div>
      </div>
      <div className='w-full h-full flex justify-center items-center relative md:ml-10'>
        {/* First image */}
        <img
          className=' absolute top-32 right-60 md:-left-24 w-32 h-40 md:w-64 md:h-64'
          src='./img/image 6.png'
          alt='Image 1'
        />
        {/* Second image */}
        <img
          className='absolute md:-top-1 right-7 md:left-0 w-[300px] h-[350px] md:w-[650px] md:h-[500px]'
          src='./img/boy.png'
          alt='Image 2'
        />
        {/* Third image */}
        <img
          className='absolute md:-top-16 left-64 md:left-72 w-[150px] h-[400px] md:w-[350px] md:h-[650px]'
          src='./img/image 12.png'
          alt='Image 3'
        />
      </div>
    </div>
  );
};

export default Frontt;
