import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useSelector } from "react-redux";

const UserCard = ({ username, profile }) => {
  const user = useSelector((state) => state?.user?.userData?.data);
  
  const getFirstLetter = (name) => {
    if (!name) return ""; // Handle empty or undefined names
    return name.charAt(0).toUpperCase(); // Alternatively, you could use name[0]
  };
  return (
    <div className="rounded-2xl w-full p-3 flex gap-5 flex-col justify-start bg-[#363c42]">
      <div className="flex justify-between items-center">
        <div className="flex justify-start items-center gap-2">
          <p className="w-24 h-24 flex items-center justify-center text-5xl text-lime-100">
            {getFirstLetter(user?.name)}  
          </p>
          <span className="text-xs text-white font-semibold">
            {user?.name || "Username"}
          </span>
        </div>
        <MoreVertIcon className="text-white cursor-pointer" />
      </div>
    </div>
  );
};

export default UserCard;
