import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";

const ProfileCard = () => {
  return (
    <div className="rounded-2xl py-2  w-full  flex gap-1 flex-col justify-start bg-[#363c42]">
      <div className="px-3 py-1 flex flex-col  cursor-pointer">
        <div className="hover:bg-[#20212a] p-2 flex gap-2 justify-start rounded-lg items-center">
          <PersonIcon className="text-white" />
          <span className="text-white text-sm sm:text-md font-semibold ">
            Profile
          </span>
        </div>
        <Link
          className="hover:bg-[#20212a] p-2 flex gap-2 justify-start rounded-lg items-center"
          to="/account-settings"
        >
          <SettingsIcon className="text-white" />
          <span className="text-white text-sm sm:text-md font-semibold ">
            Account settings
          </span>
        </Link>
      </div>
      <div className="w-full border-t border-[#838383]"></div>
      <div className="px-3 py-1 flex flex-col  cursor-pointer">
        <div className="hover:bg-[#20212a] p-2 flex gap-2 justify-start rounded-lg items-center">
          <TextSnippetIcon className="text-white" />
          <span className="text-white text-sm sm:text-md font-semibold ">
            Documentation
          </span>
        </div>
        <div className="hover:bg-[#20212a] p-2 flex gap-2 justify-start rounded-lg items-center">
          <LocalPhoneIcon className="text-white" />
          <span className="text-white text-sm sm:text-md font-semibold ">
            Book a call
          </span>
        </div>
      </div>
      <div className="w-full border-t border-[#838383]"></div>
      <div className="px-3 py-1 flex flex-col  cursor-pointer">
        <div className="hover:bg-[#20212a] p-2 flex gap-2 justify-start rounded-lg items-center">
          <LogoutIcon className="text-[#F05F2B]" />
          <Link
            className="text-[#F05F2B] text-sm sm:text-md font-semibold "
            to="/"
          >
            Log out
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
