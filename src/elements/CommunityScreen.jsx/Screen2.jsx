import React, { useState } from "react";
import discord from "../../assets/section1/discord.png";
import XIcon from "@mui/icons-material/X";

const Screen2 = ({ formData, handleChange, SetScreen }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!formData.website) newErrors.website = "website is required";
    return newErrors;
  };

  const handleClick = (id) => {
    if (id === 0 || Object.keys(validate()).length === 0) {
      SetScreen(id);
    } else {
      setErrors(validate());
    }
  };

  return (
    <div>
      <div className="flex flex-col py-12 px-8 justify-between h-full items-center gap-12">
        <div className="flex flex-col justify-start gap-3">
          <div className="flex text-white text-lg sm:text-xl font-bold">
            Complete the setup for your page
          </div>
          <div className="flex text-[#838383] text-xs font-semibold">
            Congratulations! You've generated a preliminary draft for Pick Dive.
            Now, finalize the setup of your community before making it public.
            This step ensures that members can confidently join knowing they're
            becoming part of an authentic community.
          </div>
        </div>

        <div className="flex flex-col justify-start gap-5 w-full">
          <div className="flex text-white text-md font-bold">
            Connect your networks
          </div>
          <div className="flex gap-3 justify-center bg-[#5865F2] p-2 rounded-md cursor-pointer">
            <img src={discord} className="w-6" />
            <span className="text-white font-semibold">Login with Discord</span>
          </div>
          <div className="flex gap-3 justify-center bg-white p-2 rounded-md cursor-pointer">
            <XIcon className="w-6 text-black" />
            <span className="text-black font-semibold">Login with Twitter</span>
          </div>
        </div>
        <div className="flex flex-col justify-start gap-2 w-full">
          <div className="flex text-white text-lg font-bold">
            Add your website
          </div>
          <input
            className="rounded-lg p-2 focus:outline-none bg-transparent border border-[#00FFFF] font-semibold text-lg text-white"
            placeholder="PickDive.com"
            onChange={handleChange}
            name="website"
            value={formData.website}
          />
          {errors.website && (
            <span className="text-red-500 text-xs">{errors.website}</span>
          )}
        </div>
        <div className="pt-4 flex justify-between gap-3 w-full">
          <div className="w-1/3 p-1 rounded-lg bg-[#FF00FF]"></div>
          <div className="w-1/3 p-1 rounded-lg bg-[#111111]"></div>
          <div className="w-1/3 p-1 rounded-lg bg-[#111111]"></div>
        </div>
        <div className="flex w-[100%]">
          <button
            className="mt-2 p-2 w-2/3 border text-white font-semibold text-sm border-[#bc04be] rounded-lg hover:bg-[#bc04be]"
            onClick={() => {
              handleClick(0);
            }}
          >
            Previous
          </button>
          <button
            className="mt-2 p-2 w-2/3 border text-white font-semibold text-sm border-[#bc04be] rounded-lg hover:bg-[#bc04be]"
            onClick={() => {
              handleClick(2);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Screen2;
