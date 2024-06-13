import React, { useEffect, useRef, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import AddIcon from "@mui/icons-material/Add";
import SortIcon from "@mui/icons-material/Sort";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import LoopIcon from "@mui/icons-material/Loop";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import StarIcon from "@mui/icons-material/Star";
import LanguageIcon from "@mui/icons-material/Language";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ArticleIcon from "@mui/icons-material/Article";
import ScheduleIcon from "@mui/icons-material/Schedule";
import notequal from "../assets/section2/notequal.png";
import pencil from "../assets/section2/pencil.png";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import tiktok from "../assets/section2/tiktok.png";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import partnership from "../assets/section2/partnership.png";
import discord from "../assets/section2/admindiscord.png";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { FormControlLabel, Switch } from "@mui/material";
import PollIcon from "@mui/icons-material/Poll";
import QuizIcon from "@mui/icons-material/Quiz";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import opinion from "../assets/section2/opinion.png";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import QuestModal from "./Modals/QuestModal";
import { useDispatch, useSelector } from "react-redux";
import { createQuest } from "../slice/Quests";
import { Link } from "react-router-dom";

const VisitLinkTask = ({ i, data }) => {
  const [formData, setFormData] = useState({
    task_type: "visit-link",
  });
  useEffect(() => {
    data(formData, i);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      files: [...e.target.files],
    });
  };

  return (
    <div className="flex flex-col justify-center">
      <a
        href={formData.link}
        target="_blank"
        rel="noopener noreferrer"
        className="border text-white cursor-pointer border-[#838383] rounded-lg p-3 bg-transparent w-full md:w-3/4 focus:outline-none"
      >
        {formData.link ? formData.link : "Enter a link below"}
      </a>
      {/* make triangle */}
      <div className="flex w-full md:w-3/4 mt-1  justify-center">
        <div className="triangle-up"></div>
      </div>
      <div className="bg-black p-2 w-full md:w-3/4 rounded-lg">
        <div className="flex justify-between">
          <div className="flex items-center gap-3">
            <div className="p-1 rounded-full bg-[#f5841f] h-fit flex items-center">
              <InsertLinkIcon
                className="text-white"
                style={{ fontSize: "1.2rem" }}
              />
            </div>
            <div className="text-[#ff00ff] text-sm font-semibold">
              Visit link
            </div>
          </div>
          <div className="flex gap-2 justify-end items-center">
            <ContentCopyIcon
              className="text-[#ffffff] cursor-pointer"
              style={{ fontSize: "1rem" }}
            />
            <DeleteForeverIcon
              className="text-[#ffffff] cursor-pointer"
              style={{ fontSize: "1rem" }}
            />
            <KeyboardArrowUpIcon
              className="text-[#ffffff] cursor-pointer"
              style={{ fontSize: "1rem" }}
            />
          </div>
        </div>
        <div className="border-t border-t-[#ffffff] w-full my-2"></div>
        <span className="my-3 text-white text-xs font-semibold">
          Link you want your users to visit
        </span>
        <input
          className="bg-[#141518] border focus:outline-none border-[#05F3DB] rounded-lg p-3 w-full my-4 mb-8 font-semibold"
          placeholder="www/http"
          name="link"
          value={formData.link}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
const Invites = ({ i, data }) => {
  const [formData, setFormData] = useState({
    task_type: "invites",
  });
  useEffect(() => {
    data(formData, i);
  }, [formData]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      files: [...e.target.files],
    });
  };

  return (
    <div className="flex flex-col justify-center">
      {/* make triangle */}
      <div className="flex w-full md:w-3/4 mt-1  justify-center">
        <div className="triangle-up"></div>
      </div>
      <div className="bg-black p-2 w-full md:w-3/4 rounded-lg">
        <div className="flex justify-between">
          <div className="flex items-center gap-3">
            <div className="p-1 rounded-full bg-[#7879f1] h-fit flex items-center">
              <MailOutlineIcon
                className="text-white"
                style={{ fontSize: "1.2rem" }}
              />
            </div>
            <div className="text-[#ff00ff] text-sm font-semibold">Invites</div>
          </div>
          <div className="flex gap-2 justify-end items-center">
            <ContentCopyIcon
              className="text-[#ffffff] cursor-pointer"
              style={{ fontSize: "1rem" }}
            />
            <DeleteForeverIcon
              className="text-[#ffffff] cursor-pointer"
              style={{ fontSize: "1rem" }}
            />
            <KeyboardArrowUpIcon
              className="text-[#ffffff] cursor-pointer"
              style={{ fontSize: "1rem" }}
            />
          </div>
        </div>
        <div className="border-t border-t-[#ffffff] w-full my-2"></div>
        <span className="my-3 text-white text-xs font-semibold">
          Link you want your users to visit
        </span>
        <input
          className="bg-[#141518] border focus:outline-none border-[#05F3DB] rounded-lg p-3 w-full my-4  font-semibold"
          placeholder="www/http"
          name="link"
          value={formData.link}
          onChange={handleChange}
        />
        <div className="flex flex-col gap-2 mb-4">
          <span className=" text-white text-xs font-semibold">
            XP required for invite to count
          </span>
          <span className=" text-[#838383] text-xs font-semibold">
            Update your invite requirements for your community in
            <span className="text-white underline cursor-pointer mx-2 ">
              settings.
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};
const API = ({ i, data }) => {
  const [formData, setFormData] = useState({
    task_type: "api",
  });
  useEffect(() => {
    data(formData, i);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      files: [...e.target.files],
    });
  };

  return (
    <div className="flex flex-col justify-center">
      <div className="border border-[#838383] rounded-xl p-3 bg-transparent w-full md:w-3/4 flex flex-col gap-2 h-28 ">
        <span className="text-white font-semibold text-xs">
          Type your instructions or a question here
        </span>
        <input
          className="text-[#838383] text-xs font-semibold bg-transparent focus:outline-none"
          placeholder="Description (optional)"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
      {/* make triangle */}
      <div className="flex w-full md:w-3/4 mt-1  justify-center">
        <div className="triangle-up"></div>
      </div>
      <div className="bg-black p-2 w-full md:w-3/4 rounded-lg">
        <div className="flex justify-between">
          <div className="flex items-center gap-3">
            <div className="p-1 rounded-full bg-[#ff00ff] h-fit flex items-center">
              <SettingsIcon
                className="text-white"
                style={{ fontSize: "1.2rem" }}
              />
            </div>
            <div className="text-[#ff00ff] text-sm font-semibold">API</div>
          </div>
          <div className="flex gap-2 justify-end items-center">
            <ContentCopyIcon
              className="text-[#ffffff] cursor-pointer"
              style={{ fontSize: "1rem" }}
            />
            <DeleteForeverIcon
              className="text-[#ffffff] cursor-pointer"
              style={{ fontSize: "1rem" }}
            />
            <KeyboardArrowUpIcon
              className="text-[#ffffff] cursor-pointer"
              style={{ fontSize: "1rem" }}
            />
          </div>
        </div>
        <div className="border-t border-t-[#ffffff] w-full my-2"></div>
        <span className="my-2 text-white text-xs font-semibold">Endpoint</span>
        <input
          className="bg-[#141518] border focus:outline-none border-[#05F3DB] rounded-lg p-3 w-full mt-3 font-semibold text-xs text-[#838383]"
          placeholder="http//mYApi/myEndpoint"
          name="endpoint"
          value={formData.endpoint}
          onChange={handleChange}
        />
        <span className="text-xs text-[#838383] font-semibold">
          quest.type.api.fields.endpoint.hint
        </span>
        <div className="flex gap-2 flex-col my-4">
          <div className="flex justify-between">
            <span className=" text-white text-xs font-semibold">API Key</span>

            <span className=" text-white text-xs font-semibold">Optional</span>
          </div>
          <input
            className="bg-[#141518] border focus:outline-none border-[#05F3DB] rounded-lg p-3 w-full  font-semibold text-xs text-[#838383]"
            placeholder="myApiKey"
            name="api_key"
            value={formData.api_key}
            onChange={handleChange}
          />
        </div>
        <div className="my-2 flex flex-col gap-1">
          <span className=" text-white text-xs font-semibold">
            Identification methods
          </span>
          <span className="text-xs text-[#838383] font-semibold">
            Select which methods to identify your users with. This will be
            forwarded in the API call.
          </span>
        </div>
        <div className="flex justify-between px-2">
          <div className="flex gap-3 flex-col w-1/2 justify-start">
            <div className="flex gap-2 items-center">
              <input
                style={{
                  appearance: "none",
                  width: "1rem",
                  height: "1rem",
                  position: "relative",
                }}
                className="border-[#838383]  rounded cursor-pointer custom-checkbox"
                type="checkbox"
              />
              <span className="text-white text-xs font-semibold">Email</span>
            </div>
            <div className="flex gap-2 items-center">
              <input
                style={{
                  appearance: "none",
                  width: "1rem",
                  height: "1rem",
                  position: "relative",
                }}
                className="border-[#838383]  rounded cursor-pointer custom-checkbox"
                type="checkbox"
              />
              <span className="text-white text-xs font-semibold">Discord</span>
            </div>
          </div>
          <div className="flex gap-3 flex-col w-1/2 justify-start">
            <div className="flex gap-2 items-center">
              <input
                style={{
                  appearance: "none",
                  width: "1rem",
                  height: "1rem",
                  position: "relative",
                }}
                className="border-[#838383]  rounded cursor-pointer custom-checkbox"
                type="checkbox"
              />
              <span className="text-white text-xs font-semibold">Twitter</span>
            </div>
            <div className="flex gap-2 items-center">
              <input
                style={{
                  appearance: "none",
                  width: "1rem",
                  height: "1rem",
                  position: "relative",
                }}
                className="border-[#838383]  rounded cursor-pointer custom-checkbox"
                type="checkbox"
              />
              <span className="text-white text-xs font-semibold">
                EVM address
              </span>
            </div>
          </div>
        </div>
        <div className="flex  items-center my-3 cursor-pointer">
          <span className="text-xs font-semibold text-[#838383]">
            Documentation
          </span>
          <KeyboardArrowRightIcon className="text-[#838383]" />
        </div>
      </div>
    </div>
  );
};

