import React from "react";
import { Link } from "react-router-dom";

const UpgradeCard = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="bg-[#424649] rounded-lg p-3 flex flex-col gap-4 justify-between">
        <div className="flex justify-between gap-2">
          <Link
            to="/plans"
            className="border-[#05F3DB] text-[#05F3DB] p-2 px-5 flex text-xs border rounded-xl justify-between font-semibold bg-[#23756e] cursor-pointer"
          >
            Free plan
          </Link>
          <span className=" text-[#F05F2B] p-2 px-5 flex text-xs  rounded-xl justify-between font-semibold bg-[#584946] cursor-pointer">
            Unlisted
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <span className="text-white text-sm font-semibold">
              Claimed Quest
            </span>
            <span className="text-white text-sm font-semibold">285/35K</span>
          </div>
          <progress
            value="20"
            max="100"
            className="progress-bar w-full rounded-md text-[#01A292] bg-[#ff00ff]"
          ></progress>
          <span className="text-white font-semibold text-sm ">
            Monthly usage. Resets next week.
          </span>
        </div>
        <span className="border-[#05F3DB] text-[#05F3DB] p-2 px-5 flex text-xs items-center border rounded-xl justify-between font-bold bg-[#23756e] cursor-pointer ">
          <span className="w-auto mx-auto">Upgrade plan</span>
        </span>
        <span className="text-white font-semibold text-sm ">
          Upgrade to be certified and show on the main page
        </span>
      </div>
    </div>
  );
};

export default UpgradeCard;
