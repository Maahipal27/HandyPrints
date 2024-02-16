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
    <div className="bg-[#F6F5F4] flex-col flex md:flex-row md:-top-96 justify-between items-center h-full md:h-screen  px-10">
      <div className="md:w-1/2 md:-top-96  flex flex-col justify-evenly px-40 py-1">
        <h2 className="text-[#2B788B] font-bold text-xl m-3 scroll-pt-60 md:text-center px-5">
          E-PLATFORM FOR PROJECTS
        </h2>
        <h1 className="text-black-500 text-6xl m-1 font-bold text-center">
          Academic assignments made easy online.
        </h1>
        <p className="text-gray-600 m-3">
          Experience the synergy of speed, affordability,<br></br>and excellence
          with our comprehensive assignment assistance services. We're here to
          empower you with the tools and resources you need to ace your academic
          pursuits.
        </p>
        {/* <button className="text-center cursor-pointer bg-[#C3DCE3] text-[#2B788B] font-normal w-32 py-2 px-4 rounded-full">
  TRY NOW
</button> */}
        <div className="pr-14 flex flex-row">
          <a href="" className="block w-32 mx-auto">
            <button className="text-center cursor-pointer bg-[#C3DCE3] text-[#2B788B] font-sans font-bold w-full py-2 px-4 rounded-full">
              TRY NOW
            </button>
          </a>
          <button
            onClick={onClickHandler}
            className="text-center cursor-pointer bg-[#C3DCE3] text-[#2B788B] font-sans font-bold w-36 py-2 px-0 rounded-full"
          >
            LEARN MORE
          </button>
        </div>
        {/* onClick={() => {
              window.scrollTo({
                top: 800,
                behavior: "smooth", // You can change this to 'auto' if you prefer an instant scroll
              });
            }} */}
      </div>
      <div className="md:h-0 h-96 md:mb-0 mb-10 md:pt-20 md:flex items-center justify-center w-1/2 relative">
        {/* First image */}
        <img
          className="absolute top-40 -left-10 md:-top-40  md:-left-20 w-40 h-40 md:w-64 md:h-64 "
          src="./img/image 6.png"
          alt="Image 1"
        />

        {/* Second image */}
        <img
          className="absolute md:-top-60 left-5 md:left-0 w-[350px] h-[400px] md:w-[650px] md:h-[500px]"
          src="./img/boy.png"
          alt="Image 2"
        />

        {/* Third image */}
        <img
          className="absolute md:-top-96 left-32 md:left-72 w-[200px] h-[400px] md:w-[350px] md:h-[700px]"
          src="./img/image 12.png"
          alt="Image 3"
        />
      </div>
    </div>
  );
};

export default Frontt;