const Partnership = ({ i, data }) => {
  const [formData, setFormData] = useState({
    task_type: "partnership",
  });
  useEffect(() => {
    data(formData, i);
  }, [formData]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      files: [...e.target.files],
    });
  };

  return (
    <div className="flex flex-col justify-center">
      {/* make triangle */}
      <div className="w-full md:w-3/4">
        <span className="text-white text-md font-semibold">Partnership</span>
        <div className="border border-[#710373] rounded-lg p-4 flex flex-col justify-center items-center gap-1">
          <div className="rounded-full p-2 bg-[#ff00ff]">
            <img src={partnership} className="" />
          </div>
          <span className="text-xl text-white font-semibold">Pick Dive</span>
          <span className="text-xs text-[#838383] font-semibold">
            Pick Dive
          </span>
          <button className="bg-[#710373] rounded-md p-2 w-full text-white font-semibold">
            Joined
          </button>
        </div>
        <div className="flex  mt-1  justify-center ">
          <div className="triangle-up"></div>
        </div>
        <div className="bg-black p-2  rounded-lg w-[90%] mx-auto">
          <div className="flex justify-between">
            <div className="flex items-center gap-3">
              <div className="p-1 rounded-full bg-[#3f0140] h-fit flex items-center">
                <PeopleAltIcon
                  className="text-white"
                  style={{ fontSize: "1.2rem" }}
                />
              </div>
              <div className="text-[#ff00ff] text-sm font-semibold">
                Partnership
              </div>
            </div>
            <div className="flex gap-2 justify-end items-center">
              <ContentCopyIcon
                className="text-[#ffffff] cursor-pointer"
                style={{ fontSize: "1rem" }}
              />
              <DeleteForeverIcon
                className="text-[#ffffff] cursor-pointer"
                style={{ fontSize: "1rem" }}
              />
              <KeyboardArrowUpIcon
                className="text-[#ffffff] cursor-pointer"
                style={{ fontSize: "1rem" }}
              />
            </div>
          </div>
          <div className="border-t border-t-[#ffffff] w-full my-2"></div>
          <span className="my-3 text-white text-xs font-semibold">
            Community URL
          </span>
          <input
            className="bg-[#141518] border focus:outline-none border-[#05F3DB] rounded-lg p-3 w-full my-4 mb-8 font-semibold"
            placeholder="shagudalabs.com/shagudalabs"
            name="partnership"
            value={formData.partnership}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};
