import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import flowers from "../../assets/section2/flower.png";

const GetStarted = () => {
  const [active, setActive] = useState(0);
  const [sprint, setSprint] = useState(false);
  const [invite, setInvite] = useState(false);

  return (
    <div className="bg-[#424649] rounded-lg p-3 flex flex-col gap-3">
      <div className=" flex justify-between gap-3">
        <span className="text-xs font-semibold text-white">
          Get started checklist
        </span>
        <KeyboardArrowDownIcon className="text-white cursor-pointer" />
      </div>
      <div className="flex justify-between gap-3">
        <span
          className={`p-1 rounded-lg ${
            active === 0 ? "bg-[#FF00FF]" : "bg-[#2D2D2D]"
          } w-1/2 cursor-pointer`}
          onClick={() => setActive(0)}
        ></span>
        <span
          className={`p-1 rounded-lg ${
            active === 1 ? "bg-[#FF00FF]" : "bg-[#2D2D2D]"
          } w-1/2 cursor-pointer`}
          onClick={() => setActive(1)}
        ></span>
      </div>
      <div className="flex justify-start gap-2 items-center">
        <CheckCircleOutlineIcon
          className="text-white"
          style={{ fontSize: "1rem" }}
        />
        <span className="text-white text-xs font-semibold">
          Create a community
        </span>
      </div>
      <div className="flex justify-between gap-2">
        <div className="flex justify-start gap-2 items-center">
          <CheckCircleOutlineIcon
            className="text-white"
            style={{ fontSize: "1rem" }}
          />
          <span className="text-white text-xs font-semibold">
            Create three quests
          </span>
        </div>
        <KeyboardArrowDownIcon className="text-white cursor-pointer" />
      </div>
      <div className="flex flex-col gap-2">
        <div
          className="flex justify-between gap-2"
          onClick={() => setSprint(!sprint)}
        >
          <div className="flex justify-start gap-2 items-center">
            <span className="p-2 border border-[#FF00FF] rounded-full"></span>
            <span className="text-white text-xs font-semibold">
              Plan a sprint
            </span>
          </div>

          {!sprint ? (
            <KeyboardArrowDownIcon className="text-white cursor-pointer" />
          ) : (
            <KeyboardArrowUpIcon className="text-white cursor-pointer" />
          )}
        </div>
        {sprint && (
          <div className="">
            <div className="flex flex-col gap-2 justify-center items-center">
              <span className="text-[#9a9a9a] font-semibold flex justify-center text-center">
                Bring momentum with a leaderboard sprint
              </span>
              <span className="border-[#05F3DB] text-[#05F3DB] p-2 px-5 flex text-xs border rounded-xl justify-between font-semibold bg-[#23756e] cursor-pointer items-center gap-2">
                <CardGiftcardIcon
                  className="text-[#05F3DB] "
                  style={{ fontSize: "1rem" }}
                />
                Add sprint
              </span>
              <div className="flex gap-1 justify-center items-center">
                <PlayCircleOutlineIcon
                  className="text-[#05F3DB]"
                  style={{ fontSize: "1.2rem" }}
                />
                <span className="text-[#05F3DB] font-semibold text-xs">
                  Watch video
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        className="flex justify-between gap-2"
        onClick={() => setInvite(!invite)}
      >
        <div className="flex justify-start gap-2 items-center">
          <span className="p-2 border border-[#FF00FF] rounded-full"></span>
          <span className="text-white text-xs font-semibold">
            Invite a teammate
          </span>
        </div>

        {!invite ? (
          <KeyboardArrowDownIcon className="text-white cursor-pointer" />
        ) : (
          <KeyboardArrowUpIcon className="text-white cursor-pointer" />
        )}
      </div>
      <div className="flex justify-start flex-col lg:flex-row gap-2 mx-3 bg-[#20212a] rounded-xl">
        <img src={flowers} className="" />
        <div className="flex flex-col justify-center gap-2 p-2   items-center">
          <span className="text-xs text-white font-semibold flex items-center text-center">
            Ready to grow?
          </span>
          <span className="text-xs text-[#ff00ff] font-semibold flex items-center text-center">
            Launch community
          </span>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
