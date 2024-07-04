import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import loggeduser from "../assets/section2/loggeduser.png";
import avatar from "../assets/section2/avatar.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import discord from "../assets/section2/dis.png";
import { useDispatch, useSelector } from "react-redux";
import { Community_member } from "../slice/Communities";

const LeaderBoard = ({
  setOpenSideBar,
  openSideBar,
  setProfileCard,
  community,
}) => {
  const dispatch = useDispatch();
  const [showProfile, setShowProfile] = useState(false);
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderBoard = async () => {
      try {
        dispatch(Community_member(community)).unwrap().then((data)=>{
          if (data.success) setMember(data?.data?.members);
        })
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderBoard();
  }, [dispatch, community]);

  return (
    <div>
      {showProfile ? (
        <div className="bg-[#191a1e] relative flex justify-start">
          <div
            className="absolute top-10 left-6 flex lg:hidden z-50"
            onClick={() => setOpenSideBar(!openSideBar)}
          >
            {!openSideBar ? (
              <MenuIcon className="text-white" />
            ) : (
              <CloseIcon className="text-white" />
            )}
          </div>
          <div className="flex flex-col gap-6 p-4 py-8 bg-[#20212a] h-full w-full sm:w-2/3">
            <div className="flex gap-6 justify-start items-center ps-12 lg:ps-0">
              <img src={avatar} alt="Avatar" className="w-fit h-fit" />
              <div className="flex flex-col gap-3 font-semibold">
                <span className="text-white text-md">Azure2000</span>
                <div className="flex gap-x-5 gap-3 lg:gap-x-10 text-[#838383] text-xs">
                  <span>Level 1</span>
                  <span>#42976</span>
                  <span>0 active invites</span>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="rounded-2xl p-2 py-1 cursor-pointer flex items-center gap-2 bg-[#2D2D2D]">
                <TwitterIcon className="text-[#838383]" />
                <span className="text-[#838383] text-sm">Twitter</span>
              </div>
              <div className="rounded-2xl p-2 py-1 cursor-pointer flex items-center gap-2 bg-[#2D2D2D]">
                <img src={discord} alt="Discord" className="text-[#838383]" />
                <span className="text-[#838383] text-sm">Discord</span>
              </div>
            </div>
            <div className="flex justify-between">
              <span className="text-[#838383] text-md font-semibold">
                10/100 XP for level 2
              </span>
              <span className="text-[#838383] text-md font-semibold">10</span>
            </div>
            <progress
              value="20"
              max="100"
              className="progress-bar w-full rounded-md text-[#01A292] bg-[#ff00ff]"
            ></progress>
            <div className="flex flex-col gap-2">
              <span className="text-white text-lg py-4">Activity</span>
              {Array(8).fill().map((_, idx) => (
                <div className="flex justify-between gap-5" key={idx}>
                  <div className="flex flex-col gap-1 font-semibold">
                    <span className="text-[#838383] text-sm">
                      Follow: @pedrito-56
                    </span>
                    <span className="text-[#838383] text-xs">
                      Quest complete: 4 minutes ago
                    </span>
                  </div>
                  <div className="text-lg font-semibold text-[#05F3DB]">5XP</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-[#20212a] relative w-full">
          <div
            className="absolute top-10 left-6 flex lg:hidden z-50"
            onClick={() => setOpenSideBar(!openSideBar)}
          >
            {!openSideBar ? (
              <MenuIcon className="text-white" />
            ) : (
              <CloseIcon className="text-white" />
            )}
          </div>
          <div className="flex flex-col justify-start gap-5 px-16 lg:px-4 p-4 bg-gradient-to-r from-[#3F0140] to-[#A303A6] -mb-16 pb-20">
            <span className="text-[#838383] text-md">Leader board</span>
            <span className="text-[#ee06f2] font-bold text-xl sm:text-2xl">
              All time
            </span>
            <span className="px-2 py-1 border-[#05F3DB] border rounded-2xl flex gap-3 w-fit text-[#05F3DB]">
              <PersonIcon className="text-[#05F3DB]" />
              <span className="font-semibold text-[#05F3DB]">
                15 participants
              </span>
            </span>
          </div>
          <div className="rounded-t-3xl bg-[#20212a]">
            <div className="overflow-x-auto max-h-screen flex flex-col gap-6 py-6">
              {loading ? (
                <div className="text-white text-center">Loading...</div>
              ) : (
                member &&
                member?.map((ele, index) => (
                  <div
                    className="flex justify-between px-10"
                    onClick={() => {
                      setShowProfile(true);
                      setProfileCard(true);
                    }}
                    key={index}
                  >
                    <div className="flex gap-4">
                      <img src={loggeduser} alt="User" className="rounded-full w-fit" />
                      <span className="text-white font-semibold cursor-pointer">
                        {ele.user.name}
                      </span>
                    </div>
                    <span className="text-white font-semibold">250 XP</span>
                  </div>
                  
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeaderBoard;
