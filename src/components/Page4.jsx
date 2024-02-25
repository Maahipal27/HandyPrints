import React from "react";
const Page4 = () => {
  return (
    <div className='about'>
      {/* <div className=" flex-col flex  md:flex-row justify-between items-center h-full py-5 top-80 ">
      
      <img src="./img/image 21.png" className="flex-col flex md:flex-row px-10   w-[350px] h-[400px] md:w-2/5 md:h-4/5 " />
      <div >
        <h1 className="text-black -top-36 text-4xl font-extrabold font-sans">WHY WORK <br></br > WITH US?</h1>
        <div className="para">
        <p className="text-black  md:text-base py-3 font-sans ">
        In a world where education has become increasingly demanding and time-consuming, students often find themselves juggling multiple assignments, projects, and exams.Navigating this academic landscape can be overwhelming, leaving many feeling stressed,anxious, and in need of assistance. Recognizing this growing need, Handy Prints emerged with a mission to alleviate students' academic burden and help them achieve their
 full potential.
Our commitment to excellence extends beyond academic support. Handy Prints also recognizes the importance of convenience and efficiency. That's why we offer a seamless online platform where students can easily place orders, upload their files, and receive completed assignments within a swift turnaround time. Our user-friendly interface and secure payment gateway ensure a hassle-free experience for every customer.
          </p>
       
        </div>
        </div>

    </div> */}
      <div className='flex flex-col md:flex-row justify-between items-center h-full py-5 top-80'>
        <div className='w-full flex justify-center items-center'>
          <img
            src='./img/Group Study 1.png'
            className='flex flex-col md:flex-row px-10 w-[450px] h-[400px]  mb-8 md:mb-0'
          />
        </div>
        <div className='w-full flex flex-col justify-center items-center'>
          <h1 className='text-black -top-36 text-3xl md:text-4xl font-extrabold font-sans'>
            Lightning-Fast <br /> Turn Around?
          </h1>
          <p className='text-black text-center px-28 md:px-10 font-sans'>
            Say goodbye to eleventh-hour panics. Our team of experts ensures
            that your assignments are returned to you quickly, without
            compromising quality.
          </p>
          <button className='text-center cursor-pointer bg-[#C3DCE3] text-[#2B788B] font-sans font-bold w-36 py-2 m-4 px-4 rounded-full'>
            view more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page4;
