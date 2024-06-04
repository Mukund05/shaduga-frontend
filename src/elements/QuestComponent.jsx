import React, { useState } from "react";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import discord from "../assets/section1/discord.png";
import XIcon from "@mui/icons-material/X";
import LanguageIcon from "@mui/icons-material/Language";
import goal from "../assets/section2/goal.png";
import genesisimg from "../assets/section2/genesisimg.png";
import tweetimg from "../assets/section2/tweetimg.png";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { Link } from "react-router-dom";
import ImageIcon from "@mui/icons-material/Image";
import { useMediaQuery } from "@react-hook/media-query";
import CloseIcon from "@mui/icons-material/Close";

const QuestComponent = ({ setShowQuest }) => {
  const [claim, setClaim] = useState(false);
  const isScreenLessThanSM = useMediaQuery("(max-width: 640px)");
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [fileName, setFileName] = useState("");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);

      // Simulate uploading progress
      setUploading(true);
      const interval = setInterval(() => {
        setUploadProgress((prevProgress) => {
          if (prevProgress < 100) {
            return prevProgress + 10;
          } else {
            clearInterval(interval);
            return 100;
          }
        });
      }, 500);
    }
  };

  return (
    <div
      className={`w-1/2 lg:w-[40%] ${
        isScreenLessThanSM &&
        "fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-70 z-50 px-2 "
      }`}
    >
      <div className=" overflow-x-auto max-h-screen">
        {claim ? (
          <div className="flex justify-center items-center flex-col h-screen gap-4 bg-black">
            <img src={goal} className="" />
            <span className="text-[#ac1c79] font-bold text-xl sm:text-2xl">
              Quest in review
            </span>
            <span className="text-center text-[#838383] text-sm sm:w-2/3 w-3/4">
              The validation for this quest isn’t automatic, but don’t worry.
              I’ll shhoot you a friendly notification in your inbox as son as
              it’s reviewed!
            </span>
            <button
              className="bg-[#ee06f2] text-white rounded-md p-2 px-6 sm:px-12"
              onClick={() => setShowQuest(false)}
            >
              Next quest
            </button>
          </div>
        ) : (
          <div className="pb-12">
            <div className="p-8 flex flex-col gap-4 relative ps-8  z-0 bg-[#191a1e]">
              <span className="text-white text-xl sm:text-2xl font-semibold ">
                Untitled quest
              </span>
              <div className="flex justify-start items-center gap-5 flex-wrap">
                <div className=" rounded-full flex gap-3 px-3 justify-between text-[#838383] bg-[#2d2d2d] p-1 text-sm items-center cursor-pointer">
                  <AccessTimeIcon />
                  <span className="font-semibold">Cooldown period: None</span>
                </div>
                <div className=" rounded-full flex gap-3 px-3 justify-between text-[#838383] bg-[#2d2d2d] p-1 text-sm items-center cursor-pointer">
                  <FileOpenIcon />
                  <span className="font-semibold">None</span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-white font-bold text-xl sm:trext-2xl">
                  Rewards
                </span>
                <div className="bg-[#2d2d2d] rounded-md p-2 w-fit flex flex-col gap-3">
                  <div className="flex gap-2">
                    <LanguageIcon className="text-[#1976D2]" />
                    <span className="text-white font-semibold">All</span>
                  </div>
                  <div className=" flex flex-col justify-between items-center bg-gradient-to-b from-pink-600 to-teal-400 rounded-md relative h-fit w-fit">
                    <div className="text-xl font-bold text-white pt-4 px-6">
                      XP
                    </div>
                    <div className="font-semibold items-end text-xs bg-[#05F3DB] rounded-t-md px-2 text-[#4D5959]">
                      10
                    </div>
                  </div>
                </div>
              </div>
              <span className="text-[#838383] font-semibold">
                Leave a comment mentioning and tagging gsys
              </span>
              <div className="flex flex-col gap-2">
                <label className="text-white font-semibold">
                  Connect Discord
                </label>
                <div className="px-5 py-2 border border-white rounded-lg cursor-pointer">
                  <div className="flex gap-3 justify-center bg-[#5865F2] p-1 rounded-md">
                    <img src={discord} className="w-6" />
                    <span className="text-white font-semibold">
                      Login with Discord
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-white font-semibold">Connect X</label>
                <div className="px-5 py-2 border border-white rounded-lg cursor-pointer">
                  <div className="flex gap-3 justify-center bg-white p-1 rounded-md">
                    <XIcon className="w-6 text-black" />
                    <span className="text-black font-semibold">
                      Login with Twitter
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label className="text-white font-semibold">
                  Login with Twitter
                </label>
                <div className="px-5 py-2 border border-white rounded-lg cursor-pointer flex gap-3 md:flex-nowrap flex-wrap w-full">
                  <div className="flex gap-3 justify-start px-3 bg-white p-1 rounded-md w-full">
                    <input
                      className="text-[#2d2d2d] font-semibold w-full focus:outline-none"
                      placeholder="Enter address"
                    ></input>
                  </div>
                  <button className="bg-[#828282] text-white rounded-md p-2 px-6">
                    Link
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-white font-semibold">
                  Tweets reactions
                </label>
                <div className="px-5 py-4 border border-white rounded-lg cursor-pointer flex gap-4 flex-col">
                  <span className="text-white text-sm">
                    Claim this task by clicking on the actions below
                  </span>
                  <img src={tweetimg} className="h-fit w-4/5" />
                  <div className="flex flex-col gap-2">
                    <span className="text-white text-sm">Reply URL</span>
                    <div className="flex justify-between gap-2 w-full border-[#4D5959] border rounded-md p-2">
                      <input
                        className="bg-transparent w-full focus:outline-none"
                        placeholder="http//twiterbnbakhdlkndx58s69d-dccljJVo"
                      />
                      <WarningAmberIcon className="text-[#F05F2B]" />
                    </div>
                    <span className="text-[#F05F2B] text-sm">Required</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <Link className="text-[#bc04be] text-md font-bold underline">
                  http//medium-gensus-djm.com
                </Link>
                <img className="w-4/5" src={genesisimg} />
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-white text-md font-bold ">
                  File upload
                </span>
                <div className="flex flex-col justify-center items-center gap-3 border border-[#68AEC5] rounded-md border-dashed py-12 cursor-pointer">
                  <label htmlFor="imageUpload" className="text-[#B9479C]">
                    <input
                      type="file"
                      id="imageUpload"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleImageUpload}
                    />
                    {image ? (
                      <img
                        src={image}
                        alt="Uploaded"
                        className="h-fit w-fit px-4 rounded-md"
                      />
                    ) : (
                      <ImageIcon style={{ fontSize: "3rem" }} />
                    )}
                  </label>
                  {image ? (
                    // <div className="flex flex-col gap-2 justify-center text-center items-center">
                    //   <span className="text-white text-lg font-bold">
                    //     {fileName}
                    //   </span>
                    //   <progress
                    //     value={uploadProgress}
                    //     max="100"
                    //     className="w-full rounded-md"
                    //   ></progress>
                    // </div>
                    <div className="flex flex-col gap-6 w-3/4">
                      <div className="flex  gap-4 justify-between w-full px-4">
                        <div className="flex justify-center gap-3">
                          <ImageIcon
                            style={{ fontSize: "3rem" }}
                            className="text-[#b9479c]"
                          />
                          <div className="flex flex-col gap-2 justify-start">
                            <span className="text-[#838383]">{fileName}</span>
                            <span className="text-[#838383]">
                              128kb{" "}
                              <span className="text-[#02B048] font-semibold">
                                Done
                              </span>
                            </span>
                          </div>
                        </div>
                        <div
                          className="cursor-pointer"
                          onClick={() => setImage("")}
                        >
                          <CloseIcon className="text-white" />
                        </div>
                      </div>
                      <progress
                        value={uploadProgress}
                        max="100"
                        className="progress w-full rounded-md text-[#01A292] bg-[#01A292]"
                      ></progress>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-2 justify-center text-center items-center">
                      <span className="text-white text-lg font-bold">
                        Drag and drop or click to upload
                      </span>
                      <span className="text-white text-md font-semibold">
                        Maximum file size: 5MB
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div
              className={` ${
                isScreenLessThanSM
                  ? "bottom-0 w-full "
                  : "right-0 bottom-0 w-1/2 lg:w-[40%]"
              } fixed right-0 bottom-0  h-fit border-t py-2 border-[#484848] z-0 bg-[#191a1e] flex justify-end px-4 `}
            >
              {" "}
              <button
                className="bg-[#ee06f2] text-white rounded-md p-2 px-6"
                onClick={() => setClaim(true)}
              >
                Claim
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestComponent;
