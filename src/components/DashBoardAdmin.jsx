import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
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
import LockIcon from "@mui/icons-material/Lock";
import QuestComponent from "../elements/QuestComponent";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LeaderBoard from "../elements/LeaderBoard";
import ChatIcon from "@mui/icons-material/Chat";
import DashBoardCard from "../elements/Card/DashBoardCard";
import Inbox from "../elements/Inbox";
import ProfileCard from "../elements/Card/ProfileCard";
import { useNavigate, useParams } from "react-router-dom";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useDispatch, useSelector } from "react-redux";
import { currentCommunity } from "../slice/Communities";
import { currentUser } from "../slice/Userslice";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import RateReviewIcon from "@mui/icons-material/RateReview";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";

import AllQuest from "../elements/AllQuest";
import UpgradeCard from "../elements/Card/UpgradeCard";
import UserCard from "../elements/Card/UserCard";
import NewQuest from "../elements/NewQuest";
import Reviews from "../elements/Reviews";
import GetStarted from "../elements/Card/GetStarted";
import NewModule from "../elements/NewModule";
import Sidebar from "../elements/Sidebar";

const DashBoardAdmin = () => {
  const isScreenLessThanLG = useMediaQuery("(max-width: 1023px)");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  // Set the initial state value based on the screen width
  const [openSideBar, setOpenSideBar] = useState(!isScreenLessThanLG);
  const [sidebarIndex, setSideBarIndex] = useState(0);

//   const [Username, setUsername] = useState("Pick Dive");

  const handleSideBar = (val) => {
    if (isScreenLessThanLG) {
      setShowSidebar(!showSideBar);
    }
    setSideBarIndex(val);
  };

  const [dashboardData, setDashboardData] = useState(0);
  const [showSideBar, setShowSidebar] = useState(!isScreenLessThanLG);
  const [cardNo, setCardNo] = useState(0);
  const [selectedComm, setSelectedComm] = useState(id);
  const [data,setData] = useState(undefined);
  const [moduleId,setModuleId] = useState(-1);
  const [module,setModule] = useState(null);
  const [quest,setQuest] = useState(null);

  useEffect(()=>{
    dispatch(currentCommunity(id)).unwrap().then((data)=>{
        setData(data?.data);
    })
  },[selectedComm,moduleId])

  const handleNewQuest = () => {
    // setModuleId(id);
    setDashboardData(4);
  };

  //it will handle both new and update module 
  const handleNewModule = () => {
    setDashboardData(7);
  };

  const handleQuest = () => {
    setDashboardData(0);
  };
  
  const handleCommunityClick = (communityId, isAdmin,cardName) => {
    setDashboardData(0);
    setSelectedComm(communityId);
    if (isAdmin) {
      navigate(`/cw/${cardName}/${communityId}/admin`);
    } else {
      navigate(`/cw/${cardName}/${communityId}`);
    }
  };

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
        <Sidebar
          selectedCommunityId={selectedComm}
          handleCommunityClick={handleCommunityClick}
        />

        <div
          className={` md:flex flex-col gap-4 items-start bg-[#20212A] w-full overflow-x-auto max-h-screen `}
        >
          <div className="flex flex-col gap-10 justify-between  w-full h-full pt-6">
            <div className="flex gap-1 flex-col w-full">
              <div className="flex gap-4 justify-center md:justify-start md:my-0 mt-8  px-4  items-center flex-col md:flex-row w-full pb-3">
                <img src={data?.logo ? `${import.meta.env.VITE_BASE_URL}${data?.logo}` : '/dummy.jpg'} className="w-12 h-12 rounded-lg" />

                <span className="text-white flexr">{data?.name}</span>
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
            handleNewModule={handleNewModule}
            setCardNo={setCardNo}
            communityId={selectedComm}
            setModule={setModule}
            setQuest={setQuest}
          />
        )}
        {dashboardData === 3 && (
          <Reviews
            setOpenSideBar={setShowSidebar}
            openSideBar={showSideBar}
            setCardNo={setCardNo}
          />
        )}
        {dashboardData === 4 && (
          <NewQuest
            setCardNo={setCardNo}
            setDashboardData={setDashboardData}
            setModule={setModuleId}
            quest={quest}
            setQuest={setQuest}
          />
        )}
        {dashboardData === 7 && (
          <NewModule
            userId={user?.id}
            communityId={selectedComm}
            setDashboardData={setDashboardData}
            module={module}
            setModule={setModule}
          />
        )}
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

export default DashBoardAdmin;
