import React, { useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AddIcon from "@mui/icons-material/Add";
import DescriptionIcon from "@mui/icons-material/Description";
import WidgetsIcon from "@mui/icons-material/Widgets";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ArchiveIcon from "@mui/icons-material/Archive";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CopyAllIcon from "@mui/icons-material/CopyAll";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import EditIcon from "@mui/icons-material/Edit";
import QuestModal from "./Modals/QuestModal";
import { useMediaQuery } from "@react-hook/media-query";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import StarIcon from "@mui/icons-material/Star";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import { questByModule } from "../slice/Quests";
import { deleteModule, fetchModulebyId } from "../slice/ModuleSlice";

const AllQuest = ({
  setShowSidebar,
  showSideBar,
  handleNewQuest,
  handleNewModule,
  setCardNo,
  communityId,
  setModule,
  setQuest
}) => {
  // useEffect(() => {
    // setCardNo(0);
  // }, []);
  const isScreenLessThanLG = useMediaQuery("(max-width: 1023px)");
  const data = useSelector((state) => state?.module);
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);
  const [templateDropdown, setTemplateDropdown] = useState(false);
  const [questModal, setQuestModal] = useState(false);
  const [refresh,setRefresh] = useState(false);
  const navigation = useNavigate();
  const handleMenuClick = (setter) => () => {
    setter((prev) => !prev);
  };
  const [search,setSearch]=useState('');
  //need to handle as too many request are attempting
  useEffect(()=>{
    const fetchModule =async () => {
      await dispatch(fetchModulebyId(communityId)).unwrap();
    }

    fetchModule()
  },[communityId,refresh  ])

  const initialDropdownState = data?.modules?.map(() => ({
    abroadDots: false,
    abroadPlus: false,
  }));

  const [dropdownStates, setDropdownStates] = useState(initialDropdownState);

  const handleDropdownToggle = (index, field) => () => {
    setDropdownStates((prev) =>
      prev.map((item, idx) =>
        idx === index ? { ...item, [field]: !item[field] } : item
      )
    );
  };

  const [handleModuleQuest, setModuleQuest] = useState(false);

  const [activeModuleId, setActiveModuleId] = useState(null);

  const [moduleQuestData, setModuleQuestData] = useState([]);

  const moduleWiseQuest = (id) => {
    setActiveModuleId(null);
    setModuleQuestData([]);
    if (activeModuleId === id) {
      setActiveModuleId(null);
      setModuleQuestData([]);
    } else {
      setModuleQuest(!handleModuleQuest);

      setActiveModuleId(id);

      dispatch(questByModule(id))
        .unwrap()
        .then((data) => {
          setModuleQuestData(data.data);
        });
    }
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const handleModuleDelete = (id) => {
    dispatch(deleteModule(id)).then(()=>{
      setRefresh(!refresh)
    })
  }

  const handleModuleUpdate = (module) => {
    setModule(module)
    handleNewModule();
  }

  const handleQuestUpdate = (quest) => {
    // console.log(quest);
    setQuest(quest);
    handleNewQuest()
  }

  const filteredMembers = data?.modules?.filter((ele) =>
    ele.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative">
      <div
        className="w-fit absolute top-5 left-6 flex lg:hidden z-50 cursor-pointer"
        onClick={() => setShowSidebar(!showSideBar)}
      >
        {!showSideBar ? (
          <MenuIcon className="text-white " />
        ) : (
          <CloseIcon className="text-white " />
        )}
      </div>
      <div className="h-screen bg-[#191a1e]">
        <div className="flex justify-between relative p-4">
          <div
            className={`flex justify-center gap-1 items-center ${
              isScreenLessThanLG && "ml-12"
            }`}
          >
            <span className="text-md font-semibold text-white ">All quest</span>
            <KeyboardArrowDownIcon className="text-white cursor-pointer" />
          </div>
          <div className="hidden md:flex w-2/3 justify-between gap-3 pr-2">
            <div className="text-[#838383] relative bg-transparent border border-[#ff00ff] rounded-lg p-2 flex w-1/3 min-w-1/4 items-center">
              <SearchIcon
                className="text-[#838383] absolute left-2 "
                style={{ fontSize: "1rem" }}
              />
              <input
                className="bg-transparent flex text-start pl-6 text-xs focus:outline-none"
                placeholder="Search for quest"
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
              />
            </div>
            <div className="relative bg-transparent border border-[#05F3DB] rounded-lg p-1 flex w-2/5 items-center justify-center gap-1 cursor-pointer">
              <RemoveRedEyeIcon
                className="text-[#05F3DB]"
                style={{ fontSize: "1rem" }}
              />
              <span className="text-[#05F3DB] text-xs lg:text-nowrap">
                Preview questboard
              </span>
            </div>
            <div
              className="relative bg-[#BC04BE] border border-[#BC04BE] rounded-lg p-1 flex w-2/5 items-center justify-center gap-1 cursor-pointer"
              onClick={() => setTemplateDropdown(!templateDropdown)}
            >
              <span className="text-white text-xs lg:text-nowrap">
                Browse templates
              </span>
              {templateDropdown ? (
                <KeyboardArrowUpIcon
                  className="text-white"
                  style={{ fontSize: "1rem" }}
                />
              ) : (
                <KeyboardArrowDownIcon
                  className="text-white"
                  style={{ fontSize: "1rem" }}
                />
              )}
              {templateDropdown && (
                <div className="absolute bg-[#20212a] top-10 left-0 flex flex-col p-2 gap-4 w-full rounded-md z-10">
                  <div className="flex gap-1">
                    <AddCircleOutlineIcon className="text-white" />
                    <span
                      className="text-white text-sm font-semi-bold"
                      onClick={handleNewQuest}
                    >
                      New quest
                    </span>
                  </div>
                  <div className="flex gap-1">
                    <DescriptionIcon className="text-white" />
                    <span
                      className="text-white text-sm font-semi-bold"
                      onClick={handleNewModule}
                    >
                      New module
                    </span>
                  </div>
                  <div className="flex gap-1">
                    <WidgetsIcon className="text-white" />
                    <span className="text-white text-sm font-semi-bold">
                      Create a sprint
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div
            className="flex md:hidden px-3 items-center cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <CloseIcon className=" text-white" />
            ) : (
              <MenuIcon className=" text-white" />
            )}
          </div>
          {menuOpen && (
            <div className="z-20 absolute w-full top-10 right-0 bg-[#191a1e] p-2 sm:p-3 py-4 flex justify-between sm:justify-center gap-2 sm:gap-4">
              <div className="text-[#838383] relative bg-transparent border border-[#ff00ff] rounded-lg p-2 flex w-1/3 items-center">
                <SearchIcon
                  className="text-[#838383] absolute left-2 "
                  style={{ fontSize: "1rem" }}
                />
                <input
                  className="bg-transparent flex text-start pl-4 text-xs focus:outline-none"
                  placeholder="Search for quest"
                />
              </div>
              <div className="relative bg-transparent border border-[#05F3DB] rounded-lg xs:p-2 p-1 xs:px-4 flex w-fit items-center justify-center gap-1 cursor-pointer">
                <RemoveRedEyeIcon
                  className="text-[#05F3DB]"
                  style={{ fontSize: "1rem" }}
                />
                <span className="text-[#05F3DB] text-xs lg:text-nowrap">
                  Preview questboard
                </span>
              </div>
              <div
                className="relative bg-[#BC04BE] border border-[#BC04BE] rounded-lg xs:p-2 xs:px-4 p-1 flex w-fit items-center justify-center gap-1 cursor-pointer"
                onClick={() => setTemplateDropdown(!templateDropdown)}
              >
                <span className="text-white text-xs lg:text-nowrap">
                  Browse templates
                </span>
                {templateDropdown ? (
                  <KeyboardArrowUpIcon
                    className="text-white"
                    style={{ fontSize: "1rem" }}
                  />
                ) : (
                  <KeyboardArrowDownIcon
                    className="text-white"
                    style={{ fontSize: "1rem" }}
                  />
                )}
                {templateDropdown && (
                  <div className="absolute bg-[#20212a] top-12 left-0 flex flex-col p-2 gap-4 w-full rounded-md z-10">
                    <div className="flex gap-2 justify-start items-center">
                      <AddCircleOutlineIcon className="text-white" />
                      <span
                        className="text-white text-sm font-semi-bold"
                        onClick={handleNewQuest}
                      >
                        New quest
                      </span>
                    </div>
                    <div className="flex gap-2 justify-start items-center ">
                      <DescriptionIcon className="text-white" />
                      <span
                        className="text-white text-sm font-semi-bold"
                        onClick={handleNewModule}
                      >
                        New module
                      </span>
                    </div>
                    <div className="flex gap-2 justify-start items-center ">
                      <WidgetsIcon className="text-white" />
                      <span className="text-white text-sm font-semi-bold">
                        Create a sprint
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        {/* listing of modules getting from data */}
        <div className="w-full flex flex-col gap-1">
          {data?.modules !== undefined &&
            filteredMembers.map((module, index) => (
              <div key={index}>
                <div
                  className="bg-[#20212a] flex justify-between px-6 py-4 cursor-pointer"
                  key={index}
                >
                  <div className="flex justify-start gap-4 items-center">
                    <span className="text-white font-bold text-sm">
                      {module.title}
                    </span>
                    <span className="border-[#05F3DB] text-[#05F3DB] p-2 px-4 flex text-xs border rounded-2xl justify-between font-semibold">
                      {module.quest.length} quests
                    </span>
                  </div>

                  <div className="flex justify-end gap-3 items-center">
                    <div
                      className={`relative p-1 flex rounded-md ${
                        dropdownStates[index]?.abroadDots && "bg-[#191a1e]"
                      } items-center`}
                      onClick={handleDropdownToggle(index, "abroadDots")}
                    >
                      <MoreHorizIcon
                        className="text-white cursor-pointer"
                        style={{ fontSize: "1rem" }}
                      />
                      {dropdownStates[index]?.abroadDots && (
                        <div className="absolute top-10 right-0 w-[10rem] rounded-md p-3 flex flex-col gap-4 bg-[#2a2b35] z-10">
                          <div className="flex gap-2 justify-start cursor-pointer" onClick={() => handleModuleUpdate(module)}>
                            <EditIcon
                              className="text-white"
                              style={{ fontSize: "1rem" }}
                            />
                            <span className="text-white text-xs">Edit</span>
                          </div>
                          <div className="flex gap-2 justify-start cursor-pointer" onClick={() => handleModuleDelete(module.id)}>
                            <DeleteForeverIcon
                              className="text-white"
                              style={{ fontSize: "1rem" }}
                            />
                            <span className="text-white text-xs" >Delete</span>
                          </div>
                          <div className="flex gap-2 justify-start cursor-pointer">
                            <ArchiveIcon
                              className="text-white"
                              style={{ fontSize: "1rem" }}
                            />
                            <span className="text-white text-xs">Archive</span>
                          </div>
                          <div className="flex gap-2 justify-start cursor-pointer">
                            <ContentCopyIcon
                              className="text-white"
                              style={{ fontSize: "1rem" }}
                            />
                            <span className="text-white text-xs">
                              Duplicate
                            </span>
                          </div>
                          <div className="flex gap-2 justify-start cursor-pointer">
                            <DriveFileRenameOutlineIcon
                              className="text-white"
                              style={{ fontSize: "1rem" }}
                            />
                            <span className="text-white text-xs">Rename</span>
                          </div>
                          <div className="flex gap-2 justify-start cursor-pointer">
                            <CopyAllIcon
                              className="text-white"
                              style={{ fontSize: "1rem" }}
                            />
                            <span className="text-white text-xs">
                              Copy Link
                            </span>
                          </div>
                          <div className="flex gap-2 justify-start cursor-pointer">
                            <RemoveRedEyeIcon
                              className="text-white"
                              style={{ fontSize: "1rem" }}
                            />
                            <span className="text-white text-xs text-nowrap">
                              View as a contributor
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                    <div
                      className={`relative p-1 flex rounded-md ${
                        dropdownStates[index]?.abroadPlus && "bg-[#191a1e]"
                      } items-center`}
                      onClick={handleNewQuest}
                    >
                      <AddIcon
                        className="text-white cursor-pointer"
                        style={{ fontSize: "1rem" }}
                      />
                      {/* {dropdownStates[index]?.abroadPlus && (
                        <div className="absolute top-10 right-0 w-[10rem] rounded-md p-3 flex flex-col gap-4 bg-[#2a2b35] z-10">
                          <div className="p-2 rounded-md bg-[#20212a]">
                            <div className="flex gap-2 justify-start cursor-pointer">
                              <ControlPointIcon
                                className="text-white"
                                style={{ fontSize: "rem" }}
                              />
                              <span
                                className="text-white text-xs text-nowrap font-semibold"
                              >
                                New quest
                              </span>
                            </div>
                          </div>
                        </div>
                      )} */}
                    </div>
                    <KeyboardArrowDownIcon
                      className="text-white cursor-pointer modal-opener"
                      style={{ fontSize: "1rem" }}
                      onClick={() => moduleWiseQuest(module?.id)}
                    />
                  </div>
                </div>

                {activeModuleId === module.id &&
                  moduleQuestData.map((quest, index) => {
                    return (
                      <div className="px-6" key={index} onClick={()=>handleQuestUpdate(quest)}>
                        <div className="flex justify-between text-[14px]">
                          <p className="text-white mt-2 py-[5px] px-[10px] border-2 border-grey-500 rounded-xl">
                            {quest.name}
                          </p>

                          <div className="flex gap-2">
                            <div className="rounded-xl cursor-pointer text-[#eee] p-1 border-2 border-stone-500 flex items-center">
                              <RestartAltIcon />
                              {capitalizeFirstLetter(quest.recurrence)}
                            </div>
                            <div className="rounded-xl cursor-pointer text-[#eee] p-1 border-2 border-stone-500 flex items-center">
                              <HourglassBottomIcon />
                              {quest.cooldown}
                            </div>
                            <div className="rounded-xl cursor-pointer text-[#eee] p-1 border-2 border-stone-500 flex items-center">
                              <StarIcon />
                              {quest.reward}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            ))}
        </div>
      </div>
      {questModal && <QuestModal setQuestModal={setQuestModal} />}
    </div>
  );
};

export default AllQuest;
