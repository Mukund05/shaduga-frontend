import React from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useNavigate } from "react-router-dom";

const CommunityCard = ({ img, title, content, users, tweets, src }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (src) {
      navigate(src);
    }
  };
  return (
    <div
      className="border-2 border-[#BC04BE] rounded-2xl p-3 flex flex-col justify-between items-start w-1/4 gap-2 min-w-80 sm:min-w-64 cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex gap-2 justify-start">
        <img src={img} className="" />
        <span className="text-white text-xl font-semibold">{title}</span>
      </div>
      <span className="text-white text-xs">{content}</span>
      <div className="flex justify-between gap-4">
        <div className="border-[#05F3DB] border rounded-lg font-semibold text-[#05f3db] text-xs sm:text-sm p-2  flex justify-between items-center cursor-pointer hover:bg-[#bc04be] hover:text-white gap-2">
          {/* {xp} XP */}
          <PersonOutlineIcon className="text-[#05f3db]" />
          <div className=""> {users}</div>
        </div>
        <div className="border-[#05F3DB] border rounded-lg font-semibold text-white text-xs sm:text-sm p-2  flex justify-between items-center cursor-pointer hover:bg-[#bc04be] hover:text-white gap-2">
          {/* {hours} Hours */}
          <TwitterIcon className="text-[#05f3db]" />
          <span className="text-[#05f3db]">{tweets}</span>
        </div>
      </div>
    </div>
  );
};

export default CommunityCard;
