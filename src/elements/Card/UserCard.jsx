import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const UserCard = ({ username, profile }) => {
  return (
    <div className="rounded-2xl w-full p-3 flex gap-5 flex-col justify-start bg-[#363c42]">
      <div className="flex justify-between items-center">
        <div className="flex justify-start items-center gap-2">
          <img src={profile} className="" />
          <span className="text-xs text-white font-semibold">{username}</span>
        </div>
        <MoreVertIcon className="text-white cursor-pointer" />
      </div>
    </div>
  );
};

export default UserCard;
