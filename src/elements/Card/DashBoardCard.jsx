import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const DashBoardCard = ({ username, profile }) => {
  return (
    <div className="rounded-2xl w-full p-3 flex gap-5 flex-col justify-start bg-[#363c42]">
      <div className="flex justify-between items-center">
        <div className="flex justify-start items-center gap-2">
          <img src={profile} className="" />
          <span className="text-xs text-white ">{username}</span>
        </div>
        <MoreVertIcon className="text-white cursor-pointer" />
      </div>
      <div className="flex flex-col gap-2 justify-end px-2">
        <div className="flex justify-between gap-4">
          <span className="text-white text-sm font-semibold"> Level 1</span>
          <span className="text-white text-sm font-semibold"> 10/100 XP</span>
        </div>
        <progress
          value="20"
          max="100"
          className="progress-bar w-full rounded-md text-[#01A292] bg-[#808080]"
        ></progress>
      </div>
    </div>
  );
};

export default DashBoardCard;
