import React, { useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import StarIcon from "@mui/icons-material/Star";
import mathis from "../assets/section2/mathis.png";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import CloseIcon from "@mui/icons-material/Close";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BoltIcon from "@mui/icons-material/Bolt";
import { useMediaQuery } from "@react-hook/media-query";
import MenuIcon from "@mui/icons-material/Menu";

const Reviews = ({ openSideBar, setOpenSideBar, setCardNo }) => {
  const lessThanLg = useMediaQuery("(max-width: 1024px)");
  const [showActivity, setShowActivity] = useState(!lessThanLg);
  const handleQuest = () => {
    if (lessThanLg) {
      setShowActivity(!showActivity);
    }
  };
  useEffect(() => {
    setCardNo(0);
  }, []);
  return (
    <div className="flex justify-end relative">
      <div
        className=" absolute top-4 left-4 flex lg:hidden z-50"
        onClick={() => setOpenSideBar(!openSideBar)}
      >
        {!openSideBar ? (
          <MenuIcon className="text-white " />
        ) : (
          <CloseIcon className="text-white " />
        )}
      </div>
      <div
        className="h-screen w-full lg:w-[25%] border-r border-l border-[#FF00FF] "
        onClick={handleQuest}
      >
        <div className=" flex justify-start items-center p-3 gap-2  pl-14 lg:pl-3 ">
          <input
            type="checkbox"
            style={{
              appearance: "none",
              width: "1rem",
              height: "1rem",
              position: "relative",
            }}
            className="border-[#838383]  rounded cursor-pointer custom-checkbox "
          />

          <div className="text-xs text-white font-semibold">Longest wait</div>
          <KeyboardArrowDownIcon className="text-white cursor-pointer" />
        </div>
        <div className="bg-[#24252a] flex flex-col justify-start gap-2 p-2 border-l-4 border-[#c5c9e3]">
          <div className="flex justify-start text-xs text-white items-center gap-1">
            <img src={mathis} className="" />{" "}
            <span className="font-semibold">Mathis Claimed</span>
            <span className="text-[#838383]">In 20 minutes</span>
          </div>
          <div className="flex justify-start gap-1 text-xs text-white font-semibold">
            Your first quest to review!{" "}
            <StarIcon
              className="text-[#ff00ff]"
              style={{ fontSize: "1.2rem" }}
            />
          </div>
        </div>
      </div>
      <div
        className={` ${
          showActivity ? "absolute md:static" : "hidden md:static"
        }  w-full lg:w-[45%] flex h-screen  flex-col justify-between bg-[#191a1e]`}
      >
        <div className="">
          <div className="flex flex-col xs:flex-row gap-2 justify-between p-2">
            <span className="text-[#838383] text-sm font-semibold flex items-center ">
              <span
                className="cursor-pointer pl-14 lg:pl-0"
                onClick={handleQuest}
              >
                Reviews/ Your first quest to review!{" "}
              </span>
              <StarIcon
                className="text-[#ff00ff] "
                style={{ fontSize: "1.2rem" }}
              />{" "}
              / Mathis
            </span>
            <div className="flex gap-3 justify-center">
              <div className="rounded-md border bg-[#0e5f59]  border-[#05F3DB] cursor-pointer h-fit">
                {" "}
                <KeyboardArrowUpIcon className="text-white " />
              </div>
              <div className="rounded-md border bg-[#0e5f59]  border-[#05F3DB] cursor-pointer h-fit">
                {" "}
                <KeyboardArrowDownIcon className="text-white " />
              </div>
            </div>
          </div>
          <div className="bg-[#2a2b35] font-semibold text-xs text-[#DDE2FF] p-2">
            0 tasks pending review
          </div>

          <div className="flex justify-between flex-col p-4">
            <div className="flex flex-col justify-between gap-4">
              <span className="text-white text-xl font-semibold">Activity</span>
              <div className="flex gap-2 text-white text-xs items-center">
                <img src={mathis} className="" />{" "}
                <span className="font-semibold">Mathis Claimed</span>
                <span className="font-semibold">
                  Your first quest to review!
                </span>
                <StarIcon
                  className="text-[#ff00ff]"
                  style={{ fontSize: "1.2rem" }}
                />{" "}
                <span style={{ verticalAlign: "middle" }} className="font-bold">
                  .
                </span>
                <div className="font-bold"> Now</div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-3 border flex flex-col justify-between border-[#05F3DB] rounded-md m-3 w-[95%] h-fit sm:h-28">
          <div className="flex justify-between w-full">
            <div className="flex justify-start gap-2 items-center ">
              <img src={mathis} className="" />
              <input
                className="text-[#DDE2FF] text-xs font-semibold bg-transparent focus:outline-none"
                placeholder="Add comment"
              />
            </div>
            <div className="flex justify-end items-center">
              <StarBorderIcon
                className="text-[#838383] cursor-pointer"
                style={{ fontSize: "1.2rem" }}
              />
              <EmojiFlagsIcon
                className="text-[#838383] cursor-pointer"
                style={{ fontSize: "1.2rem" }}
              />
            </div>
          </div>
          <div className="w-full flex justify-end gap-2">
            <BookmarkIcon className="cursor-pointer text-[#838383]" />
            <BoltIcon className="cursor-pointer text-[#ff00ff]" />
            <button className="font-semibold bg-[#3F0140] p-2 px-4 rounded-lg text-white text-xs">
              Fail
            </button>
            <button className="font-semibold bg-[#ff00ff] p-2 px-4 rounded-lg text-white text-xs">
              Success
            </button>
          </div>
        </div>
      </div>
      <div className="w-[30%] bg-[#20212a] hidden md:flex flex-col gap-3">
        <span className="flex bg-[#191a1e] rounded-b-xl p-4 py-5 justify-between">
          <span className="text-xl font-bold text-white">Details</span>
          <CloseIcon className="text-white cursor-pointer" />
        </span>
        <div className="flex gap-3 justify-start px-3 items-center">
          <img src={mathis} className="" />
          <span className="text-white text-sm font-semibold">Mathis </span>
        </div>
        <div className="flex flex-col gap-4 px-3">
          <div className="flex justify-between gap-2">
            <span className="text-sm text-white font-semibold">Level 1</span>
            <span className="text-sm text-white font-semibold">0/100 XP</span>
          </div>
          <progress className="review-bar bg-[#2d2d2d]" value={0} />
        </div>
        <div className="flex justify-between px-3">
          <div className="w-1/2 justify-start flex flex-col gap-2">
            <span className="text-[#DDE2FF] text-sm font-semibold">
              Join date
            </span>
            <span className="text-[#DDE2FF] text-sm font-semibold">Rank</span>
            <span className="text-[#DDE2FF] text-sm font-semibold">Stars</span>
            <span className="text-[#DDE2FF] text-sm font-semibold">Flags</span>
          </div>
          <div className="w-1/2 justify-start flex flex-col gap-2">
            <span className="text-[#DDE2FF] text-sm font-semibold">
              Feb 24.2024
            </span>
            <span className="text-[#DDE2FF] text-sm font-semibold">0</span>
            <span className="text-[#DDE2FF] text-sm font-semibold">0</span>
            <span className="text-[#DDE2FF] text-sm font-semibold">0</span>
          </div>
        </div>
        <div className="border-t border-[#2b2c36]"></div>
        <div className="flex justify-center gap-2 flex-col px-3">
          <div className="flex justify-between gap-3">
            <span className="text-[#dde2ff] font-semibold text-xs">Email</span>
            <span className="text-[#dde2ff] font-semibold text-xs">
              mathis.grodred.25@gmail.com
            </span>
          </div>
          <div className="flex justify-between gap-3">
            <span className="text-[#dde2ff] font-semibold text-xs">
              Twitter
            </span>
            <span className="text-[#dde2ff] font-semibold text-xs">
              mathisgroged42
            </span>
          </div>
          <div className="flex justify-between gap-3">
            <span className="text-[#dde2ff] font-semibold text-xs">
              Twitter followers
            </span>
            <span className="text-[#dde2ff] font-semibold text-xs">1250</span>
          </div>
          <div className="flex justify-between gap-3">
            <span className="text-[#dde2ff] font-semibold text-xs">
              Discord
            </span>
            <span className="text-[#dde2ff] font-semibold text-xs">
              mathius96
            </span>
          </div>
          <div className="flex justify-between gap-3">
            <span className="text-[#dde2ff] font-semibold text-xs">
              Connected wallet
            </span>
            <span className="text-[#dde2ff] font-semibold text-xs">
              jhsgfk...9856
            </span>
          </div>
          <div className="flex justify-between gap-3">
            <span className="text-[#dde2ff] font-semibold text-xs">
              Ethereum address
            </span>
            <span className="text-[#dde2ff] font-semibold text-xs">
              OXju...956g856
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-3 mx-4">
          <button className="bg-[#3f0140] text-xs justify-center items-center flex text-white rounded-lg font-semibold p-1">
            View profile
          </button>
          <button className="bg-[#3f0140] text-xs justify-center items-center flex text-white rounded-lg font-semibold p-1">
            View user’s claims
          </button>
          <button className="bg-[#3f0140] text-xs justify-center items-center flex text-white rounded-lg font-semibold p-1">
            Ban user
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
