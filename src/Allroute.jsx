import React from "react";
import { Link } from "react-router-dom";

const Allroute = () => {
  return (
    <div className="h-screen w-full flex flex-wrap gap-6 justify-center items-center sm:p-40 bg-[#0d0d0d]">
      <Link
        to="/login"
        className="border-[#3F0140] border rounded-lg font-semibold  text-xs sm:text-sm p-2 flex justify-center items-center cursor-pointer hover:bg-[#bc04be] text-white w-fit px-6 "
      >
        Login
      </Link>
      <Link
        to="/"
        className="border-[#3F0140] border rounded-lg font-semibold  text-xs sm:text-sm p-2 flex justify-center items-center cursor-pointer hover:bg-[#bc04be] text-white w-fit px-6 "
      >
        Landing Page
      </Link>

      <Link
        to="/sign-up"
        className="border-[#3F0140] border rounded-lg font-semibold  text-xs sm:text-sm p-2 flex justify-center items-center cursor-pointer hover:bg-[#bc04be]  text-white w-fit px-6 "
      >
        signup
      </Link>
      {/* <Link
        to="/create-account"
        className="border-[#3F0140] border rounded-lg font-semibold  text-xs sm:text-sm p-2 flex justify-center items-center cursor-pointer hover:bg-[#bc04be]  text-white w-fit px-6 "
      >
        Create an account
      </Link> */}
      {/* <Link
        to="/Profile"
        className="border-[#3F0140] border rounded-lg font-semibold  text-xs sm:text-sm p-2 flex justify-center items-center cursor-pointer hover:bg-[#bc04be]  text-white w-fit px-6 "
      >
        Profile
      </Link> */}
      <Link
        to="/dashboard-quest/menu"
        className="border-[#3F0140] border rounded-lg font-semibold  text-xs sm:text-sm p-2 flex justify-center items-center cursor-pointer hover:bg-[#bc04be]  text-white w-fit px-6 "
      >
        dashboard quest menu
      </Link>
      <Link
        to="/my-communities"
        className="border-[#3F0140] border rounded-lg font-semibold  text-xs sm:text-sm p-2 flex justify-center items-center cursor-pointer hover:bg-[#bc04be]  text-white w-fit px-6 "
      >
        My Communities
      </Link>
      <Link
        to="/account-settings"
        className="border-[#3F0140] border rounded-lg font-semibold  text-xs sm:text-sm p-2 flex justify-center items-center cursor-pointer hover:bg-[#bc04be]  text-white w-fit px-6 "
      >
        Account settings
      </Link>
      <Link
        to="/dashboard/admin"
        className="border-[#3F0140] border rounded-lg font-semibold  text-xs sm:text-sm p-2 flex justify-center items-center cursor-pointer hover:bg-[#bc04be]  text-white w-fit px-6 "
      >
        Dashboard
      </Link>
      <Link
        to="/plans"
        className="border-[#3F0140] border rounded-lg font-semibold  text-xs sm:text-sm p-2 flex justify-center items-center cursor-pointer hover:bg-[#bc04be]  text-white w-fit px-6 "
      >
        Plans
      </Link>
    </div>
  );
};

export default Allroute;
