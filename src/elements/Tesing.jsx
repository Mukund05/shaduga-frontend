import React, { useEffect, useState } from "react";
import AllQuest from "./AllQuest";
import UpgradeCard from "./Card/UpgradeCard";
import UserCard from "./Card/UserCard";
import NewQuest from "./NewQuest";
import Reviews from "./Reviews";
import panda from "../assets/section2/panda.png";
import menuitem1 from "../assets/section2/menuitem1.png";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import LanguageIcon from "@mui/icons-material/Language";
import MetaData from "../layouts/MetaData";
import Groups3Icon from "@mui/icons-material/Groups3";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import XIcon from "@mui/icons-material/X";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import user from "../assets/section2/avatar.png";
import { useMediaQuery } from "@react-hook/media-query";
import Inbox from "../elements/Inbox";
import { useNavigate } from "react-router-dom";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import RateReviewIcon from "@mui/icons-material/RateReview";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import LeaderBoard from "./LeaderBoard";
import GetStarted from "./Card/GetStarted";

const Tesing = () => {
  const navigate = useNavigate();
  const isScreenLessThanLG = useMediaQuery("(max-width: 1023px)");

  // Set the initial state value based on the screen width
  const [openSideBar, setOpenSideBar] = useState(!isScreenLessThanLG);
  const [sidebarIndex, setSideBarIndex] = useState(0);

  const [Username, setUsername] = useState("Pick Dive");

  const handleSideBar = (id) => {
    if (isScreenLessThanLG) {
      setShowSidebar(!showSideBar);
    }
    setSideBarIndex(id);
  };

  const [showSideBar, setShowSidebar] = useState(!isScreenLessThanLG);
  const [cardNo, setCardNo] = useState(0);

  const handleNewQuest = () => {
    setDashboardData(4);
  };
  const handleQuest = () => {
    setDashboardData(0);
  };

  const [dashboardData, setDashboardData] = useState(0);
  return (
    <div className="relative flex justify-end">
      <MetaData title={"Admin Dashboard"} />
      <div
        className={`${
          showSideBar ? "flex" : "hidden"
        } gap-[0.10rem] justify-center fixed left-0 top-0 h-full z-30 w-4/5 sm:w-1/2 lg:w-1/4 bg-[#191a1e] `}
      >
        {dashboardData != 6 && dashboardData != 5 && dashboardData != 3 && (
          <div
            className="w-full absolute top-5 left-6 flex lg:hidden z-50 cursor-pointer"
            onClick={() => setShowSidebar(!showSideBar)}
          >
            {!showSideBar ? (
              <MenuIcon className="text-white " />
            ) : (
              <CloseIcon className="text-white " />
            )}
          </div>
        )}
        {/* <div className="flex flex-col gap-2"> */}
        {/* <UpgradeCard /> */}
        {/* <GetStarted /> */}
        {/* <UserCard username={"Azure2000"} profile={avatar} /> */}
        {/* </div> */}
        <div className="w-fit items-center px-2 flex flex-col gap-5 h-full bg-[#20212A] py-20 lg:py-10">
          <div className="cursor-pointer border-[#0db1a3] border-4 p-2 flex items-center justify-center rounded-xl w-fit bg-[#03A494]">
            <SearchIcon className=" text-white " />
          </div>
          <div
            className="cursor-pointer border-[#FF00FF] border-2  flex items-center justify-center rounded-xl w-full "
            onClick={() => navigate("/dashboard/admin")}
          >
            <img src={menuitem1} className=" text-white w-full p-1" />
          </div>

          <div
            className="cursor-pointer  p-2 flex items-center justify-center rounded-xl w-fit bg-[#7827a4]"
            onClick={() => navigate("/dashboard-quest/menu")}
          >
            <img src='/dummy.jpg' className=" text-white " />
          </div>
          <div className="cursor-pointer border-[#0db1a3] border-4 p-2 flex items-center justify-center rounded-xl w-fit bg-[#03A494]">
            <AddIcon className=" text-white " />
          </div>
          <div className="cursor-pointer border-[#0db1a3] border-4 p-2 flex items-center justify-center rounded-xl w-fit bg-[#03A494]">
            <LanguageIcon className=" text-white " />
          </div>
        </div>
        {/* sidebar */}
        <div
          className={` md:flex flex-col gap-4 items-start bg-[#20212A] w-full overflow-x-auto max-h-screen `}
        >
          <div className="flex flex-col gap-10 justify-between  w-full h-full pt-6">
            <div className="flex gap-1 flex-col w-full">
              <div className="flex gap-4 justify-center md:justify-start md:my-0 mt-8  px-4  items-center flex-col md:flex-row w-full pb-3">
                <img src='/dummy.jpg' className="w-fit h-fit" />

                <span className="text-white flexr">{Username}</span>
              </div>
              <div
                className={` ${
                  sidebarIndex === 0
                    ? " border-l-4  border-l-[#DDE2FF] bg-[#2a2b35] "
                    : "border-l-4 border-l-transparent"
                } cursor-pointer `}
                onClick={() => handleSideBar(0)}
              >
                <div
                  className="px-8 py-3 gap-4 flex justify-start"
                  onClick={handleQuest}
                >
                  <Groups3Icon className="text-[#9FA2B4] " />
                  <span className="text-[#dde2ff] text-md ">Quests</span>
                </div>
              </div>{" "}
              <div
                className={` ${
                  sidebarIndex === 1
                    ? " border-l-4  border-l-[#DDE2FF] bg-[#2a2b35] "
                    : "border-l-4 border-l-transparent"
                } cursor-pointer `}
                onClick={() => handleSideBar(1)}
              >
                <div
                  className="px-8 py-3 gap-4 flex justify-start"
                  onClick={() => setDashboardData(5)}
                >
                  <MapsUgcIcon className="text-[#9FA2B4] " />
                  <span className="text-[#dde2ff] text-md ">Inbox</span>
                </div>
              </div>{" "}
              <div
                className={` ${
                  sidebarIndex === 2
                    ? " border-l-4  border-l-[#DDE2FF] bg-[#2a2b35] "
                    : "border-l-4 border-l-transparent"
                } cursor-pointer `}
                onClick={() => handleSideBar(2)}
              >
                <div
                  className="px-8 py-3 gap-4 flex justify-start"
                  onClick={() => setDashboardData(6)}
                >
                  <WorkspacePremiumIcon className="text-[#9FA2B4] " />
                  <span className="text-[#dde2ff] text-md ">Leader board</span>
                </div>
              </div>{" "}
              <div
                className={` ${
                  sidebarIndex === 3
                    ? " border-l-4  border-l-[#DDE2FF] bg-[#2a2b35] "
                    : "border-l-4 border-l-transparent"
                } cursor-pointer `}
                onClick={() => handleSideBar(3)}
              >
                <div
                  className="px-8 py-3 gap-4 flex justify-start"
                  onClick={() => setDashboardData(3)}
                >
                  <RateReviewIcon className="text-[#9FA2B4] " />
                  <span className="text-[#dde2ff] text-md ">Reviews</span>
                </div>
              </div>{" "}
              <div
                className={` ${
                  sidebarIndex === 4
                    ? " border-l-4  border-l-[#DDE2FF] bg-[#2a2b35] "
                    : "border-l-4 border-l-transparent"
                } cursor-pointer `}
                onClick={() => handleSideBar(4)}
              >
                <div className="px-8 py-3 gap-4 flex justify-start">
                  <PeopleOutlineIcon className="text-[#9FA2B4] " />
                  <span className="text-[#dde2ff] text-md ">Members</span>
                </div>
              </div>{" "}
            </div>
            <div className="flex flex-col gap-2 px-3 p-2">
              {cardNo === 0 && <UpgradeCard />}
              {cardNo === 1 && <GetStarted />}

              <UserCard username={"Azure2000"} profile={user} />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#191a1e] w-full lg:w-3/4 relative">
        {dashboardData === 0 && (
          <AllQuest
            setShowSidebar={setShowSidebar}
            showSideBar={showSideBar}
            handleNewQuest={handleNewQuest}
            setCardNo={setCardNo}
          />
        )}
        {dashboardData === 3 && (
          <Reviews
            setOpenSideBar={setShowSidebar}
            openSideBar={showSideBar}
            setCardNo={setCardNo}
          />
        )}
        {dashboardData === 4 && <NewQuest setCardNo={setCardNo} />}
        {dashboardData === 5 && (
          <div className="relative">
            <Inbox setOpenSideBar={setShowSidebar} openSideBar={showSideBar} />
          </div>
        )}
        {dashboardData === 6 && (
          <LeaderBoard
            setOpenSideBar={setShowSidebar}
            openSideBar={showSideBar}
          />
        )}
      </div>
    </div>
  );
};

export default Tesing;
