import React, { useEffect, useRef, useState } from "react";
import user from "../assets/section2/user.png";
import discord from "../assets/section2/discord.png";
import Groups3Icon from "@mui/icons-material/Groups3";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import StoreIcon from "@mui/icons-material/Store";
import LinkIcon from "@mui/icons-material/Link";
import XIcon from "@mui/icons-material/X";
import PersonIcon from "@mui/icons-material/Person";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CommunityCard from "../elements/Card/CommunityCard";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Link } from "react-router-dom";
import MetaData from "../layouts/MetaData";

const Profile = () => {
  const [sidebarIndex, setSideBarIndex] = useState(0);
  const [avatar, setAvatar] = useState(null);
  const [openSideBar, setOpenSideBar] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [temp, setTemp] = useState("User251000000");

  const Modal = ({ setTemp }) => {
    const [Username, setUsername] = useState("User251000000");

    const handleInputChange = (e) => {
      console.log("Input value:", e.target.value);
      setUsername(e.target.value);
    };

    const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const image = new Image();
          image.src = e.target.result;
          image.onload = () => {
            const canvas = document.createElement("canvas");
            const maxWidth = 200; // Maximum width for the avatar image
            const maxHeight = 200; // Maximum height for the avatar image
            let width = image.width;
            let height = image.height;

            if (width > height) {
              if (width > maxWidth) {
                height *= maxWidth / width;
                width = maxWidth;
              }
            } else {
              if (height > maxHeight) {
                width *= maxHeight / height;
                height = maxHeight;
              }
            }

            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(image, 0, 0, width, height);
            const resizedImage = canvas.toDataURL("image/png");
            setAvatar(resizedImage);
          };
        };
        reader.readAsDataURL(file);
      }
    };

    return (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-70 z-50 px-2">
        <div className="bg-[#191A1E] p-6 rounded-lg flex flex-col items-center justify-center gap-y-4">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="avatarInput"
              className="border rounded-md border-[#05F3DB] px-28 py-14 cursor-pointer"
            >
              <div
                className={`rounded-full bg-[#737373]  ${
                  avatar ? "p-0" : " p-4"
                }`}
              >
                {avatar ? (
                  <img src={avatar} className="w-fit h-fit rounded-full" />
                ) : (
                  <CloudUploadIcon />
                )}
              </div>
            </label>
            <input
              id="avatarInput"
              type="file"
              accept="image/*"
              className="hidden "
              onChange={handleFileChange}
            />
            <span className="text-[#737373] text-sm">MAX 0.5MB</span>
          </div>
          <span className="text-[#05F3DB] text-lg">Hi {Username}</span>
          <div className="flex flex-col gap-2 w-full">
            <label className="flex justify-start text-[#9fa2b4] text-sm font-semibold">
              Username
            </label>
            <input
              className="border border-[#F0F1F7] rounded-md p-2 text-[#4B506D] text-sm focus:outline-none"
              placeholder="Azure2000"
              value={Username}
              onChange={handleInputChange}
              type="text"
            />
          </div>
          <div className="flex justify-between w-full gap-4">
            <Link
              to="/home"
              className="border-[#3F0140] border rounded-lg font-semibold  text-xs sm:text-sm p-2 flex justify-center items-center cursor-pointer bg-[#bc04be] text-white w-full "
            >
              log out
            </Link>{" "}
            <button
              className="border-[#3F0140] border rounded-lg font-semibold  text-xs sm:text-sm p-2 flex justify-center items-center cursor-pointer bg-[#bc04be] text-white w-full "
              onClick={() => {
                setShowModal(false), setTemp(Username);
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="flex justify-end  h-full ">
      <MetaData title={"Profile"} />
      {/* sidebar */}
      <div
        className={`${
          openSideBar ? "flex" : "hidden"
        } md:flex flex-col gap-4 items-start bg-[#20212A] w-1/2 md:w-1/4 py-8 fixed left-0 top-0 h-screen z-30`}
      >
        <div className="flex gap-4 justify-center md:justify-start md:my-0 mt-8  px-8  items-center flex-col md:flex-row w-full ">
          {avatar ? (
            <img
              src={avatar}
              className="w-[40px] h-[40px] object-cover rounded-full"
            />
          ) : (
            <img src={user} className="w-fit h-fit" />
          )}
          <span className="text-white flexr">{temp}</span>
        </div>
        <div className="flex gap-2 my-6 flex-col w-full">
          <div
            className={` ${
              sidebarIndex === 0
                ? " border-l-4  border-l-[#DDE2FF] bg-[#2a2b35] "
                : "border-l-4 border-l-transparent"
            } cursor-pointer`}
            onClick={() => setSideBarIndex(0)}
          >
            <div className="px-8 py-3 gap-4 flex justify-start">
              <Groups3Icon className="text-[#9FA2B4] " />
              <span className="text-[#dde2ff] text-md ">Quests</span>
            </div>
          </div>{" "}
          <div
            className={` ${
              sidebarIndex === 1
                ? " border-l-4  border-l-[#DDE2FF] bg-[#2a2b35] "
                : "border-l-4 border-l-transparent"
            } cursor-pointer`}
            onClick={() => setSideBarIndex(1)}
          >
            <div className="px-8 py-3 gap-4 flex justify-start">
              <StoreIcon className="text-[#9FA2B4] " />
              <span className="text-[#dde2ff] text-md ">Store</span>
            </div>
          </div>{" "}
          <div
            className={` ${
              sidebarIndex === 2
                ? " border-l-4  border-l-[#DDE2FF] bg-[#2a2b35] "
                : "border-l-4 border-l-transparent"
            } cursor-pointer`}
            onClick={() => setSideBarIndex(2)}
          >
            <div className="px-8 py-3 gap-4 flex justify-start">
              <WorkspacePremiumIcon className="text-[#9FA2B4] " />
              <span className="text-[#dde2ff] text-md ">Leaderboard</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-3/4 bg-[#191a1e] flex flex-col gap-6 p-6 md:px-6 md:py-0">
        <div className=" relative flex flex-col md:flex-row justify-start items-center  gap-8 mt-6">
          <div className=" h-[40%] md:h-[60%] w-auto ">
            <div
              className="absolute left-0 top-0 cursor-pointer flex md:hidden z-40"
              onClick={() => setOpenSideBar(!openSideBar)}
            >
              {!openSideBar ? (
                <MenuIcon className="text-white" />
              ) : (
                <CloseIcon className="text-white" />
              )}
            </div>
            <div
              className="flex justify-center items-center h-full cursor-pointer"
              onClick={() => setShowModal(true)}
            >
              {!avatar && (
                <PersonIcon
                  style={{ width: "100%", height: "100%" }}
                  className="text-white border rounded-full"
                />
              )}
              {avatar && (
                <img
                  // style={{ width: "100%", height: "100%" }}
                  className="text-white border rounded-full h-40 w-40 object-cover"
                  src={avatar}
                />
              )}
            </div>
          </div>

          <div className="flex flex-col gap-4 justify-center items-center md:items-start h-fit">
            <span className="text-[#05F3DB] text-2xl sm:text-2xl font-bold">
              {temp}
            </span>
            <span className="text-white text-md text-center md:text-start">
              Write a description in your profile to introduce your community
            </span>
            <div className="flex justify-start items-center gap-3 cursor-pointer">
              <div className="rounded-full p-2 bg-[#ff00ff]">
                <LinkIcon className="text-black" />
              </div>
              <div className="rounded-full p-2 bg-[#ff00ff] cursor-pointer">
                <XIcon className="text-black" />
              </div>
              <div className="rounded-full p-3 bg-[#ff00ff] cursor-pointer">
                <img src={discord} className="text-black w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-x-3 gap-y-5 flex-wrap justify-center md:justify-start">
          <div className="border rounded-lg border-[#05F3DB] bg-[#2D2D2D] flex gap-3 justify-start w-fit p-2 cursor-pointer hover:bg-[#555555]">
            <KeyboardArrowUpIcon className="text-white " />
            <span className="text-white pr-3 sm:pr-8">Task</span>
          </div>
          <div className="border rounded-lg border-[#05F3DB] bg-[#2D2D2D] flex gap-3 justify-start w-fit p-2 cursor-pointer hover:bg-[#555555]">
            <KeyboardArrowUpIcon className="text-white " />
            <span className="text-white pr-3 sm:pr-8">Sprint</span>
          </div>
          <div className="border rounded-lg border-[#05F3DB] bg-[#2D2D2D] flex gap-3 justify-start w-fit p-2 cursor-pointer hover:bg-[#555555]">
            <KeyboardArrowUpIcon className="text-white " />
            <span className="text-white pr-3 sm:pr-8">All Quests</span>
          </div>
          <div className="border rounded-lg border-[#05F3DB] bg-[#2D2D2D] flex gap-3 justify-start w-fit p-2 cursor-pointer hover:bg-[#555555]">
            <KeyboardArrowUpIcon className="text-white " />
            <span className="text-white pr-3 sm:pr-8">Dily Tasks</span>
          </div>
          <div className="border rounded-lg border-[#05F3DB] bg-[#2D2D2D] flex gap-3 justify-start w-fit p-2 cursor-pointer hover:bg-[#555555]">
            <KeyboardArrowUpIcon className="text-white " />
            <span className="text-white pr-3 sm:pr-8">Feature</span>
          </div>
          <div className="border rounded-lg border-[#05F3DB] bg-[#2D2D2D] flex gap-3 justify-start w-fit p-2 cursor-pointer hover:bg-[#555555]">
            <KeyboardArrowUpIcon className="text-white " />
            <span className="text-white pr-3 sm:pr-8">Feature</span>
          </div>
          <div className="border rounded-lg border-[#05F3DB] bg-[#2D2D2D] flex gap-3 justify-start w-fit p-2 cursor-pointer hover:bg-[#555555]">
            <KeyboardArrowUpIcon className="text-white " />
            <span className="text-white pr-3 sm:pr-8">Feature</span>
          </div>
          <div className="border rounded-lg border-[#05F3DB] bg-[#2D2D2D] flex gap-3 justify-start w-fit p-2 cursor-pointer hover:bg-[#555555]">
            <KeyboardArrowUpIcon className="text-white " />
            <span className="text-white pr-3 sm:pr-8">Feature</span>
          </div>
        </div>

        <div className="flex gap-3 gap-y-6 flex-wrap justify-between my-6">
          <CommunityCard
            title={"Web3-go"}
            content={
              "Lorem ipsum dolor sit amet consectetur. Nec velit placerat sit non nunc mi. Eu sed eget gravida pellentesque aliquet. Tincidunt nibh enim nunc tellus in eu aliquam condimentum. "
            }
            users={"120"}
            tweets={"35k"}
          />
          <CommunityCard
            title={"Web3-go"}
            content={
              "Lorem ipsum dolor sit amet consectetur. Nec velit placerat sit non nunc mi. Eu sed eget gravida pellentesque aliquet. Tincidunt nibh enim nunc tellus in eu aliquam condimentum. "
            }
            users={"120"}
            tweets={"35k"}
          />
          <CommunityCard
            title={"Web3-go"}
            content={
              "Lorem ipsum dolor sit amet consectetur. Nec velit placerat sit non nunc mi. Eu sed eget gravida pellentesque aliquet. Tincidunt nibh enim nunc tellus in eu aliquam condimentum. "
            }
            users={"120"}
            tweets={"35k"}
          />
          <CommunityCard
            title={"Web3-go"}
            content={
              "Lorem ipsum dolor sit amet consectetur. Nec velit placerat sit non nunc mi. Eu sed eget gravida pellentesque aliquet. Tincidunt nibh enim nunc tellus in eu aliquam condimentum. "
            }
            users={"120"}
            tweets={"35k"}
          />
          <CommunityCard
            title={"Web3-go"}
            content={
              "Lorem ipsum dolor sit amet consectetur. Nec velit placerat sit non nunc mi. Eu sed eget gravida pellentesque aliquet. Tincidunt nibh enim nunc tellus in eu aliquam condimentum. "
            }
            users={"120"}
            tweets={"35k"}
          />
          <CommunityCard
            title={"Web3-go"}
            content={
              "Lorem ipsum dolor sit amet consectetur. Nec velit placerat sit non nunc mi. Eu sed eget gravida pellentesque aliquet. Tincidunt nibh enim nunc tellus in eu aliquam condimentum. "
            }
            users={"120"}
            tweets={"35k"}
          />
          <CommunityCard
            title={"Web3-go"}
            content={
              "Lorem ipsum dolor sit amet consectetur. Nec velit placerat sit non nunc mi. Eu sed eget gravida pellentesque aliquet. Tincidunt nibh enim nunc tellus in eu aliquam condimentum. "
            }
            users={"120"}
            tweets={"35k"}
          />
          <CommunityCard
            title={"Web3-go"}
            content={
              "Lorem ipsum dolor sit amet consectetur. Nec velit placerat sit non nunc mi. Eu sed eget gravida pellentesque aliquet. Tincidunt nibh enim nunc tellus in eu aliquam condimentum. "
            }
            users={"120"}
            tweets={"35k"}
          />
          <CommunityCard
            title={"Web3-go"}
            content={
              "Lorem ipsum dolor sit amet consectetur. Nec velit placerat sit non nunc mi. Eu sed eget gravida pellentesque aliquet. Tincidunt nibh enim nunc tellus in eu aliquam condimentum. "
            }
            users={"120"}
            tweets={"35k"}
          />
        </div>
      </div>
      {showModal && <Modal setTemp={setTemp} />}
    </div>
  );
};

export default Profile;
