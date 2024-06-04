import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DoneIcon from "@mui/icons-material/Done";
import InfoIcon from "@mui/icons-material/Info";
import { useMediaQuery } from "@react-hook/media-query";
import { Link } from "react-router-dom";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MetaData from "../layouts/MetaData";

const Plans = () => {
  const isScreenLessThanMD = useMediaQuery("(max-width: 768px)");

  const [active, setActive] = useState(0);
  const [showSideBar, setShowSidebar] = useState(!isScreenLessThanMD);
  const [sidebarIndex, setSidebarIndex] = useState(0);

  return (
    <div className="flex justify-end relative bg-[#20212a]">
      <MetaData title={"Plans"} />
      {showSideBar && (
        <div className="h-screen w-1/2 md:w-1/5 absolute left-0 top-0  z-50 flex flex-col gap-3 py-3 overflow-x-auto max-h-screen bg-[#20212a]">
          <div className="flex  justify-start gap-2 cursor-pointer p-1 ">
            <KeyboardArrowLeftIcon className="text-[#1976D2]" />
            <Link className="text-[#1976D2] underline " to="/dashboard">
              Pick Dive
            </Link>
          </div>
          <span className="text-white text-lg font-semibold px-4 py-4">
            Settings
          </span>
          <div
            className={`py-2 px-4 font-semibold cursor-pointer ${
              sidebarIndex === 0
                ? "bg-[#2a2b35] text-[#DDE2FF] border-l-[#DDE2FF] border-l-2 "
                : " text-[#A4A6B3] border-l-transparent border-l-2"
            }`}
            onClick={() => setSidebarIndex(0)}
          >
            Community
          </div>
          <div
            className={`py-2 px-4 font-semibold cursor-pointer ${
              sidebarIndex === 1
                ? "bg-[#2a2b35] text-[#DDE2FF] border-l-[#DDE2FF] border-l-2 "
                : " text-[#A4A6B3] border-l-transparent border-l-2"
            }`}
            onClick={() => setSidebarIndex(1)}
          >
            General
          </div>
          <div
            className={`py-2 px-4 font-semibold cursor-pointer ${
              sidebarIndex === 2
                ? "bg-[#2a2b35] text-[#DDE2FF] border-l-[#DDE2FF] border-l-2 "
                : " text-[#A4A6B3] border-l-transparent border-l-2"
            }`}
            onClick={() => setSidebarIndex(2)}
          >
            Security
          </div>
          <div
            className={`py-2 px-4 font-semibold cursor-pointer ${
              sidebarIndex === 3
                ? "bg-[#2a2b35] text-[#DDE2FF] border-l-[#DDE2FF] border-l-2 "
                : " text-[#A4A6B3] border-l-transparent border-l-2"
            }`}
            onClick={() => setSidebarIndex(3)}
          >
            Members
          </div>
          <div
            className={`py-2 px-4 font-semibold cursor-pointer ${
              sidebarIndex === 4
                ? "bg-[#2a2b35] text-[#DDE2FF] border-l-[#DDE2FF] border-l-2 "
                : " text-[#A4A6B3] border-l-transparent border-l-2"
            }`}
            onClick={() => setSidebarIndex(4)}
          >
            <div className="flex justify-between ">
              Integrations
              <ChevronRightIcon className="" />
            </div>
          </div>
          <div
            className={`py-2 px-4 font-semibold cursor-pointer ${
              sidebarIndex === 5
                ? "bg-[#2a2b35] text-[#DDE2FF] border-l-[#DDE2FF] border-l-2 "
                : " text-[#A4A6B3] border-l-transparent border-l-2"
            }`}
            onClick={() => setSidebarIndex(5)}
          >
            Plans
          </div>
          <div
            className={`py-2 px-4 font-semibold cursor-pointer ${
              sidebarIndex === 6
                ? "bg-[#2a2b35] text-[#DDE2FF] border-l-[#DDE2FF] border-l-2 "
                : " text-[#A4A6B3] border-l-transparent border-l-2"
            }`}
            onClick={() => setSidebarIndex(6)}
          >
            Billing
          </div>
          <div className="border-t border-t-[#DFE0EB]"></div>
          <div
            className={`py-2 px-4 font-semibold cursor-pointer ${
              sidebarIndex === 7
                ? "bg-[#2a2b35] text-[#DDE2FF] border-l-[#DDE2FF] border-l-2 "
                : " text-[#A4A6B3] border-l-transparent border-l-2"
            }`}
            onClick={() => setSidebarIndex(7)}
          >
            My Account
          </div>
          <div
            className={`py-2 px-4 font-semibold cursor-pointer ${
              sidebarIndex === 8
                ? "bg-[#2a2b35] text-[#DDE2FF] border-l-[#DDE2FF] border-l-2 "
                : " text-[#A4A6B3] border-l-transparent border-l-2"
            }`}
            onClick={() => setSidebarIndex(8)}
          >
            Edit Profile
          </div>
          <div
            className={`py-2 px-4 font-semibold cursor-pointer ${
              sidebarIndex === 9
                ? "bg-[#2a2b35] text-[#DDE2FF] border-l-[#DDE2FF] border-l-2 "
                : " text-[#A4A6B3] border-l-transparent border-l-2"
            }`}
            onClick={() => setSidebarIndex(9)}
          >
            Linked accounts
          </div>
        </div>
      )}
      <div className="w-full md:w-4/5 flex flex-col gap-8 items-center bg-[#191a1e]">
        <div className="w-full flex-col flex rounded-b-3xl px-16 py-8 bg-gradient-to-r from-[#3F0140] to-[#A303A6] gap-2 relative">
          <div
            className=" absolute top-12 left-6 flex md:hidden z-50"
            onClick={() => setShowSidebar(!showSideBar)}
          >
            {!showSideBar ? (
              <MenuIcon className="text-white " />
            ) : (
              <CloseIcon className="text-white " />
            )}
          </div>
          <span className="font-bold text-xl text-[#ff00ff]">Plans</span>
          <span className="font-semibold text-sm text-[#9FA2B4]">
            Compare the different plans on Shagudalabs and what’s included.
          </span>
        </div>
        <div className="rounded-xl p-[2px] bg-[#2d2d2d] flex w-1/4">
          <div
            className={`rounded-xl p-1 ${
              active === 0 ? "bg-[#20212a]" : "bg-[#2d2d2d]"
            }  text-white font-semibold cursor-pointer w-1/2 flex justify-center text-sm`}
            onClick={() => setActive(0)}
          >
            Monthly
          </div>
          <div
            className={`rounded-xl p-1 ${
              active === 1 ? "bg-[#20212a]" : "bg-[#2d2d2d]"
            }  text-white font-semibold cursor-pointer w-1/2 flex justify-center text-sm`}
            onClick={() => setActive(1)}
          >
            Annually
          </div>
        </div>
        <div className="w-full flex justify-center gap-5 flex-wrap">
          <div className="border border-[#FF00FF] p-2 py-5 flex flex-col gap-7 rounded-lg  justify-start min-w-[10rem] w-1/6 ">
            <span className="text-white text-xl font-semibold">Free</span>
            <div className="font-semibold text-white">
              <span className="text-white text-lg">$0</span>
              <span className="text-[#838383] text-sm">/month</span>
            </div>
            <button className="rounded-md bg-[#fd30ff] text-white text-sm py-1 px-2">
              Curent Plan
            </button>
          </div>
          <div className="border border-[#FF00FF] p-2 py-5 flex flex-col gap-2 rounded-lg  justify-start min-w-[10rem] w-1/6">
            <div className=" flex justify-between gap-1">
              <span className="text-white text-xl font-semibold">Standard</span>
              <div className="flex items-center border border-[#05F3DB] text-xs text-[#05F3DB] p-1 rounded-lg">
                -40%
              </div>
            </div>
            <div className="flex flex-col ">
              <span className="text-[#838383] text-sm">Starting at</span>
              <div className="font-semibold text-white">
                <span className="text-white text-lg">$0</span>
                <span className="text-[#838383] text-sm">
                  /month billed annually
                </span>
              </div>
            </div>
            <div className="rounded-md flex gap-2 justify-between bg-[#fd30ff] text-white text-sm px-2 p-1 items-center cursor-pointer">
              <span className="text-sm ">Upgrade</span>
              <KeyboardArrowDownIcon className="text-white" />
            </div>
          </div>
          <div className="border border-[#FF00FF] p-2 py-5 flex flex-col gap-2 rounded-lg  justify-start min-w-[10rem] w-1/6">
            <div className=" flex justify-between gap-1">
              <span className="text-white text-xl font-semibold">Plus</span>
              <div className="flex items-center border border-[#05F3DB] text-xs text-[#05F3DB] p-1 rounded-lg">
                -35%
              </div>
            </div>
            <div className="flex flex-col ">
              <span className="text-[#838383] text-sm">Starting at</span>
              <div className="font-semibold text-white">
                <span className="text-white text-lg">$359</span>
                <span className="text-[#838383] text-sm">
                  /month billed annually
                </span>
              </div>
            </div>
            <div className="rounded-md flex gap-2 justify-between bg-[#fd30ff] text-white text-sm px-2 p-1 items-center cursor-pointer">
              <span className="text-sm ">Upgrade</span>
              <KeyboardArrowDownIcon className="text-white" />
            </div>
          </div>
          <div className="border border-[#FF00FF] p-2 py-5 flex flex-col gap-8 rounded-lg  justify-start min-w-[10rem] w-1/6">
            <span className="text-white text-xl font-semibold">Enterprise</span>
            <div className="font-semibold ">
              <span className="text-[#838383] text-md">Billed annually</span>
            </div>
            <button className="rounded-md cursor-default  bg-[#3f0140] text-white text-sm p-1 px-2">
              Contact us
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2 p-4 items-start w-full">
          <div className="flex flex-col gap-2 w-full  border-b border-b-[#838383] pb-5">
            <span className="text-[#FF00FF] font-bold text-lg sm:text-2xl">
              Usage
            </span>
            <div className="flex justify-between gap-4 sm:gap-10 w-full items-start flex-col sm:flex-row">
              <span className="text-white text-xs w-1/3 sm:w-1/4">
                Included claimed quests
              </span>
              <div className="flex justify-between  gap-y-2  w-full flex-wrap items-start">
                <div className="flex gap-[0.5rem] items-center w-1/4 sm:w-1/5">
                  <DoneIcon
                    className="text-white"
                    style={{ fontSize: "16px" }}
                  />
                  <span className="text-white text-xs">5,000 per month</span>
                </div>
                <div className="flex gap-[0.5rem] items-center w-1/4 sm:w-1/5">
                  <DoneIcon
                    className="text-[#ff00ff]"
                    style={{ fontSize: "16px" }}
                  />
                  <span className="text-white text-xs">10,000 per month</span>
                </div>
                <div className="flex gap-[0.5rem] items-center w-1/4 sm:w-1/5">
                  <DoneIcon
                    className="text-[#ff00ff]"
                    style={{ fontSize: "16px" }}
                  />
                  <span className="text-white text-xs">50,000 per month</span>
                </div>
                <div className="flex gap-[0.5rem] items-center w-1/4 sm:w-1/5">
                  <DoneIcon
                    className="text-[#ff00ff]"
                    style={{ fontSize: "16px" }}
                  />
                  <span className="text-white text-xs">Unlimited</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full  ">
            <div className="flex justify-between gap-4 sm:gap-10 w-full items-start flex-row border-b border-b-[#838383] pb-5">
              <span className="text-white text-xs w-1/3 sm:w-1/4">
                Extra claimed quests
              </span>
              <div className="flex justify-between  gap-y-2  w-full flex-wrap items-start">
                <div className="flex gap-[0.5rem] items-center  sm:w-1/5"></div>
                <div className="flex gap-[0.5rem] items-center w-1/4 sm:w-1/5">
                  <DoneIcon
                    className="text-[#ff00ff]"
                    style={{ fontSize: "16px" }}
                  />
                  <span className="text-white text-xs">9$ per 1k</span>
                </div>
                <div className="flex gap-[0.5rem] items-center w-1/4 sm:w-1/5">
                  <DoneIcon
                    className="text-[#ff00ff]"
                    style={{ fontSize: "16px" }}
                  />
                  <span className="text-white text-xs">6$ per 1k</span>
                </div>
                <div className="flex gap-[0.5rem] items-center  sm:w-1/5"></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full  border-b border-b-[#838383] pb-5">
            <span className="text-[#FF00FF] font-bold text-lg sm:text-2xl">
              Feature
            </span>
            <div className="flex justify-between gap-4 sm:gap-10 w-full items-start flex-col sm:flex-row">
              <span className="text-white text-xs w-1/3 sm:w-1/4">
                Exports (leaderboard & claims)
              </span>
              <div className="flex justify-between  gap-y-2  w-full flex-wrap items-start">
                <div className="flex gap-[0.5rem] items-center w-1/4 sm:w-1/5">
                  <DoneIcon
                    className="text-white"
                    style={{ fontSize: "16px" }}
                  />
                  <span className="text-white text-xs">Up to 100 members</span>
                </div>
                <div className="flex gap-[0.5rem] items-center w-1/4 sm:w-1/5">
                  <DoneIcon
                    className="text-[#ff00ff]"
                    style={{ fontSize: "16px" }}
                  />
                  <span className="text-white text-xs">
                    Up to 1,000 members
                  </span>
                </div>
                <div className="flex gap-[0.5rem] items-center w-1/4 sm:w-1/5">
                  <DoneIcon
                    className="text-[#ff00ff]"
                    style={{ fontSize: "16px" }}
                  />
                  <span className="text-white text-xs">
                    Up to 10,000 members
                  </span>
                </div>
                <div className="flex gap-[0.5rem] items-center w-1/4 sm:w-1/5">
                  <DoneIcon
                    className="text-[#ff00ff]"
                    style={{ fontSize: "16px" }}
                  />
                  <span className="text-white text-xs">Unlimited</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full  ">
            <div className="flex justify-between gap-4 sm:gap-10 w-full items-start flex-row border-b border-b-[#838383] pb-5">
              <span className="text-white text-xs w-1/3 sm:w-1/4 flex items-center">
                CRM{" "}
                <InfoIcon
                  className="text-white px-1"
                  style={{ fontSize: "20px" }}
                />
              </span>
              <div className="flex justify-between  gap-y-2  w-full flex-wrap items-start">
                <div className="flex gap-[0.5rem] items-center  sm:w-1/5"></div>
                <div className="flex gap-[0.5rem] items-center w-1/4 sm:w-1/5"></div>
                <div className="flex gap-[0.5rem] items-center w-1/4 sm:w-1/5">
                  <DoneIcon
                    className="text-[#ff00ff]"
                    style={{ fontSize: "16px" }}
                  />
                </div>
                <div className="flex gap-[0.5rem] items-center  sm:w-1/5">
                  {" "}
                  <DoneIcon
                    className="text-[#ff00ff]"
                    style={{ fontSize: "16px" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full  ">
            <div className="flex justify-between gap-4 sm:gap-10 w-full items-start flex-row border-b border-b-[#838383] pb-5">
              <span className="text-white text-xs w-1/3 sm:w-1/4 flex items-center">
                Analytics{" "}
                <InfoIcon
                  className="text-white px-1"
                  style={{ fontSize: "20px" }}
                />
              </span>
              <div className="flex justify-between  gap-y-2  w-full flex-wrap items-start">
                <div className="flex gap-[0.5rem] items-center  sm:w-1/5"></div>
                <div className="flex gap-[0.5rem] items-center w-1/4 sm:w-1/5">
                  <DoneIcon
                    className="text-[#ff00ff]"
                    style={{ fontSize: "16px" }}
                  />
                </div>
                <div className="flex gap-[0.5rem] items-center w-1/4 sm:w-1/5">
                  <DoneIcon
                    className="text-[#ff00ff]"
                    style={{ fontSize: "16px" }}
                  />
                </div>
                <div className="flex gap-[0.5rem] items-center  sm:w-1/5">
                  {" "}
                  <DoneIcon
                    className="text-[#ff00ff]"
                    style={{ fontSize: "16px" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full  ">
            <div className="flex justify-between gap-4 sm:gap-10 w-full items-start flex-row border-b border-b-[#838383] pb-5">
              <span className="text-white text-xs w-1/3 sm:w-1/4 flex items-center">
                Promoted on Shagudalabs homepage
              </span>
              <div className="flex justify-between  gap-y-2  w-full flex-wrap items-start">
                <div className="flex gap-[0.5rem] items-center  sm:w-1/5"></div>
                <div className="flex gap-[0.5rem] items-center w-1/4 sm:w-1/5"></div>
                <div className="flex gap-[0.5rem] items-center w-1/4 sm:w-1/5">
                  <DoneIcon
                    className="text-[#ff00ff]"
                    style={{ fontSize: "16px" }}
                  />
                  <span className="text-white text-xs">1 day per month</span>
                </div>
                <div className="flex gap-[0.5rem] items-center  sm:w-1/5">
                  {" "}
                  <DoneIcon
                    className="text-[#ff00ff]"
                    style={{ fontSize: "16px" }}
                  />
                  <span className="text-white text-xs">3 day per month</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
