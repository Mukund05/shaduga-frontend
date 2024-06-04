import React, { useState } from "react";
import user from "../assets/section2/user4.png";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

const EditProfile = ({ setShowSidebar, showSideBar }) => {
  return (
    <div className="flex justify-center w-full flex-col">
      <div className="w-full flex-col flex rounded-b-3xl px-16 py-8 bg-gradient-to-r from-[#3F0140] to-[#A303A6] gap-2 relative">
        <div
          className=" absolute top-10 left-6 flex sm:hidden z-50"
          onClick={() => setShowSidebar(!showSideBar)}
        >
          {!showSideBar ? (
            <MenuIcon className="text-white " />
          ) : (
            <CloseIcon className="text-white " />
          )}
        </div>
        <span className="font-bold text-xl text-[#ff00ff]">Edit profile</span>
        <span className="font-semibold text-md text-white">
          Manage your profile
        </span>
      </div>
      <div className="p-12 flex flex-col gap-10 justify-start ">
        <div className="flex flex-col gap-2">
          <span className="text-white text-lg font-bold">Avatar</span>
          <div className="border p-2 rounded-full border-[#05F3DB] w-fit">
            <img src={user} className="" />
          </div>
          <span className="text-xs text-[#6e6e6e]">
            Recommended size in 256x256px
          </span>
        </div>
        <div className="flex flex-col gap-2 justify-start w-3/4">
          <span className="text-white text-lg font-bold">Username</span>
          <input
            className="border p-2 rounded-xl text-white border-[#05F3DB] bg-transparent"
            placeholder="Enter your Username"
          />
        </div>
        <div className="flex flex-col gap-2 justify-start w-3/4">
          <span className="text-white text-lg font-bold">Ethereum address</span>
          <input
            className="border p-2 rounded-xl text-white border-[#05F3DB] bg-transparent"
            placeholder="Enter Ethereum address"
          />
        </div>
        <div className="p-2 w-full flex justify-end">
          <button className="bg-[#828282] text-white text-sm font-semibold p-2 px-4 rounded-md">
            Update
          </button>
        </div>
        <div className="flex gap-2 sm:w-1/2 flex-col ">
          <button className="flex justify-start p-3 px-4 font-semibold w-full text-[#F05F2B] bg-[#20212A] rounded-md">
            Delete my account
          </button>
          <span className="text-[#6e6e6e] text-xs font-semibold">
            Permanently delete the account on all communities
          </span>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
