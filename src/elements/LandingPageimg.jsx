import React from "react";
import BlueImg from "../assets/section1/blueImg.png";
import tree1 from "../assets/section1/tree1.png";
import tree2 from "../assets/section1/tree2.png";
import treebg from "../assets/section1/treebg.png";
import MetaData from "../layouts/MetaData";

const LandingPageimg = () => {
  return (
    <div className="my-20 sm:my-12 relative flex h-fit">
      <MetaData title={"Home"} />
      <img
        src={tree1}
        className="w-[25%] hidden md:flex absolute -top-[3rem] -left-0 z-10"
      />
      <img
        src={treebg}
        className="w-[25%] hidden md:flex absolute -top-[0rem] -left-0 z-0"
      />
      <img
        src={BlueImg}
        className="w-[90%] md:w-[80%] mx-auto "
        alt="Blue Background"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4 w-3/4 md:w-1/2 sm:px-3">
        <span className="text-[#BC04BE] font-bold text-lg sm:text-2xl text-center sm:text-start">
          Dare to shape the future with us
        </span>
        <span className="text-white font-semibold text-sm sm:text-xl text-center sm:text-start">
          Lorem ipsum dolor sit amet consectetur. Bibendum amet lectus
          vestibulum volutpat pulvinar dolor nunc.
        </span>
        <input
          className="flex w-full  bg-[#2D2D2D] border-[#780c79] border-2 text-white font-semibold rounded-md text-md p-3"
          placeholder="Search"
        />
      </div>
      <img
        src={tree2}
        className="w-[25%] hidden md:flex absolute right-[1rem] -top-[1rem] z-10"
      />
      <img
        src={treebg}
        className="w-[25%] hidden md:flex absolute right-[1rem] -top-[2rem] z-0"
      />
    </div>
  );
};

export default LandingPageimg;
