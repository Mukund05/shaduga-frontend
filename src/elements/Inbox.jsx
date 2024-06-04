import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";
import SearchIcon from "@mui/icons-material/Search";
import one from "../assets/section2/one.png";
import two from "../assets/section2/two.png";
import three from "../assets/section2/three.png";
import five from "../assets/section2/five.png";
import six from "../assets/section2/six.png";
import ChatBox from "./ChatBox";

const Inbox = ({ openSideBar, setOpenSideBar }) => {
  const [profile, setProfile] = useState(one);
  const [username, setUsername] = useState("Sophia Chen");

  const handleClick = (img, name) => {
    setProfile(img);
    setUsername(name);
  };
  return (
    <div className="bg-[#20212a] relative w-full ">
      <div
        className=" absolute top-6 left-6 flex lg:hidden z-50"
        onClick={() => setOpenSideBar(!openSideBar)}
      >
        {!openSideBar ? (
          <MenuIcon className="text-white " />
        ) : (
          <CloseIcon className="text-white " />
        )}
      </div>
      <div className="p-8 bg-[#191a1e]"></div>
      <div className="flex gap-6 w-full rounded-t-3xl bg-gradient-to-r from-[#05F3DB] to-[#EC228D] pt-8 flex-col">
        <span className="text-black font-bold text-2xl px-6 ">Inbox</span>
        <div className="flex justify-center  gap-[2px] ">
          <div className="w-2/6 sm:w-2/5 bg-[#20212a] rounded-t-3xl ">
            <div className="flex gap-4 flex-col px-5 py-8 overflow-x-auto max-h-screen ">
              <div className="hidden sm:flex  justify-between gap-4 items-center">
                <div className="flex  justify-start gap-3 p-3 bg-transparent border rounded-lg border-[#ABAFB1] cursor-pointer w-full my-4 items-center ">
                  <SearchIcon className=" text-[#ABAFB1]" />
                  <input
                    className="bg-transparent text-[#ABAFB1] w-full"
                    placeholder="Search messages, people"
                  />
                </div>
                <div className="p-3 rounded-lg cursor-pointer bg-[#05F3DB] h-fit items-center flex">
                  <AddIcon className="h-fit" />
                </div>
              </div>
              <div className="flex justify-start gap-3 px-1 items-center flex-wrap">
                <SpeakerNotesIcon className="text-[#bcbcbc]" />
                <span className="text-[#bcbcbc] text-xs ">ALL MESSAGES</span>
              </div>
              <div className="flex flex-col ">
                <div
                  className="flex justify-between p-2 py-3 gap-4 w-full border-t border-t-[#05F3DB] cursor-pointer opacity-80"
                  onClick={() => handleClick(one, "Sophia Chen")}
                >
                  <img src={one} className="w-fit h-fit" />
                  <div className="hidden sm:flex flex-col justify-center gap-1 w-full">
                    <div className="flex  justify-between items-center w-full">
                      <span className="font-bold text-md text-[#dadada]">
                        Sophia Chen
                      </span>
                      <span className=" text-sm text-[#a0a0a0] text-nowrap">
                        07:23 PM
                      </span>
                    </div>

                    <span className=" text-sm text-[#a0a0a0] items-center">
                      Remember that concert last y...
                    </span>
                  </div>
                </div>
                <div
                  className="flex justify-between p-2 py-3 gap-4 w-full border-t border-t-[#05F3DB] cursor-pointer opacity-100"
                  onClick={() => handleClick(two, "Benjamin Knight")}
                >
                  <img src={two} className="w-fit h-fit" />
                  <div className="hidden sm:flex flex-col justify-center gap-1 w-full">
                    <div className="flex  justify-between items-center w-full">
                      <span className="font-bold text-md text-[#ffffff]">
                        Benjamin Knight
                      </span>
                      <span className=" text-sm text-[#a0a0a0] text-nowrap">
                        08:20 PM
                      </span>
                    </div>

                    <div className="w-full flex justify-between gap-2 items-center">
                      <span className=" text-sm text-[#a0a0a0] items-center">
                        Just got back from a hiking trip!
                      </span>
                      <span className="rounded-full px-2 p-1 font-semibold bg-[#ec228d] h-fit text-white text-xs">
                        1
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="flex justify-between p-2 py-3 gap-4 w-full border-t border-t-[#05F3DB] cursor-pointer opacity-80"
                  onClick={() => handleClick(three, "Olivia Foster")}
                >
                  <img src={three} className="w-fit h-fit" />
                  <div className="hidden sm:flex flex-col justify-center gap-1 w-full">
                    <div className="flex  justify-between items-center w-full">
                      <span className="font-bold text-md text-[#dadada]">
                        Olivia Foster
                      </span>
                      <span className=" text-sm text-[#a0a0a0] text-nowrap">
                        17:30 PM
                      </span>
                    </div>

                    <span className=" text-sm text-[#a0a0a0] items-center">
                      Excited for the upcoming vac...
                    </span>
                  </div>
                </div>
                <div
                  className="flex justify-between p-2 py-3 gap-4 w-full border-t border-t-[#05F3DB] cursor-pointer opacity-80"
                  onClick={() => handleClick(one, "Jackson Adams")}
                >
                  <img src={one} className="w-fit h-fit" />
                  <div className="hidden sm:flex flex-col justify-center gap-1 w-full">
                    <div className="flex  justify-between items-center w-full">
                      <span className="font-bold text-md text-[#dadada]">
                        Jackson Adams
                      </span>
                      <span className=" text-sm text-[#a0a0a0] text-nowrap">
                        03:10 PM
                      </span>
                    </div>

                    <span className=" text-sm text-[#a0a0a0] items-center">
                      Looking for the weekend...
                    </span>
                  </div>
                </div>
                <div
                  className="flex justify-between p-2 py-3 gap-4 w-full border-t border-t-[#05F3DB] cursor-pointer opacity-80"
                  onClick={() => handleClick(five, "Ethan Sullivan")}
                >
                  <img src={five} className="w-fit h-fit" />
                  <div className="hidden sm:flex flex-col justify-center gap-1 w-full">
                    <div className="flex  justify-between items-center w-full">
                      <span className="font-bold text-md text-[#dadada]">
                        Ethan Sullivan
                      </span>
                      <span className=" text-sm text-[#a0a0a0] text-nowrap">
                        22:10 PM
                      </span>
                    </div>

                    <span className=" text-sm text-[#a0a0a0] items-center">
                      Finished reading a captivating no...
                    </span>
                  </div>
                </div>
                <div
                  className="flex justify-between p-2 py-3 gap-4 w-full border-t border-t-[#05F3DB] cursor-pointer opacity-80"
                  onClick={() => handleClick(six, "Sophia Chen")}
                >
                  <img src={six} className="w-fit h-fit" />
                  <div className="hidden sm:flex flex-col justify-center gap-1 w-full">
                    <div className="flex  justify-between items-center w-full">
                      <span className="font-bold text-md text-[#dadada]">
                        Sophia Chen
                      </span>
                      <span className=" text-sm text-[#a0a0a0] text-nowrap">
                        01:55 PM
                      </span>
                    </div>

                    <span className=" text-sm text-[#a0a0a0] items-center">
                      Remember that concert last y...
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-3/5 bg-[#20212a] rounded-t-2xl ">
            <ChatBox profile={profile} username={username} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
