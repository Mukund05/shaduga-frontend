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
import { useNavigate } from "react-router-dom";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useDispatch, useSelector } from "react-redux";
import { community } from "../slice/Communities";
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
import { fetchModulebyId } from "../slice/ModuleSlice";

const DashboardQuest = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isScreenLessThanLG = useMediaQuery("(max-width: 1023px)");
  const [profileCard, setProfileCard] = useState(false);
  const { communityData, success, message } = useSelector(
    (state) => state.community
  );
  const user = useSelector((state) => state?.user?.userData?.data);
  const module = useSelector((state) => state?.module?.modules);

  const [showQuest, setShowQuest] = useState(false);
  const [openSideBar, setOpenSideBar] = useState(!isScreenLessThanLG);
  const [avatar, setAvatar] = useState(null);
  const [sidebarIndex, setSideBarIndex] = useState(0);
  const [Leaderboard, setLeaderboard] = useState(false);
  const [mainQuest, setMainQuest] = useState(true);
  const [openInbox, setOpenInbox] = useState(false);
  const [Username, setUsername] = useState("Pandacom");
  const [loading, setLoading] = useState(false);
  const [admin, setAdmin] = useState(false);

  const handleLeaderBoard = () => {
    setLeaderboard(true);
    setMainQuest(false);
    setShowQuest(false);
    setOpenInbox(false);
  };
  const handleInbox = () => {
    setOpenInbox(true);
    setLeaderboard(false);
    setMainQuest(false);
    setShowQuest(false);
  };
  const handleQuest = () => {
    setLeaderboard(false);
    setMainQuest(true);
    setOpenInbox(false);
  };

  const handleSideBar = (id) => {
    setSideBarIndex(id);
    if (isScreenLessThanLG) {
      setOpenSideBar(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    dispatch(currentUser())
      .unwrap()
      .then((result) => {
        if (result.success) {
          dispatch(community(result.data.id))
            .unwrap()
            .then((result) => {
              console.log("Community data:", result);
              if (result.success) {
                setAvatar(result.data.avatar);
              }
            })
            .catch((error) => {
              console.error("Error fetching community data:", error);
            })
            .finally(() => {
              setLoading(false);
            });
        }
      })
      .catch((error) => {
        console.error("Error fetching current user:", error);
        setLoading(false);
      });
  }, [dispatch]);

  const handleCommunityClick = (communityId, isAdmin) => {
    if (isAdmin) {
      setAdmin(true);
      dispatch(fetchModulebyId(communityId)).unwrap().then((result) => {
       
      }).catch((error) => {
        console.error("Error fetching module data:", error);
      });
    } else {
      setAdmin(false);
    }
  };

  const DashboardItem = ({ title, locked, review, active }) => {
    return (
      <div
        className="cursor-pointer border flex justify-between items-center border-[#4D5959] h-fit w-[250px] rounded-xl p-3 relative hover:border-[#BC04BE]"
        onClick={() => setShowQuest(true)}
      >
        {locked && (
          <div className="flex gap-1 border rounded-xl p-1 border-[#F05F2B] text-[#838383] text-xs absolute -bottom-4 right-1/3 bg-[#35272a]">
            <LockIcon className="" style={{ fontSize: "1rem" }} />
            <span className="font-semibold px-1">Locked</span>
          </div>
        )}
        {review && (
          <div className="flex gap-1 border rounded-xl p-1 border-[#05F3DB] text-[#05F3DB] text-xs absolute -bottom-4 right-1/3 bg-transparent items-center">
            <RemoveRedEyeIcon className="" style={{ fontSize: "1rem" }} />
            <span className="font-semibold px-1">In review</span>
          </div>
        )}
        <div className="flex justify-between gap-3 w-full">
          <div className=" flex flex-col gap-2">
            <div className="text-white w-3/4">{title}</div>
            <div className="rounded-full p-1 bg-[#838383] w-fit">
              <XIcon />
            </div>
          </div>
          <div
            className={`flex flex-col justify-between items-center ${
              active
                ? "bg-gradient-to-b from-pink-600 to-teal-400"
                : "bg-[#838383]"
            } rounded-xl relative h-fit w-fit`}
          >
            <LanguageIcon className="text-[#1976d2] absolute -top-2 -left-2" />
            <div className="text-xl font-bold text-white pt-4 px-5">XP</div>
            <div className="font-semibold items-end text-xs bg-[#05F3DB] rounded-t-md px-2 text-[#4D5959]">
              10
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Sidebar = () => {
    return (
      <div className="w-fit items-center px-3 flex flex-col gap-5 h-full bg-[#20212A] py-20 lg:py-10 overflow-y-auto">
        <div className="cursor-pointer border-[#0db1a3] border-4 p-2 flex items-center justify-center rounded-xl w-fit bg-[#03A494]">
          <SearchIcon className="text-white" />
        </div>
        {loading ? (
          <ClipLoader color={"#FFFFFF"} loading={loading} size={50} />
        ) : (
          <div className="grid gap-3">
            {communityData?.data?.length > 0 ? (
              communityData.data.map((item, index) => (
                <div
                  key={index}
                  className="cursor-pointer border-[#FF00FF] border-1 p-1 rounded-full w-[50px]"
                  onClick={() =>
                    handleCommunityClick(item.id, item.user_id === user.id)
                    
                  }
                >
                  <img
                    src={`${import.meta.env.VITE_BASE_URL}${item.logo}`}
                    className="w-[40px] h-[40px] object-cover rounded-full"
                    alt="Community Avatar"
                  />
                </div>
              ))
            ) : (
              <div className="cursor-pointer border-[#FF00FF] border-4 p-2 flex items-center justify-center rounded-xl w-fit bg-[#7827a4]">
                <img src={panda} className="text-white" alt="Default Avatar" />
              </div>
            )}
          </div>
        )}
        <div className="cursor-pointer border-[#0db1a3] border-4 p-2 flex items-center justify-center rounded-xl w-fit bg-[#03A494]">
          <AddIcon className="text-white" />
        </div>
        <div className="cursor-pointer border-[#0db1a3] border-4 p-2 flex items-center justify-center rounded-xl w-fit bg-[#03A494]">
          <LanguageIcon className="text-white" />
        </div>
      </div>
    );
  };

  const AdminDashBoard = () => {
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
          <Sidebar />

          {/* sidebar */}
          <div
            className={` md:flex flex-col gap-4 items-start bg-[#20212A] w-full overflow-x-auto max-h-screen `}
          >
            <div className="flex flex-col gap-10 justify-between  w-full h-full pt-6">
              <div className="flex gap-1 flex-col w-full">
                <div className="flex gap-4 justify-center md:justify-start md:my-0 mt-8  px-4  items-center flex-col md:flex-row w-full pb-3">
                  <img src={panda} className="w-fit h-fit" />

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
                    <span className="text-[#dde2ff] text-md ">
                      Leader board
                    </span>
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
              <Inbox
                setOpenSideBar={setShowSidebar}
                openSideBar={showSideBar}
              />
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

  return (
    <>
      {admin ? (
        <AdminDashBoard />
      ) : (
        <div className="flex justify-end  h-full bg-[#191a1e] ">
          <MetaData title={"Dashboard"} />
          <div
            className={`${
              openSideBar ? "flex" : "hidden"
            } gap-[0.10rem] justify-center fixed left-0 top-0 h-full z-30 w-4/5 sm:w-1/2 lg:w-[30%] bg-[#191a1e] `}
          >
            <Sidebar />
            {/* sidebar */}
            <div
              className={` md:flex flex-col gap-4 items-start  w-full overflow-x-auto max-h-screen `}
            >
              <div className="flex flex-col gap-10 justify-between bg-[#20212A] w-full h-full pt-6">
                <div className="flex gap-2  flex-col w-full">
                  <div className="flex gap-4 justify-center md:justify-start md:my-0 mt-8  px-4  items-center flex-col md:flex-row w-full ">
                    {avatar ? (
                      <img
                        src={avatar}
                        className="w-[40px] h-[40px] object-cover rounded-full"
                      />
                    ) : (
                      <img src={panda} className="w-fit h-fit" />
                    )}
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
                    } cursor-pointer`}
                    onClick={() => handleSideBar(1)}
                  >
                    <div
                      className="px-8 py-3 gap-4 flex justify-start"
                      onClick={handleInbox}
                    >
                      <ChatIcon className="text-[#9FA2B4] " />
                      <span className="text-[#dde2ff] text-md ">Inbox</span>
                    </div>
                  </div>{" "}
                  <div
                    className={` ${
                      sidebarIndex === 2
                        ? " border-l-4  border-l-[#DDE2FF] bg-[#2a2b35] "
                        : "border-l-4 border-l-transparent"
                    } cursor-pointer`}
                    onClick={() => handleSideBar(2)}
                  >
                    <div
                      className="px-8 py-3 gap-4 flex justify-start"
                      onClick={handleLeaderBoard}
                    >
                      <WorkspacePremiumIcon className="text-[#9FA2B4] " />
                      <span className="text-[#dde2ff] text-md ">
                        Leaderboard
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  {profileCard && (
                    <div className="px-4">
                      <ProfileCard />
                    </div>
                  )}

                  <div className="px-4">
                    <DashBoardCard username={Username} profile={user} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {mainQuest && (
            <div
              className={`  ${
                showQuest ? "sm:w-1/2 lg:w-[30%]" : " lg:w-[70%]"
              }  bg-[#191a1e] flex flex-col  md:py-0 lg:pl-1 relative lg:ml-[25%] overflow-x-auto max-h-screen`}
            >
              <div
                className="w-full absolute top-10 left-6 flex lg:hidden z-50 cursor-pointer"
                onClick={() => setOpenSideBar(!openSideBar)}
              >
                {!openSideBar ? (
                  <MenuIcon className="text-white " />
                ) : (
                  <CloseIcon className="text-white " />
                )}
              </div>
              <div
                className={` ${
                  showQuest ? "hidden" : " flex"
                } gap-4 justify-start items-center px-20 lg:px-10 py-6`}
              >
                <span
                  className={`p-2 ${
                    showQuest ? "md:p-1 md:px-2" : "md:p-3 md:px-4"
                  }  rounded-lg text-[#838383] border-2 border-[#23242c] cursor-pointer`}
                >
                  Welcome Abroad
                </span>
                <span
                  className={`p-2 ${
                    showQuest ? "md:p-1 md:px-2" : "md:p-3 md:px-4"
                  }  rounded-lg text-[#838383] border-2 border-[#23242c] cursor-pointer`}
                >
                  Daily tasks
                </span>
              </div>
              <div className="flex  flex-col bg-[#20212a] ">
                <div className="  bg-gradient-to-r from-[#05F3DB] to-[#EC228D] flex flex-col gap-2 p-4 rounded-3xl ">
                  {showQuest && (
                    <div
                      className="top-3 left-3 cursor-pointer pl-2"
                      onClick={() => setShowQuest(false)}
                    >
                      <ArrowBackIcon className="text-white " />
                    </div>
                  )}

                  <span className="text-[#EE06F2] text-lg sm:text-xl font-bold pt-6">
                    Welcome aboard
                  </span>
                  <span className="text-[#4D5959] text-sm font-semibold">
                    0/7
                  </span>
                  <span className="border-4 border-[#05F3DB] w-[50%] rounded-full mb-12 shadow-2xl"></span>
                </div>
                <div className="flex flex-wrap justify-center gap-6 gap-y-8 p-12 px-2 items-center -mt-10 bg-[#20212a] rounded-3xl">
                  <DashboardItem
                    title={"Untitled quest"}
                    locked={false}
                    review={false}
                    active={true}
                  />
                  <DashboardItem
                    title={"Untitled quest"}
                    locked={false}
                    review={false}
                    active={true}
                  />
                  <DashboardItem
                    title={"Untitled quest"}
                    locked={false}
                    review={true}
                    active={true}
                  />
                  <DashboardItem
                    title={"Untitled quest"}
                    locked={true}
                    review={false}
                    active={false}
                  />
                  <DashboardItem
                    title={"Untitled quest"}
                    locked={true}
                    review={false}
                    active={false}
                  />
                  <DashboardItem
                    title={"Untitled quest"}
                    locked={true}
                    review={false}
                    active={false}
                  />
                </div>
                <div className="bg-gradient-to-l from-purple-900 to-pink-800 flex flex-col gap-2 p-4 rounded-3xl ">
                  <span className="text-[#EE06F2] text-lg sm:text-xl font-bold">
                    Daily tasks
                  </span>
                  <span className="text-[#4D5959] text-sm font-semibold">
                    0/4
                  </span>
                  <span className="border-4 border-[#E6228C] w-[50%] rounded-full mb-12 shadow-2xl"></span>
                </div>
                <div className="flex flex-wrap justify-center gap-4 p-40 px-4 items-center -mt-10 bg-[#20212a] rounded-3xl "></div>
              </div>
            </div>
          )}
          {Leaderboard && (
            <div
              className={`  w-full
        lg:w-[70%]
       bg-[#191a1e] flex flex-col  md:py-0 lg:pl-1 relative lg:ml-[25%] overflow-x-auto max-h-screen`}
            >
              {" "}
              <LeaderBoard
                setOpenSideBar={setOpenSideBar}
                openSideBar={openSideBar}
                setProfileCard={setProfileCard}
              />
            </div>
          )}
          {openInbox && (
            <div
              className={`  w-full
       lg:w-[70%]
      bg-[#191a1e] flex flex-col  md:py-0 lg:pl-1 relative lg:ml-[25%] overflow-x-auto max-h-screen`}
            >
              {" "}
              <Inbox
                setOpenSideBar={setOpenSideBar}
                openSideBar={openSideBar}
              />
            </div>
          )}
          {showQuest && <QuestComponent setShowQuest={setShowQuest} />}
        </div>
      )}
    </>
  );
};

export default DashboardQuest;
