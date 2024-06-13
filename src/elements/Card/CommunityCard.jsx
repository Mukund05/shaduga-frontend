import React from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useNavigate } from "react-router-dom";
import PlaceHolderImg from "../../assets/section1/placeholder.webp";

const CommunityCard = ({ img, title, content, users, tweets, handleClick }) => {
  const navigate = useNavigate();

  return (
    <div
      className="w-96 mb-8 border-2 border-[#BC04BE] rounded-2xl p-5 flex flex-col items-start w-1/4 gap-2 min-w-80 sm:min-w-64 cursor-pointer justify-between"
      onClick={handleClick}
    >
      <div className="grid gap-2">
        <div className="flex gap-2 justify-start items-center">
          <img
            src={
              img ? `${import.meta.env.VITE_BASE_URL}${img}` : PlaceHolderImg
            }
            width={50}
            className="rounded-lg"
          />
          <span className="text-white text-xl font-semibold">{title}</span>
        </div>
        <span className="text-white text-xs">{content}</span>
      </div>

      <div className="flex justify-between gap-4 mt-4">
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