const Discord = ({ i, data }) => {
  const [formData, setFormData] = useState({
    task_type: "discord",
  });

  useEffect(() => {
    data(formData, i);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      files: [...e.target.files],
    });
  };

  return (
    <div className="flex flex-col justify-center">
      {/* make triangle */}
      <div className="w-full md:w-3/4">
        <span className="text-white text-md font-semibold">Discord</span>
        <div className="border border-[#5865F2] rounded-2xl px-6 py-4 flex flex-col justify-center items-center gap-1">
          <button className="bg-[#5865F2] rounded-xl p-2 w-full text-white font-bold text-sm flex justify-center items-center gap-3">
            <img src={discord} className="" />
            <span className="">Login with Discord</span>
          </button>
        </div>
        <div className="flex  mt-1  justify-center ">
          <div className="triangle-up"></div>
        </div>
        <div className="bg-black p-2  rounded-lg w-[90%] mx-auto">
          <div className="flex justify-between">
            <div className="flex items-center gap-3">
              <div className="p-1 rounded-full bg-[#5764ef] h-fit flex items-center">
                <PeopleAltIcon
                  className="text-white"
                  style={{ fontSize: "1.2rem" }}
                />
              </div>
              <div className="text-[#ff00ff] text-sm font-semibold">
                Discord
              </div>
            </div>
            <div className="flex gap-2 justify-end items-center">
              <ContentCopyIcon
                className="text-[#ffffff] cursor-pointer"
                style={{ fontSize: "1rem" }}
              />
              <DeleteForeverIcon
                className="text-[#ffffff] cursor-pointer"
                style={{ fontSize: "1rem" }}
              />
              <KeyboardArrowUpIcon
                className="text-[#ffffff] cursor-pointer"
                style={{ fontSize: "1rem" }}
              />
            </div>
          </div>
          <div className="border-t border-t-[#ffffff] w-full my-2"></div>
          <span className="my-3 text-white text-xs font-semibold">
            Invite link
          </span>
          <input
            className="bg-[#141518] border focus:outline-none border-[#05F3DB] rounded-lg p-3 w-full my-4 mb-8 font-semibold"
            placeholder="https://discord.gg/server"
            name="link"
            value={formData.link}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

const Twitter = ({ i, data }) => {
  const [formData, setFormData] = useState({
    task_type: "twitter",
  });

  useEffect(() => {
    data(formData, i);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      files: [...e.target.files],
    });
  };

  return (
    <div className="flex flex-col justify-center">
      {/* make triangle */}
      <div className="w-full md:w-3/4">
        <span className="text-white text-md font-semibold">Twitter</span>
        <div className="border border-[#1DA1F2] rounded-2xl px-6 py-4 flex flex-col justify-center items-center gap-1">
          <button className="bg-[#1DA1F2] rounded-xl p-2 w-full text-white font-bold text-sm flex justify-center items-center gap-3">
            <TwitterIcon className="" />
            <span className="">Login with Twitter</span>
          </button>
        </div>
        <div className="flex  mt-1  justify-center ">
          <div className="triangle-up"></div>
        </div>
        <div className="bg-black p-2  rounded-lg w-[90%] mx-auto">
          <div className="flex justify-between">
            <div className="flex items-center gap-3">
              <div className="p-1 rounded-full bg-[#1DA1F2] h-fit flex items-center">
                <TwitterIcon
                  className="text-white"
                  style={{ fontSize: "1.2rem" }}
                />
              </div>
              <div className="text-[#ff00ff] text-sm font-semibold">
                Twitter
              </div>
            </div>
            <div className="flex gap-2 justify-end items-center">
              <ContentCopyIcon
                className="text-[#ffffff] cursor-pointer"
                style={{ fontSize: "1rem" }}
              />
              <DeleteForeverIcon
                className="text-[#ffffff] cursor-pointer"
                style={{ fontSize: "1rem" }}
              />
              <KeyboardArrowUpIcon
                className="text-[#ffffff] cursor-pointer"
                style={{ fontSize: "1rem" }}
              />
            </div>
          </div>
          <div className="border-t border-t-[#ffffff] w-full my-2"></div>
          <span className="my-3 text-white text-xs font-semibold">
            Invite link
          </span>
          <input
            className="bg-[#141518] border focus:outline-none border-[#05F3DB] rounded-lg p-3 w-full my-4 mb-8 font-semibold"
            placeholder="https://twitter.com/server"
            name="link"
            value={formData.link}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

const Telegram = ({ i, data }) => {
  const [formData, setFormData] = useState({
    task_type: "telegram",
  });

  useEffect(() => {
    data(formData, i);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      files: [...e.target.files],
    });
  };

  return (
    <div className="flex flex-col justify-center">
      {/* make triangle */}
      <div className="w-full md:w-3/4">
        <span className="text-white text-md font-semibold">Telegram</span>
        <div className="border border-[#0088cc] rounded-2xl px-6 py-4 flex flex-col justify-center items-center gap-1">
          <button className="bg-[#0088cc] rounded-xl p-2 w-full text-white font-bold text-sm flex justify-center items-center gap-3">
            <TelegramIcon className="" />
            <span className="">Login with Telegram</span>
          </button>
        </div>
        <div className="flex  mt-1  justify-center ">
          <div className="triangle-up"></div>
        </div>
        <div className="bg-black p-2  rounded-lg w-[90%] mx-auto">
          <div className="flex justify-between">
            <div className="flex items-center gap-3">
              <div className="p-1 rounded-full bg-[#0088cc] h-fit flex items-center">
                <TelegramIcon
                  className="text-white"
                  style={{ fontSize: "1.2rem" }}
                />
              </div>
              <div className="text-[#ff00ff] text-sm font-semibold">
                Telegram
              </div>
            </div>
            <div className="flex gap-2 justify-end items-center">
              <ContentCopyIcon
                className="text-[#ffffff] cursor-pointer"
                style={{ fontSize: "1rem" }}
              />
              <DeleteForeverIcon
                className="text-[#ffffff] cursor-pointer"
                style={{ fontSize: "1rem" }}
              />
              <KeyboardArrowUpIcon
                className="text-[#ffffff] cursor-pointer"
                style={{ fontSize: "1rem" }}
              />
            </div>
          </div>
          <div className="border-t border-t-[#ffffff] w-full my-2"></div>
          <span className="my-3 text-white text-xs font-semibold">
            Invite link
          </span>
          <input
            className="bg-[#141518] border focus:outline-none border-[#05F3DB] rounded-lg p-3 w-full my-4 mb-8 font-semibold"
            placeholder="https://telegram.com/server"
            name="link"
            value={formData.link}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

const TikTok = ({ i, data }) => {
  const [formData, setFormData] = useState({
    task_type: "tiktok",
  });
  useEffect(() => {
    data(formData, i);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      files: [...e.target.files],
    });
  };

  return (
    <div className="flex flex-col justify-center">
      {/* make triangle */}
      <div className="w-full md:w-3/4">
        <span className="text-white text-md font-semibold">Tiktok</span>
        <div className="border border-[#010101] rounded-2xl px-6 py-4 flex flex-col justify-center items-center gap-1">
          <button className="bg-[#010101] rounded-xl p-2 w-full text-white font-bold text-sm flex justify-center items-center gap-3">
            <tiktok className="" />
            <span className="">Login with Tiktok</span>
          </button>
        </div>
        <div className="flex  mt-1  justify-center ">
          <div className="triangle-up"></div>
        </div>
        <div className="bg-black p-2  rounded-lg w-[90%] mx-auto">
          <div className="flex justify-between">
            <div className="flex items-center gap-3">
              <div className="p-1 rounded-full bg-[#010101] h-fit flex items-center">
                <tiktok className="text-white" style={{ fontSize: "1.2rem" }} />
              </div>
              <div className="text-[#ff00ff] text-sm font-semibold">Tiktok</div>
            </div>
            <div className="flex gap-2 justify-end items-center">
              <ContentCopyIcon
                className="text-[#ffffff] cursor-pointer"
                style={{ fontSize: "1rem" }}
              />
              <DeleteForeverIcon
                className="text-[#ffffff] cursor-pointer"
                style={{ fontSize: "1rem" }}
              />
              <KeyboardArrowUpIcon
                className="text-[#ffffff] cursor-pointer"
                style={{ fontSize: "1rem" }}
              />
            </div>
          </div>
          <div className="border-t border-t-[#ffffff] w-full my-2"></div>
          <span className="my-3 text-white text-xs font-semibold">
            Invite link
          </span>
          <input
            className="bg-[#141518] border focus:outline-none border-[#05F3DB] rounded-lg p-3 w-full my-4 mb-8 font-semibold"
            placeholder="https://tiktok.com/server"
            name="link"
            value={formData.link}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

const FileUpload = ({ i, data }) => {
  const [loading, setLoading] = useState(true);
  const [loading1, setLoading1] = useState(true);
  const [formData, setFormData] = useState({
    task_type: "file-upload",
    files: [],
    api_key: "",
  });

  useEffect(() => {
    data(formData, i);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFormData((prevFormData) => ({
      ...prevFormData,
      files: [...prevFormData.files, ...selectedFiles],
    }));
  };

  const fileInputRef = useRef(null);

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageSelection = (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      const reader = new FileReader(); // FileReader to read the file
      reader.onload = (e) => {
        setSelectedImage(e.target.result); // Set the selected image as the base64 data URI
      };
      reader.readAsDataURL(file); // Read the selected file as a data URL
      handleFileChange(event); // Handle file change to store the file
    }
  };

  return (
    <div className="flex flex-col justify-center">
      {/* make triangle */}
      <div className="w-full md:w-3/4">
        <div className="">
          <input
            type="file"
            accept="image/*" // accept only image files
            className="hidden"
            onChange={handleImageSelection}
            ref={fileInputRef}
          />

          <div
            className="border border-[#710373] rounded-lg p-4 flex flex-col justify-center items-center gap-3 my-4"
            onClick={() => fileInputRef.current.click()} // Trigger file input click on div click
          >
            {selectedImage ? (
              <img
                src={selectedImage}
                alt="Selected Image"
                className="w-full rounded-lg"
              />
            ) : (
              <>
                <PhotoSizeSelectActualIcon
                  className="text-[#b9479c]"
                  style={{ fontSize: "2.5rem" }}
                />
                <span className="font-bold text-xl">
                  Drag and drop or{" "}
                  <span className="px-1 text-[#ff00ff]">click to upload</span>
                </span>
                <span className="text-md font-semibold">
                  Maximum file size: 10MB.
                </span>
              </>
            )}
          </div>
        </div>

        <div className="flex mt-1 justify-center ">
          <div className="triangle-up"></div>
        </div>
        <div className="bg-black p-2 rounded-lg w-[90%] mx-auto">
          <div className="flex justify-between">
            <div className="flex items-center gap-3">
              <div className="p-1 rounded-full bg-[#ff004f] h-fit flex items-center">
                <UploadFileIcon className="" style={{ fontSize: "1.2rem" }} />
              </div>
              <div className="text-[#ff00ff] text-sm font-semibold">
                File upload
              </div>
            </div>
            <div className="flex gap-2 justify-end items-center">
              <ContentCopyIcon
                className="text-[#ffffff] cursor-pointer"
                style={{ fontSize: "1rem" }}
              />
              <DeleteForeverIcon
                className="text-[#ffffff] cursor-pointer"
                style={{ fontSize: "1rem" }}
              />
              <KeyboardArrowUpIcon
                className="text-[#ffffff] cursor-pointer"
                style={{ fontSize: "1rem" }}
              />
            </div>
          </div>
          <div className="border-t border-t-[#ffffff] w-full my-2"></div>
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-1">
              <span className="text-white font-semibold text-xs">
                Allow only specific file types
              </span>
              <span className="text-[#838383] text-xs">
                Allow users to select multiple options.
              </span>
            </div>
            <div className="">
              <FormControlLabel
                sx={{
                  display: "block",
                }}
                control={
                  <Switch
                    checked={loading}
                    onChange={() => setLoading(!loading)}
                    name="loading"
                    color="primary"
                  />
                }
              />
            </div>
          </div>
          <div className="flex gap-2 flex-col my-4 ">
            <div className="flex justify-between px-3">
              <span className="text-white text-xs font-semibold">
                Maximum number of files
              </span>

              <span className="text-white text-xs font-semibold">Optional</span>
            </div>
            <input
              className="bg-[#141518] border focus:outline-none border-[#05F3DB] rounded-lg p-3 w-full font-semibold text-xs text-[#838383]"
              placeholder="myApiKey"
              name="api_key"
              value={formData.api_key}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-between items-center pb-4">
            <div className="flex flex-col gap-1">
              <span className="text-white font-semibold text-xs">
                Automatic validation
              </span>
              <span className="text-[#838383] text-xs">
                Once submitted, the claim is auto-validated and skips review.
              </span>
            </div>
            <div className="">
              <FormControlLabel
                sx={{
                  display: "block",
                }}
                control={
                  <Switch
                    checked={loading1}
                    onChange={() => setLoading1(!loading1)}
                    name="loading1"
                    color="primary"
                  />
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Poll = ({ i, data }) => {
  const [loading, setLoading] = useState(true);
  const [loading1, setLoading1] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [loading3, setLoading3] = useState(true);
  const [loading4, setLoading4] = useState(true);
  const [formData, setFormData] = useState({
    task_type: "poll",
  });
  useEffect(() => {
    data(formData, i);
  }, [formData]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      files: [...e.target.files],
    });
  };

  const fileInputRef = useRef(null);

  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageSelection = (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      const reader = new FileReader(); // FileReader to read the file
      reader.onload = (e) => {
        setSelectedImage(e.target.result); // Set the selected image as the base64 data URI
      };
      reader.readAsDataURL(file); // Read the selected file as a data URL
    }
  };
  return (
    <div className="flex flex-col justify-center">
      <div className="border border-[#838383] rounded-xl p-3 bg-transparent w-full md:w-3/4 flex flex-col gap-2 h-28 ">
        <span className="text-white font-semibold text-xs">
          Type your instructions or a question here
        </span>
        <input
          className="text-[#838383] text-xs font-semibold bg-transparent focus:outline-none"
          placeholder="Description (optional)"
        />
      </div>
      {/* make triangle */}
      <div className="flex w-full md:w-3/4 mt-1  justify-center">
        <div className="triangle-up"></div>
      </div>
      <div className="bg-black p-2 w-full md:w-3/4 rounded-lg">
        <div className="flex justify-between">
          <div className="flex items-center gap-3">
            <div className="p-1 rounded-full bg-[#47c3fa] h-fit flex items-center">
              <PollIcon className="text-white" style={{ fontSize: "1.2rem" }} />
            </div>
            <div className="text-[#ff00ff] text-sm font-semibold">POLL</div>
          </div>
          <div className="flex gap-2 justify-end items-center">
            <ContentCopyIcon
              className="text-[#ffffff] cursor-pointer"
              style={{ fontSize: "1rem" }}
            />
            <DeleteForeverIcon
              className="text-[#ffffff] cursor-pointer"
              style={{ fontSize: "1rem" }}
            />
            <KeyboardArrowUpIcon
              className="text-[#ffffff] cursor-pointer"
              style={{ fontSize: "1rem" }}
            />
          </div>
        </div>
        <div className="border-t border-t-[#ffffff] w-full my-2"></div>
        <div className="flex flex-col gap-3">
          <span className="text-sm font-semibold">Task type</span>
          <div className="flex gap-4 px-6 justify-start">
            <button className="bg-[#BC04BE] px-5 py-2 rounded-md font-semibold flex gap-2 items-center">
              <PollIcon className="" style={{ fontSize: "1rem" }} />
              Poll
            </button>
            <button className="bg-[#3F0140] px-5 py-2 rounded-md font-semibold flex gap-2 items-center">
              <QuizIcon className="" style={{ fontSize: "1rem" }} />
              Quiz
            </button>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-1">
                <span className="text-white font-semibold text-xs">
                  Automatic validation
                </span>
                <span className="text-[#838383] text-xs">
                  Once submited, the claims is auto-validated and skips review
                </span>
              </div>
              <div className="">
                <FormControlLabel
                  sx={{
                    display: "block",
                  }}
                  control={
                    <Switch
                      checked={loading2}
                      onChange={() => setLoading2(!loading2)}
                      name="loading"
                      color="primary"
                    />
                  }
                />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-1">
                <span className="text-white font-semibold text-xs">
                  Multiple selection
                </span>
                <span className="text-[#838383] text-xs">
                  Allow users to select multiple options.
                </span>
              </div>
              <div className="">
                <FormControlLabel
                  sx={{
                    display: "block",
                  }}
                  control={
                    <Switch
                      checked={loading4}
                      onChange={() => setLoading4(!loading4)}
                      name="loading"
                      color="primary"
                    />
                  }
                />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-1">
                <span className="text-white font-semibold text-xs">
                  “Other’’ option
                </span>
                <span className="text-[#838383] text-xs">
                  Allow users to enter a custom option.
                </span>
              </div>
              <div className="">
                <FormControlLabel
                  sx={{
                    display: "block",
                  }}
                  control={
                    <Switch
                      checked={loading3}
                      onChange={() => setLoading3(!loading3)}
                      name="loading"
                      color="primary"
                    />
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Quiz = ({ i, data }) => {
  const [loading4, setLoading4] = useState(true);

  const [clicked, setClicked] = useState(false);
  const [formData, setFormData] = useState({
    task_type: "quiz",
  });
  useEffect(() => {
    data(formData, i);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      files: [...e.target.files],
    });
  };

  const handleClick = () => {
    setClicked(!clicked);
  };
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageSelection = (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      const reader = new FileReader(); // FileReader to read the file
      reader.onload = (e) => {
        setSelectedImage(e.target.result); // Set the selected image as the base64 data URI
      };
      reader.readAsDataURL(file); // Read the selected file as a data URL
    }
  };
  return (
    <div className="flex flex-col justify-center">
      <div className="border border-[#838383] rounded-xl p-3 bg-transparent w-full md:w-3/4 flex flex-col gap-4 h-28 ">
        <span className="text-white font-semibold text-xs">
          Type your instructions or a question here
        </span>
        <input
          className="text-[#838383] text-xs font-semibold bg-transparent focus:outline-none"
          placeholder="Description (optional)"
          name="description"
          onChange={handleChange}
          value={formData.description}
        />
        <div className="flex gap-3">
          <button className="w-2/5 rounded-md bg-[#BC04BE] text-xs font-semibold p-1">
            Custom option
          </button>
          <button className="w-2/5 rounded-md bg-[#3F0140] text-xs font-semibold p-1">
            Add option
          </button>
        </div>
      </div>
      {/* make triangle */}
      <div className="flex w-full md:w-3/4 mt-1  justify-center">
        <div className="triangle-up"></div>
      </div>
      <div className="bg-black p-2 w-full md:w-3/4 rounded-lg">
        <div className="flex justify-between">
          <div className="flex items-center gap-3">
            <div className="p-1 rounded-full bg-[#c55402] h-fit flex items-center">
              <QuizIcon className="text-white" style={{ fontSize: "1.2rem" }} />
            </div>
            <div className="text-[#ff00ff] text-sm font-semibold">Quiz</div>
          </div>
          <div className="flex gap-2 justify-end items-center">
            <ContentCopyIcon
              className="text-[#ffffff] cursor-pointer"
              style={{ fontSize: "1rem" }}
            />
            <DeleteForeverIcon
              className="text-[#ffffff] cursor-pointer"
              style={{ fontSize: "1rem" }}
            />
            <KeyboardArrowUpIcon
              className="text-[#ffffff] cursor-pointer"
              style={{ fontSize: "1rem" }}
            />
          </div>
        </div>
        <div className="border-t border-t-[#ffffff] w-full my-2"></div>
        <div className="flex flex-col gap-3">
          <span className="text-sm font-semibold">Task type</span>
          <div className="flex gap-4 px-6 justify-start">
            <button className="bg-[#BC04BE] px-5 py-2 rounded-md font-semibold flex gap-2 items-center">
              <PollIcon className="" style={{ fontSize: "1rem" }} />
              Poll
            </button>
            <button className="bg-[#3F0140] px-5 py-2 rounded-md font-semibold flex gap-2 items-center">
              <QuizIcon className="" style={{ fontSize: "1rem" }} />
              Quiz
            </button>
          </div>
          <div className="flex flex-col gap-5 pb-8">
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-1">
                <span className="text-white font-semibold text-xs">
                  Correct answer(s)
                </span>
                <span className="text-[#838383] text-xs">
                  Select one or more correct answers from the option above.
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-1">
                <span className="text-white font-semibold text-xs">
                  Multiple selection
                </span>
                <span className="text-[#838383] text-xs">
                  Allow users to select multiple options.
                </span>
              </div>
              <div className="">
                <FormControlLabel
                  sx={{
                    display: "block",
                  }}
                  control={
                    <Switch
                      checked={loading4}
                      onChange={() => setLoading4(!loading4)}
                      name="loading"
                      color="primary"
                    />
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const Text = ({ i, data }) => {
  const [loading, setLoading] = useState(true);
  const [loading1, setLoading1] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [loading3, setLoading3] = useState(true);
  const [loading4, setLoading4] = useState(true);
  const [formData, setFormData] = useState({
    task_type: "text",
  });
  useEffect(() => {
    data(formData, i);
  }, [formData]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      files: [...e.target.files],
    });
  };

  const fileInputRef = useRef(null);

  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageSelection = (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      const reader = new FileReader(); // FileReader to read the file
      reader.onload = (e) => {
        setSelectedImage(e.target.result); // Set the selected image as the base64 data URI
      };
      reader.readAsDataURL(file); // Read the selected file as a data URL
    }
  };
  return (
    <div className="flex flex-col justify-center">
      <div className="border border-[#838383] rounded-xl p-3 bg-transparent w-full md:w-3/4 flex flex-col gap-4 h-36 ">
        <span className="text-white font-semibold text-xs">
          Type your instructions or a question here
        </span>
        <span className="text-[#838383] text-xs font-semibold bg-transparent focus:outline-none">
          Description (optional)
        </span>
        <input
          className="p-3 text-[#838383] border rounded-lg border-[#05F3DB] text-xs focus:outline-none bg-transparent"
          placeholder="Enter some text here..."
        />
      </div>
      {/* make triangle */}
      <div className="flex w-full md:w-3/4 mt-1  justify-center">
        <div className="triangle-up"></div>
      </div>
      <div className="bg-black p-2 w-full md:w-3/4 rounded-lg">
        <div className="flex justify-between">
          <div className="flex items-center gap-3">
            <div className="p-1 rounded-full bg-[#838383] h-fit flex items-center">
              <StickyNote2Icon
                className="text-white"
                style={{ fontSize: "1.2rem" }}
              />
            </div>
            <div className="text-[#ff00ff] text-sm font-semibold">Text</div>
          </div>
          <div className="flex gap-2 justify-end items-center">
            <ContentCopyIcon
              className="text-[#ffffff] cursor-pointer"
              style={{ fontSize: "1rem" }}
            />
            <DeleteForeverIcon
              className="text-[#ffffff] cursor-pointer"
              style={{ fontSize: "1rem" }}
            />
            <KeyboardArrowUpIcon
              className="text-[#ffffff] cursor-pointer"
              style={{ fontSize: "1rem" }}
            />
          </div>
        </div>
        <div className="border-t border-t-[#ffffff] w-full my-2"></div>
        <div className="flex flex-col gap-3">
          <span className="text-sm font-semibold">Task type</span>
          <div className="flex gap-4 px-6 justify-start flex-wrap">
            <button className="bg-[#BC04BE]  px-5 py-2 rounded-md font-semibold flex gap-2 items-center">
              <StickyNote2Icon className="" style={{ fontSize: "1rem" }} />
              Text
            </button>
            <button className="bg-[#3F0140] px-5 py-2 rounded-md font-semibold flex gap-2 items-center">
              <FormatListNumberedIcon
                className=""
                style={{ fontSize: "1rem" }}
              />
              Number
            </button>
            <button className="bg-[#3F0140] px-5 py-2 rounded-md font-semibold flex gap-2 items-center">
              <QuizIcon className="" style={{ fontSize: "1rem" }} />
              URL
            </button>
          </div>
          <div className="flex flex-col gap-5 pb-8">
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-1">
                <span className="text-white font-semibold text-xs">
                  Automatic validation
                </span>
                <span className="text-[#838383] text-xs">
                  Once submited, the claim is auto-validated and skips review.
                </span>
              </div>
              <div className="">
                <FormControlLabel
                  sx={{
                    display: "block",
                  }}
                  control={
                    <Switch
                      checked={loading4}
                      onChange={() => setLoading4(!loading4)}
                      name="loading"
                      color="primary"
                    />
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const Url = ({ i, data }) => {
  const [loading, setLoading] = useState(true);
  const [loading1, setLoading1] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [loading3, setLoading3] = useState(true);
  const [loading4, setLoading4] = useState(true);
  const [formData, setFormData] = useState({
    task_type: "url",
  });

  useEffect(() => {
    data(formData, i);
  }, [formData]);
  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      request_type: `text , ${loading4} , number`,
    }));
  }, [loading4]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      files: [...e.target.files],
    });
  };

  const fileInputRef = useRef(null);

  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageSelection = (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      const reader = new FileReader(); // FileReader to read the file
      reader.onload = (e) => {
        setSelectedImage(e.target.result); // Set the selected image as the base64 data URI
      };
      reader.readAsDataURL(file); // Read the selected file as a data URL
    }
  };
  return (
    <div className="flex flex-col justify-center">
      <div className="border border-[#838383] rounded-xl p-3 bg-transparent w-full md:w-3/4 flex flex-col gap-4 h-36 ">
        <span className="text-white font-semibold text-xs">
          Type your instructions or a question here
        </span>
        <span className="text-[#838383] text-xs font-semibold bg-transparent focus:outline-none">
          Description (optional)
        </span>
        <input
          className="p-3 text-[#838383] border rounded-lg border-[#05F3DB] text-xs focus:outline-none bg-transparent"
          placeholder="https://"
        />
      </div>
      {/* make triangle */}
      <div className="flex w-full md:w-3/4 mt-1  justify-center">
        <div className="triangle-up"></div>
      </div>
      <div className="bg-black p-2 w-full md:w-3/4 rounded-lg">
        <div className="flex justify-between">
          <div className="flex items-center gap-3">
            <div className="p-1 rounded-full bg-[#ffc107] h-fit flex items-center">
              <InsertLinkIcon
                className="text-white"
                style={{ fontSize: "1.2rem" }}
              />
            </div>
            <div className="text-[#ff00ff] text-sm font-semibold">URL</div>
          </div>
          <div className="flex gap-2 justify-end items-center">
            <ContentCopyIcon
              className="text-[#ffffff] cursor-pointer"
              style={{ fontSize: "1rem" }}
            />
            <DeleteForeverIcon
              className="text-[#ffffff] cursor-pointer"
              style={{ fontSize: "1rem" }}
            />
            <KeyboardArrowUpIcon
              className="text-[#ffffff] cursor-pointer"
              style={{ fontSize: "1rem" }}
            />
          </div>
        </div>
        <div className="border-t border-t-[#ffffff] w-full my-2"></div>
        <div className="flex flex-col gap-3">
          <span className="text-sm  font-semibold">Task type</span>
          <div className="flex flex-wrap gap-4 px-6 justify-start">
            <button className=" bg-[#3F0140] px-5 py-2 rounded-md font-semibold flex gap-2 items-center">
              <StickyNote2Icon className="" style={{ fontSize: "1rem" }} />
              Text
            </button>
            <button className="bg-[#3F0140] px-5 py-2 rounded-md font-semibold flex gap-2 items-center">
              <FormatListNumberedIcon
                className=""
                style={{ fontSize: "1rem" }}
              />
              Number
            </button>
            <button className="bg-[#BC04BE] px-5 py-2 rounded-md font-semibold flex gap-2 items-center">
              <QuizIcon className="" style={{ fontSize: "1rem" }} />
              URL
            </button>
          </div>
          <div className="flex flex-col gap-5 pb-8">
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-1">
                <span className="text-white font-semibold text-xs">
                  Automatic validation
                </span>
                <span className="text-[#838383] text-xs">
                  Once submited, the claim is auto-validated and skips review.
                </span>
              </div>
              <div className="">
                <FormControlLabel
                  sx={{
                    display: "block",
                  }}
                  control={
                    <Switch
                      checked={loading4}
                      onChange={() => setLoading4(!loading4)}
                      name="loading"
                      color="primary"
                    />
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const OpinionScale = ({ i, data }) => {
  const [formData, setFormData] = useState({
    task_type: "opinion-scale",
  });

  const [stepValues, setStepValues] = useState({
    start: "",
    end: "",
  });

  const handleStepsChange = (e) => {
    const { name, value } = e.target;
    setStepValues({
      ...stepValues,
      [name]: value,
    });
    setFormData({
      ...formData,
      steps: `${stepValues.start} to ${stepValues.end}`,
    });
  };

  useEffect(() => {
    data(formData, i);
  }, [formData]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      files: [...e.target.files],
    });
  };

  return (
    <div className="flex flex-col justify-center">
      <div className="border border-[#838383] rounded-xl p-3 bg-transparent w-full md:w-3/4 flex flex-col gap-4 h-36 ">
        <span className="text-white font-semibold text-xs">
          Type your instructions or a question here
        </span>
        <span className="text-[#838383] text-xs font-semibold bg-transparent focus:outline-none">
          Description (optional)
        </span>
        <div className="flex gap-2 flex-wrap  justify-start sm:justify-between">
          <span className="bg-[#12625f] border border-[#05f3db] rounded-md p-1 flex items-center h-fit text-xs px-2 font-bold">
            0
          </span>
          <span className="bg-[#12625f] border border-[#05f3db] rounded-md p-1 flex items-center h-fit text-xs px-2 font-bold">
            1
          </span>
          <span className="bg-[#12625f] border border-[#05f3db] rounded-md p-1 flex items-center h-fit text-xs px-2 font-bold">
            2
          </span>
          <span className="bg-[#12625f] border border-[#05f3db] rounded-md p-1 flex items-center h-fit text-xs px-2 font-bold">
            3
          </span>
          <span className="bg-[#12625f] border border-[#05f3db] rounded-md p-1 flex items-center h-fit text-xs px-2 font-bold">
            4
          </span>
          <span className="bg-[#12625f] border border-[#05f3db] rounded-md p-1 flex items-center h-fit text-xs px-2 font-bold">
            5
          </span>
          <span className="bg-[#12625f] border border-[#05f3db] rounded-md p-1 flex items-center h-fit text-xs px-2 font-bold">
            6
          </span>
          <span className="bg-[#12625f] border border-[#05f3db] rounded-md p-1 flex items-center h-fit text-xs px-2 font-bold">
            7
          </span>
          <span className="bg-[#12625f] border border-[#05f3db] rounded-md p-1 flex items-center h-fit text-xs px-2 font-bold">
            8
          </span>
          <span className="bg-[#12625f] border border-[#05f3db] rounded-md p-1 flex items-center h-fit text-xs px-2 font-bold">
            9
          </span>
          <span className="bg-[#12625f] border border-[#05f3db] rounded-md p-1 flex items-center h-fit text-xs px-2 font-bold">
            10
          </span>
        </div>
      </div>
      {/* make triangle */}
      <div className="flex w-full md:w-3/4 mt-1  justify-center">
        <div className="triangle-up"></div>
      </div>
      <div className="bg-black p-2 w-full md:w-3/4 rounded-lg">
        <div className="flex justify-between">
          <div className="flex items-center gap-3">
            <div className="p-1 rounded-full bg-[#3F0140] h-fit flex items-center">
              <img
                src={opinion}
                className="text-white"
                style={{ fontSize: "1.2rem" }}
              />
            </div>
            <div className="text-[#ff00ff] text-sm font-semibold">
              Opinion Scale
            </div>
          </div>
          <div className="flex gap-2 justify-end items-center">
            <ContentCopyIcon
              className="text-[#ffffff] cursor-pointer"
              style={{ fontSize: "1rem" }}
            />
            <DeleteForeverIcon
              className="text-[#ffffff] cursor-pointer"
              style={{ fontSize: "1rem" }}
            />
            <KeyboardArrowUpIcon
              className="text-[#ffffff] cursor-pointer"
              style={{ fontSize: "1rem" }}
            />
          </div>
        </div>
        <div className="border-t border-t-[#ffffff] w-full my-2"></div>
        <div className="flex flex-col gap-5">
          <span className="text-sm font-semibold">Task type</span>
          <div className="flex gap-4 px-6 justify-start">
            <button className="bg-[#BC04BE] px-5 py-2 rounded-md font-semibold flex gap-2 items-center">
              Numerical
            </button>
            <button className="bg-[#3F0140] px-5 py-2 rounded-md font-semibold flex gap-2 items-center">
              Satrs
            </button>
          </div>
        </div>
        <div className="py-5 flex flex-col gap-3">
          <div className="">
            <span className="text-sm font-semibold">Steps</span>
            <div className="flex gap-3 justify-between my-2 items-center">
              <input
                className="p-2 bg-transparent focus:outline-none rounded-lg border border-[#05F3DB] text-xs w-full"
                placeholder="0"
                name="start"
                value={stepValues.start}
                onChange={handleStepsChange}
              />
              <span className="text-xs font-semibold">to</span>
              <input
                className="p-2 bg-transparent focus:outline-none rounded-lg border border-[#05F3DB] text-xs w-full"
                placeholder="10"
                name="end"
                value={stepValues.end}
                onChange={handleStepsChange}
              />
            </div>
          </div>
          <div className="">
            <div className="flex justify-between">
              <span className="text-sm font-semibold">Steps</span>
              <span className="text-sm font-semibold text-[#838383]">
                Optional
              </span>
            </div>
            <div className="flex gap-3 justify-between my-2 items-center">
              <input
                className="p-2 bg-transparent focus:outline-none rounded-lg border border-[#05F3DB] text-xs w-full"
                placeholder="Not likely at all"
              />
              <span className="text-xs font-semibold">to</span>
              <input
                className="p-2 bg-transparent focus:outline-none rounded-lg border border-[#05F3DB] text-xs w-full"
                placeholder="Very likely"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Task = ({ type, index, submitData }) => {
  switch (type) {
    case "visit-link":
      return <VisitLinkTask i={index} data={submitData} />;
    case "invites":
      return <Invites i={index} data={submitData} />;
    case "api":
      return <API i={index} data={submitData} />;
    case "partnership":
      return <Partnership i={index} data={submitData} />;
    case "discord":
      return <Discord i={index} data={submitData} />;
    case "twitter":
      return <Twitter i={index} data={submitData} />;
    case "telegram":
      return <Telegram i={index} data={submitData} />;
    case "Tiktok":
      return <TikTok i={index} data={submitData} />;
    case "file-upload":
      return <FileUpload i={index} data={submitData} />;
    case "poll":
      return <Poll i={index} data={submitData} />;
    case "quiz":
      return <Quiz i={index} data={submitData} />;
    case "text":
      return <Text i={index} data={submitData} />;
    case "url":
      return <Url i={index} data={submitData} />;
    case "opinion-scale":
      return <OpinionScale i={index} data={submitData} />;
    default:
      return null;
  }
};

const NewQuest = ({setCardNo, setDashboardData,setModule }) => {
  const { loading, error } = useSelector((state) => state?.quests);
  const dispatch = useDispatch();
  const [clicked, setClicked] = useState(false);
  const [claimClick, setClaimClick] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  const user = useSelector((state) => state?.user?.userData?.data);
  const mod = useSelector((state) => state?.module);

  const [data, setData] = useState({
    name: "",
    description: "",
    // difficulty: "",
    recurrence: "",
    cooldown: 0,
    claim_time: "",
    condition: "",
    reward: "100 points",
    sprint: 1,
    status: 1,
    module_id: null,
    user_id: user?.id,
    additionals: [
      {
        link: "",
        task_type: "",
        number_invitation: "1",
        description: "",
        endpoint: "",
        methods: "",
        api_key: "",
        partnership: "",
        request_type: "",
        correct_answer: "",
        star: "",
        steps: "",
        labels: "",
        files: '',
      },
    ],
  });

  const setFormAdditionalData = (newData, index) => {
    setData((prevData) => {
      const updatedAdditionals = [...prevData.additionals];

      // Ensure the array has enough length
      while (updatedAdditionals.length <= index) {
        updatedAdditionals.push(null);
      }

      // Update the specific index with new data
      updatedAdditionals[index] = newData;

      return {
        ...prevData,
        additionals: updatedAdditionals,
      };
    });
  };
  useEffect(() => {
    setCardNo(1);
  }, []);
  const [tasks, setTasks] = useState([]);
  const [isQuestModalOpen, setIsQuestModalOpen] = useState(false);
  const maxTasks = 5;

  const handleAddTask = (taskType) => {
    if (tasks.length < maxTasks) {
      setTasks([...tasks, { type: taskType, id: Date.now() }]);
      setIsQuestModalOpen(true);
    }
  };

  const [errors, setErrors] = useState({});

  const validateFields = () => {
    let tempErrors = {};
    if (!data.name) tempErrors.name = "Name is required";
    if (!data.description) tempErrors.description = "Description is required";
    // if (!data.difficulty) tempErrors.difficulty = "Difficulty is required";
    if (!data.recurrence) tempErrors.recurrence = "Recurrence is required";
    if (!data.cooldown) tempErrors.cooldown = "Cooldown is required";
    if (!data.claim_time) tempErrors.claim_time = "Claim limit is required";
    if (!data.condition) tempErrors.condition = "Condition is required";
    if (!data.reward) tempErrors.reward = "Reward is required";
    if (!data.module_id) tempErrors.module_id = "Module is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const publish = (datas) => {
    if (!validateFields()) {
      console.log("Please fill all required fields.");
      return;
    }

    console.log("quest publishing", datas);
    dispatch(createQuest(datas))
      .unwrap()
      .then((res) => {
        //navigate to current communties module page
        if (res.success) {
          setModule(-1);
          setDashboardData(0);
          setCardNo(0);
        }
      })
      .catch((err) => console.log(err)); //need to handle error
  };

  const handleClaimClick = () => {
    setClaimClick(!claimClick);
  };

  return (
    <>
      <div className=" justify-center flex-col md:flex-row gap-[0.1rem] flex fixed w-full lg:w-[75%] h-full top-0 right-0">
        <div className="w-full  text-white bg-[#20212a] overflow-y-auto max-h-screen  md:h-screen pb-40">
          <header className="flex justify-between gap-4 p-4">
            <div className="flex justify-start gap-3">
              <div className="cursor-pointer">
                <span className="text-[#838383] text-md font-semibold">
                  Quest / Rewards section
                </span>
                <KeyboardArrowDownIcon className="text-[#838383]" />
              </div>
              <div className="cursor-pointer">
                <span className="text-white text-md font-semibold">
                  Untitled quest
                </span>
                <KeyboardArrowDownIcon className="text-white" />
              </div>
            </div>
            <div className="hidden md:flex justify-end gap-3 ">
              <div className=" h-fit relative bg-transparent border border-[#05F3DB] rounded-lg p-1 flex px-2 w-fit items-center justify-center gap-1 cursor-pointer">
                <RemoveRedEyeIcon
                  className="text-[#05F3DB]"
                  style={{ fontSize: "1rem" }}
                />
              </div>
              <div className="h-fit relative bg-[#BC04BE] border border-[#BC04BE] rounded-lg p-1 flex  w-fit items-center justify-center gap-1 cursor-pointer px-2">
                <span
                  onClick={() => publish(data)}
                  className="text-white text-xs lg:text-nowrap"
                >
                  Publish
                </span>

                <KeyboardArrowDownIcon
                  className="text-white"
                  style={{ fontSize: "1rem" }}
                />
              </div>
            </div>
          </header>
          <div className="pt-12 px-6 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <span className="text-2xl font-bold">
                <input
                  type="text"
                  name="name"
                  value={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                  className={`bg-transparent font-semibold text-[#838383] focus:outline-none p-2.5 rounded-xl text-xl ${
                    errors.name ? "border-red-500 border-2" : ""
                  }`}
                  placeholder="Quest name"
                />
              </span>
              <span className="text-sm text-[#838383] font-semibold">
                <input
                  type="text"
                  name="description"
                  value={data.description}
                  onChange={(e) =>
                    setData({ ...data, description: e.target.value })
                  }
                  className={`bg-transparent font-semibold text-[#838383] focus:outline-none p-2.5 rounded-xl ${
                    errors.description ? "border-red-500 border-2" : ""
                  }`}
                  placeholder="Add Quest description...."
                />
              </span>
            </div>

            <div
              onClick={() => {
                if (tasks.length < maxTasks) {
                  setIsQuestModalOpen(true);
                }
                console.log(isQuestModalOpen);
              }}
              className="flex justify-start gap-3 rounded-md border border-[#05F3DB] border-dashed p-2 w-full md:w-3/4 items-center"
            >
              <div className="rounded-lg h-fit border flex items-center border-[#05F3DB] p-1 bg-[#12625f] cursor-pointer">
                <AddIcon className="text-white" />
              </div>
              <div className="flex gap-1 flex-col">
                <span className="text-md text-white font-semibold">
                  Add task ({tasks.length}/{maxTasks})
                </span>
                <span className="text-xs font-semibold text-[#838383]">
                  Question, visit link, file upload...
                </span>
              </div>
            </div>
            {tasks.map((task, index) => (
              <Task
                key={task.id}
                type={task.type}
                submitData={setFormAdditionalData}
                index={index}
              />
            ))}
          </div>
        </div>
        <div className="w-full md:w-[35%] bg-[#20212a] overflow-x-auto max-h-screen hidden md:block">
          <header className="flex justify-between gap-2 bg-[#191a1e] p-6 py-3 md:p-3">
            <div className="border rounded-md border-[#05F3DB] p-1 px-4 items-center cursor-pointer">
              <SortIcon className="text-[#05F3DB]" />
              <span className="text-[#05F3DB] text-xs">Properties</span>
            </div>
            <div className="px-4">
              <ManageSearchIcon className="text-[#05F3DB] items-center cursor-pointer" />
              <span className="text-[#05F3DB] text-xs">Results</span>
            </div>
          </header>
          <div className="p-6 md:p-3 gap-6 flex flex-col justify-start ">
            <div className="flex justify-start  text-white items-center">
              <div className=" items-center gap-1 flex w-1/2">
                <LoopIcon
                  className="text-xs font-semibold"
                  style={{ fontSize: "1.2rem" }}
                />
                <span className="text-xs font-semibold">Recurrence<span className="text-red-500">*</span></span>
              </div>
              <div className="text-xs font-semibold w-1/2">
                {/* take a user input and update the data.recurrence */}
                <select
                  name="recurrence"
                  value={data.recurrence}
                  onChange={(e) =>
                    setData({ ...data, recurrence: e.target.value })
                  }
                  className={`w-24 bg-transparent text-xs font-semibold text-[#838383] focus:outline-none p-2.5 rounded-xl ${
                    errors.recurrence ? "border-red-500 border-2" : ""
                  }`}
                >
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                </select>
              </div>
            </div>
            <div className="flex justify-start  text-white items-center">
              <div className=" items-center gap-1 flex w-1/2">
                <HourglassTopIcon
                  className="text-xs font-semibold"
                  style={{ fontSize: "1.2rem" }}
                />
                <span className="text-xs font-semibold">Cooldown<span className="text-red-500">*</span></span>
              </div>
              <div className="text-xs font-semibold w-1/2">
                <select
                  name="recurrence"
                  value={data.cooldown}
                  onChange={(e) =>
                    setData({ ...data, cooldown: e.target.value })
                  }
                  className={`w-24 bg-transparent text-xs font-semibold text-[#838383] focus:outline-none p-2.5 rounded-xl ${
                    errors.cooldown ? "border-red-500 border-2" : ""
                  }`}
                >
                  <option value="none">None</option>
                  <option value="1 minute">1 minute</option>
                  <option value="5 minutes">5 minutes</option>
                  <option value="30 minutues">30 minutes</option>
                  <option value="1 hour">1 hour</option>
                  <option value="1 day">1 day</option>
                  <option value="1 week">1 week</option>
                  <option value="1 month">1 month</option>
                  <option value="no retry">No retry</option>
                </select>
              </div>
            </div>
            <div className="flex justify-start  text-white items-center">
              <div className=" items-center gap-1 flex w-1/2">
                <img
                  src={notequal}
                  className="text-xs font-semibold"
                  style={{ fontSize: "1.2rem" }}
                />
                <span className="text-xs font-semibold">Claim limit<span className="text-red-500">*</span></span>
              </div>
              <div className=" items-center gap-1 flex w-1/2">
                <input
                    type="text"
                    name="claim_time"
                    value={data.claim_time}
                    onChange={(e) =>
                      setData({ ...data, claim_time: e.target.value })
                    }
                    className={`w-24 bg-transparent text-xs font-semibold text-[#838383] focus:outline-none p-2.5 rounded-xl ${
                      errors.claim_time ? "border-red-500 border-2" : ""
                    }`}
                    placeholder="10"
                    maxLength="4"
                  />
              </div>
            </div>
            <div className="flex  text-white justify-between">
              <div className=" items-center gap-1 flex">
                <CheckCircleIcon
                  className="text-xs font-semibold"
                  style={{ fontSize: "1.2rem" }}
                />
                <span className="text-xs font-semibold">Condition<span className="text-red-500">*</span></span>
              </div>

              <div className=" items-center gap-1 flex">
                {/* <AddIcon
                  className="text-xs font-semibold"
                  style={{ fontSize: "1.2rem" }}
                /> */}
                <select
                  name="condition"
                  value={data.condition}
                  onChange={(e) =>
                    setData({ ...data, condition: e.target.value })
                  }
                  className={`w-24 bg-transparent text-xs font-semibold text-[#838383] focus:outline-none p-2.5 rounded-xl ${
                    errors.condition ? "border-red-500 border-2" : ""
                  }`}
                  placeholder="Add Condition"
                >
                  <option value="level">Level</option>
                  <option value="role">Role</option>
                  <option value="nft">NFT</option>
                  <option value="quest">Quest</option>
                  <option value="date">Date</option>
                </select>
              </div>
            </div>
            <div className="flex justify-between  text-white items-center">
              <div className=" items-center gap-1 flex w-2/5">
                <CardGiftcardIcon
                  className="text-xs font-semibold"
                  style={{ fontSize: "1.2rem" }}
                />
                <span className="text-xs font-semibold">Reward<span className="text-red-500">*</span></span>
              </div>
              <div className="flex gap-1 flex-col justify-start ">
                <span className="text-xs font-semibold">
                  <input
                    type="text"
                    name="reward"
                    value={data.reward}
                    onChange={(e) =>
                      setData({ ...data, reward: e.target.value })
                    }
                    className={`w-24 bg-transparent text-xs font-semibold text-[#838383] focus:outline-none p-2.5 rounded-xl ${
                      errors.reward ? "border-red-500 border-2" : ""
                    }`}
                    placeholder="100 points"
                  />
                </span>
              </div>
            </div>
            <div className="flex justify-start text-white items-center">
              <div className="items-center gap-2 flex w-1/2">
                <ArticleIcon
                  className="text-xs font-semibold"
                  style={{ fontSize: "1.2rem" }}
                />
                <span className="text-xs font-semibold">Module<span className="text-red-500">*</span></span>
              </div>
              <div className="items-center gap-1 flex w-1/2">
                <span className="text-xs font-semibold">
                  <select
                    name="module_id"
                    value={data.module_id}
                    onChange={(e) =>
                      setData({ ...data, module_id: e.target.value })
                    }
                    className={`w-24 bg-transparent text-xs font-semibold text-[#838383] focus:outline-none p-2.5 rounded-xl ${
                      errors.module_id ? "border-red-500 border-2" : ""
                    }`}
                  >
                    {mod?.modules?.length > 0 &&
                      mod.modules.map((module) => (
                        <option value={module.id} key={module.id}>
                          {module.title}
                        </option>
                      ))}
                  </select>
                </span>
              </div>
            </div>

            {/* <div className="flex justify-start  text-white items-center">
              <div className=" items-center gap-2 flex w-1/2">
                <ScheduleIcon
                  className="text-xs font-semibold"
                  style={{ fontSize: "1.2rem" }}
                />
                <span className="text-xs font-semibold">Sprint<span className="text-red-500">*</span></span>
              </div>
              <div className=" items-center gap-1 flex w-1/2">
                <AddIcon
                  className="text-xs font-semibold"
                  style={{ fontSize: "1.2rem" }}
                />
                <span className="text-xs font-semibold">Add Sprint</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {isQuestModalOpen && (
        <QuestModal
          setQuestModal={setIsQuestModalOpen}
          onAddTask={handleAddTask}
        />
      )}
    </>
  );
};

export default NewQuest;
