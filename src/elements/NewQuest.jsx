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
      <input
        className="border border-[#838383] rounded-lg p-3 bg-transparent w-full md:w-3/4 focus:outline-none"
        name="description"
        value={formData.description}
        onChange={handleChange}
      />
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

const FileUpload = ({ i, data }) => {
  const [loading, setLoading] = useState(true);
  const [loading1, setLoading1] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [loading3, setLoading3] = useState(true);
  const [loading4, setLoading4] = useState(true);
  const [formData, setFormData] = useState({
    task_type: "file-upload",
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

        <div className="flex  mt-1  justify-center ">
          <div className="triangle-up"></div>
        </div>
        <div className="bg-black p-2  rounded-lg w-[90%] mx-auto">
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
              <span className=" text-white text-xs font-semibold">
                Maximum number of files
              </span>

              <span className=" text-white text-xs font-semibold">
                Optional
              </span>
            </div>
            <input
              className="bg-[#141518] border focus:outline-none border-[#05F3DB] rounded-lg p-3 w-full  font-semibold text-xs text-[#838383]"
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
                    checked={loading1}
                    onChange={() => setLoading1(!loading1)}
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

const NewQuest = ({ setCardNo }) => {
  const { loading, error } = useSelector((state) => state.quests);

  const dispatch = useDispatch();
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  const [data, setData] = useState({
    name: "Quest name",
    description: "Quest description",
    difficulty: "easy",
    recurrence: "daily",
    cooldown: 24,
    claim_time: "2024-05-18T00:00:00Z",
    condition: "Complete 3 tasks",
    reward: "100 points",
    module: "Module A",
    sprint: 2,
    status: 1,
    user_id: 1,
    category: "Hello",
    additionals: [],
  });
  console.log(data);
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
  const publish = (datas) => {
    // const sendData = {
    //   name: "Quest name",
    //   description: "Quest description",
    //   difficulty: "easy",
    //   recurrence: "daily",
    //   cooldown: 24,
    //   claim_time: "2024-05-18T00:00:00Z",
    //   condition: "Complete 3 tasks",
    //   reward: "100 points",
    //   module: "Module A",
    //   sprint: 2,
    //   status: 1,
    //   user_id: 1,
    //   category: "Hello",
    //   additionals: [
    //     {
    //       link: "link",
    //       task_type: "link",
    //       number_invitation: "1",
    //       description: "For API",
    //       endpoint: "For API",
    //       methods: "For API",
    //       api_key: "For API",
    //       partnership: "for partnership link",
    //       request_type: "text, url, number",
    //       correct_answer: "for answer",
    //       steps: "0 to 10",
    //       labels: "0 to 10",
    //     },
    //   ],
    // };
    dispatch(createQuest(datas)).catch((err) => console.log(err));
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
              <span className="text-2xl font-bold">Untitled quest</span>
              <span className="text-sm text-[#838383] font-semibold">
                Add description...
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
                <span className="text-xs font-semibold">Recurrence</span>
              </div>
              <div className="text-xs font-semibold w-1/2">None</div>
            </div>
            <div className="flex justify-start  text-white items-center">
              <div className=" items-center gap-1 flex w-1/2">
                <HourglassTopIcon
                  className="text-xs font-semibold"
                  style={{ fontSize: "1.2rem" }}
                />
                <span className="text-xs font-semibold">Cooldown</span>
              </div>
              <div className="text-xs font-semibold w-1/2">None</div>
            </div>
            <div className="flex justify-start  text-white items-center">
              <div className=" items-center gap-1 flex w-1/2">
                <img
                  src={notequal}
                  className="text-xs font-semibold"
                  style={{ fontSize: "1.2rem" }}
                />
                <span className="text-xs font-semibold">Claim limit</span>
              </div>
              <div className=" items-center gap-1 flex w-1/2">
                <AddIcon
                  className="text-xs font-semibold"
                  style={{ fontSize: "1.2rem" }}
                />
                <span className="text-xs font-semibold">Add claim limit</span>
              </div>
            </div>
            <div className="flex justify-start  text-white items-center">
              <div className=" items-center gap-1 flex w-1/2">
                <CheckCircleIcon
                  className="text-xs font-semibold"
                  style={{ fontSize: "1.2rem" }}
                />
                <span className="text-xs font-semibold">Condition</span>
              </div>
              <div className=" items-center gap-1 flex w-1/2">
                <AddIcon
                  className="text-xs font-semibold"
                  style={{ fontSize: "1.2rem" }}
                />
                <span className="text-xs font-semibold">Add Condition</span>
              </div>
            </div>
            <div className="flex justify-start  text-white items-start">
              <div className=" items-center gap-1 flex w-2/5">
                <CardGiftcardIcon
                  className="text-xs font-semibold"
                  style={{ fontSize: "1.2rem" }}
                />
                <span className="text-xs font-semibold">Reward</span>
              </div>
              <div className="flex gap-1 flex-col justify-start ">
                <div className="border border-[#05F3DB] rounded-lg  flex">
                  <span className="cursor-pointer flex items-center text-xs p-[4px]">
                    <StarIcon
                      className="text-[#ff00ff]"
                      style={{ fontSize: "1rem" }}
                    />{" "}
                    100 XP
                  </span>
                  <span className="cursor-pointer flex items-center text-xs border-x border-[#05F3DB] p-[3px]">
                    <LanguageIcon
                      className="text-[#1a6dbf]"
                      style={{ fontSize: "1rem" }}
                    />{" "}
                    All
                  </span>
                  <span className="p-[3px] flex items-center cursor-pointer ">
                    <DeleteOutlineIcon
                      className="text-[#838383] "
                      style={{ fontSize: "1rem" }}
                    />
                  </span>
                </div>
                <div className="border border-[#05F3DB] rounded-lg  flex w-fit mt-2">
                  <span
                    className={`cursor-pointer flex items-center text-xs p-2 relative ${
                      clicked && "bg-[#000000]"
                    }  rounded-s-lg `}
                    onClick={handleClick}
                  >
                    <img
                      src={pencil}
                      className="text-[#ff00ff]"
                      style={{ fontSize: "1rem" }}
                    />
                    <div
                      className={`${
                        clicked ? "absolute md:fixed" : "hidden"
                      }  md:right-28 md:top-80 bg-[#2a2b35] p-3 rounded-md w-64 `}
                    >
                      <div className="flex flex-col gap-2 justify-between ">
                        <span className="text-white font-semibold text-sm">
                          Brief of description to the rewards
                        </span>
                        <div className="border border-[#F05F2B] rounded-xl relative">
                          <input
                            className="text-xs font-semibold text-[#838383] p-3  w-[90%] focus:outline-none bg-transparent"
                            placeholder="A ticket for our upcoming event..."
                          />
                          <WarningAmberIcon className="text-[#F05F2B] absolute right-2 top-2" />
                        </div>
                        <span className="text-sm font-semibold text-[#F05F2B]">
                          String must contain atv least 1 character(s)
                        </span>
                      </div>
                    </div>
                  </span>
                  <span className="cursor-pointer flex items-center text-xs border-x border-[#05F3DB] p-1">
                    <LanguageIcon
                      className="text-[#1a6dbf]"
                      style={{ fontSize: "1rem" }}
                    />{" "}
                    All
                  </span>
                  <span className="p-1 flex items-center cursor-pointer ">
                    <DeleteOutlineIcon
                      className="text-[#838383] "
                      style={{ fontSize: "1rem" }}
                    />
                  </span>
                </div>
                <div className=" items-center gap-2 flex w-1/2 text-[#838383]">
                  <AddIcon
                    className="text-xs font-semibold"
                    style={{ fontSize: "1.2rem" }}
                  />
                  <span className="text-xs font-semibold text-nowrap">
                    Add Reward
                  </span>
                </div>
                <div className=" items-center gap-2 flex w-1/2 text-[#838383]">
                  <DeleteOutlineIcon
                    className="text-xs font-semibold"
                    style={{ fontSize: "1.2rem" }}
                  />
                  <span className="text-xs font-semibold text-nowrap">
                    Clear All
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-start  text-white items-center">
              <div className=" items-center gap-2 flex w-1/2">
                <ArticleIcon
                  className="text-xs font-semibold"
                  style={{ fontSize: "1.2rem" }}
                />
                <span className="text-xs font-semibold">Module</span>
              </div>
              <div className=" items-center gap-1 flex w-1/2">
                <span className="text-xs font-semibold">Rewards section</span>
              </div>
            </div>
            <div className="flex justify-start  text-white items-center">
              <div className=" items-center gap-2 flex w-1/2">
                <ScheduleIcon
                  className="text-xs font-semibold"
                  style={{ fontSize: "1.2rem" }}
                />
                <span className="text-xs font-semibold">Sprint</span>
              </div>
              <div className=" items-center gap-1 flex w-1/2">
                <AddIcon
                  className="text-xs font-semibold"
                  style={{ fontSize: "1.2rem" }}
                />
                <span className="text-xs font-semibold">Add sprint</span>
              </div>
            </div>
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
