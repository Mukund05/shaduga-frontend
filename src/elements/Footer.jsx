import React from "react";
import logo from "../assets/section1/Logo.png";
import x from "../assets/section1/x.png";
import discord from "../assets/section1/discord.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className=" px-12">
      <div className="h-80 flex flex-col justify-start border-t border-[#3F0140] py-6 text-white gap-8  sm:gap-5">
        <img
          src={logo}
          className="w-fit mx-auto sm:mx-0 cursor-pointer"
          onClick={() => navigate("/demo")}
        />
        <div className="flex flex-col gap-5 sm:flex-row justify-between items-center sm:items-start">
          <span className="text-sm sm:text-lg text-center sm:text-start font-semibold  w-2/3 sm:w-1/3">
            Lorem ipsum dolor sit amet consectetur. Ac cursus id eget convallis.
          </span>
          <div className="flex gap-5 ">
            <img src={x} className="w-fit h-fit cursor-pointer" />
            <img src={discord} className="w-fit h-fit cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-3 sm:gap-7 text-white w-auto  mx-auto py-4 flex-wrap">
        <span className="text-sm text-nowrap"> &copy; 2024 ShagudaLabs</span>
        <span className="text-sm text-nowrap cursor-pointer">
          {" "}
          Privacy Policy
        </span>
        <span className="text-sm text-nowrap cursor-pointer">
          {" "}
          Cookie Policy
        </span>
        <span className="text-sm text-nowrap cursor-pointer">
          {" "}
          Terms of use
        </span>
      </div>
    </div>
  );
};

export default Footer;
