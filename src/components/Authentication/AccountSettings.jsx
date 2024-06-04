import { useMediaQuery } from "@react-hook/media-query";
import React, { useState } from "react";
import EditProfile from "../../elements/EditProfile";
import { useNavigate } from "react-router-dom";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import LinkedAccount from "../../elements/LinkedAccount";
import MetaData from "../../layouts/MetaData";

const AccountSettings = () => {
  const navigate = useNavigate();
  const isScreenLessThanSM = useMediaQuery("(max-width: 640px)");
  const [showSideBar, setShowSidebar] = useState(!isScreenLessThanSM);
  const [active, setActive] = useState(1);

  const handleSidebar = (id) => {
    setActive(id);
    if (isScreenLessThanSM) setShowSidebar(false);
  };
  return (
    <div className="flex justify-end w-full">
      <MetaData title={"Account settings"} />
      <div
        className={`${
          showSideBar ? "flex" : "hidden"
        } flex flex-col items-center h-screen overflow-x-auto max-h-screen py-4 w-1/2 sm:w-1/4 bg-[#20212A]  fixed left-0 top-0 z-20`}
      >
        <div
          className="cursor-pointer hidden sm:absolute top-4 left-4"
          onClick={() => navigate(-1)}
        >
          <ChevronLeftIcon className="text-[#1976D2]" />
          <span className="underline text-[#1976D2] text-sm">Back</span>
        </div>
        <span className="text-lg sm:text-xl px-4 text-white font-bold flex items-start w-full pt-16">
          Settings
        </span>
        <div className="flex flex-col gap-3 justify-start w-full py-8">
          <div
            className={`${
              active == 0
                ? "bg-[#2A2B35] border-s-4 border-[#DDE2FF]"
                : "border-s-4 border-transparent"
            } text-md text-[#A4A6B3] p-3 font-semibold px-4 cursor-not-allowed`}
          >
            My Account
          </div>
          <div
            className={`${
              active == 1
                ? "bg-[#2A2B35] border-s-4 border-[#DDE2FF]"
                : "border-s-4 border-transparent"
            } text-md text-white p-3 font-semibold px-4 cursor-pointer`}
            onClick={() => handleSidebar(1)}
          >
            Edit profile
          </div>
          <div
            className={`${
              active == 2
                ? "bg-[#2A2B35] border-s-4 border-[#DDE2FF]"
                : "border-s-4 border-transparent"
            } text-md text-white p-3 font-semibold px-4 cursor-pointer`}
            onClick={() => handleSidebar(2)}
          >
            Linked accounts
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center bg-[#191a1e] w-full sm:w-3/4 overflow-x-auto max-h-screen">
        {active === 1 && (
          <EditProfile
            setShowSidebar={setShowSidebar}
            showSideBar={showSideBar}
          />
        )}
        {active === 2 && (
          <LinkedAccount
            setShowSidebar={setShowSidebar}
            showSideBar={showSideBar}
          />
        )}
      </div>
    </div>
  );
};

export default AccountSettings;
