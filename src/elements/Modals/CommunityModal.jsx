import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Screen1 from "../CommunityScreen.jsx/Screen1";
import Screen2 from "../CommunityScreen.jsx/Screen2";
import Screen3 from "../CommunityScreen.jsx/Screen3";
import Screen4 from "../CommunityScreen.jsx/Screen4";
import DoneIcon from "@mui/icons-material/Done";
import Screen5 from "../CommunityScreen.jsx/Screen5";
import LanguageIcon from "@mui/icons-material/Language";
import PersonIcon from "@mui/icons-material/Person";
import screen5img from "../../assets/section2/screen5.png";
import { useDispatch, useSelector } from "react-redux";
import { newCommunity as newCom } from "../../slice/Communities";
import { useNavigate } from "react-router-dom";

const CommunityModal = ({ setCreateCommunity }) => {
  const dispatch = useDispatch();
  const { success } = useSelector((state) => state.community);
  const [screen, SetScreen] = useState(0);
  const { newCommunity } = useSelector((state) => state.community);
  console.log(newCommunity)
  const navigate = useNavigate();
  const [formData, setFormdata] = useState({
    name: "",
    description: "",
    is_blockchain: 1,
    website: "",
    categories: [],
    invitation: [],
    logo: null,
  });

  useEffect(() => {
  }, [formData.logo]);

  const handleChange = (e) => {
    setFormdata({ ...formData, [e.target.name]: e.target.value });
  };

  const [valid, setValid] = useState(false);
  const validateURL = (url) => {
    const pattern = /^(https:\/\/)?(www\.)?[a-z0-9]+(\.[a-z]{2,})+$/i;
    return pattern.test(url);
  };

  useEffect(() => {
    if (validateURL(formData.website)) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [formData.website]);

  const HandleSubmit = async (e) => {
    e.preventDefault();

    const datas = {
      id: 0,
      name: formData.name,
      logo: formData.logo, //need to send image file object
      description: formData.description,
      categories: formData.categories,
      is_blockchain: 0,
      website: formData.website,
      link: formData.website,
      invitation: formData.invitation,
    };

    // console.log(jsonString, " data");
    const resultAction = dispatch(newCom(datas)).unwrap()
      .then(() => {
        setTimeout(() => {
          SetScreen(4);
        }, [500]);
      })
      .catch((err) => console.log(err, "community error"));
    // if (community:.fulfilled.match(resultAction)) {
    //   SetScreen(4);
    // } else {
    //   console.error("Failed to create community:", resultAction.payload);
    // }
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex justify-start items-center bg-black bg-opacity-70  z-20  transition-all duration-50000`}
    >
      <div className="bg-[#20212A] sm:w-1/2 md:w-2/5 h-full relative overflow-x-auto max-h-screen">
        <div>
          <CloseIcon
            className="absolute top-4 left-4 text-white cursor-pointer"
            onClick={() => setCreateCommunity(false)}
          />
          {screen === 0 && (
            <div className="flex flex-col ">
              <Screen1
                formData={formData}
                setFormdata={setFormdata}
                handleChange={handleChange}
                SetScreen={SetScreen}
              />
            </div>
          )}
          {screen === 1 && (
            <div className="flex flex-col ">
              <Screen2 formData={formData} handleChange={handleChange} SetScreen={SetScreen} />
            </div>
          )}
          {screen === 2 && (
            <div className="flex flex-col ">
              <Screen3 setFormdata={setFormdata} formData={formData} SetScreen={SetScreen} />
            </div>
          )}
          {screen === 3 && (
            <div className="flex flex-col ">
              <Screen4 setFormData={setFormdata} formData={formData} SetScreen={SetScreen} HandleSubmit={HandleSubmit}/>
            </div>
          )}
          {screen === 4 && (
            <div className="flex flex-col ">
              <Screen5 />
              <div className="flex gap-3 w-full justify-between px-8 pb-6">
                <button
                  className="p-2 w-full bg-[#bc04be] border text-white font-semibold text-sm border-[#bc04be] rounded-lg"
                  onClick={() => {
                    navigate(`/cw/${newCommunity?.data?.data?.name}/${newCommunity?.data?.data?.id}/admin`);
                    setCreateCommunity(false)}}
                >
                  Continue to my community
                </button>
              </div>
              <div className="flex sm:hidden sm:w-3/5 h-full justify-center items-center bg-[#20212a]">
                <div className="bg-[#20212A] rounded-2xl p-3 flex flex-col gap-5 w-3/4 items-center justify-center">
                  <img src={screen5img} className="rounded-xl w-fit mx-auto" />
                  <div className="flex  justify-center items-center gap-1">
                    <span className="text-white font-bold text-lg">
                      Pick Dive
                    </span>
                    <span className="text-[#838383] font-semibold text-sm">
                      Pick Dive
                    </span>
                  </div>

                  <div className="flex gap-2 justify-between w-full pb-10">
                    <button className="p-2 w-1/2 bg-[#bc04be] border text-white font-semibold text-sm border-[#bc04be] rounded-lg">
                      Connect to ShagudaLabs
                    </button>
                    <button className="p-2 w-1/2 border text-white font-semibold text-sm border-[#bc04be] rounded-lg">
                      Invite to friends
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {screen == 3 && (
        <div className="hidden sm:flex justify-center items-center sm:w-3/5 h-full gap-6 flex-wrap p-6 overflow-x-auto max-h-screen bg-black">
          <div className="flex border rounded-2xl border-[#FF00FF] p-5 flex-col min-w-1/4 gap-3 h-72 ">
            <div className="text-white font-semibold text-md">Admin</div>
            <div className="flex flex-col justify-start gap-3">
              <div className="flex justify-start gap-2">
                <DoneIcon className="text-[#838383]" />
                <span className="text-[#838383] font-semibold text-sm">
                  Review quests
                </span>
              </div>
              <div className="flex justify-start gap-2">
                <DoneIcon className="text-[#838383]" />
                <span className="text-[#838383] font-semibold text-sm">
                  Create quests
                </span>
              </div>
              <div className="flex justify-start gap-2">
                <DoneIcon className="text-[#838383]" />
                <span className="text-[#838383] font-semibold text-sm">
                  Create sprints
                </span>
              </div>
              <div className="flex justify-start gap-2">
                <DoneIcon className="text-[#838383]" />
                <span className="text-[#838383] font-semibold text-sm">
                  Manage members
                </span>
              </div>
              <div className="flex justify-start gap-2">
                <DoneIcon className="text-[#838383]" />
                <span className="text-[#838383] font-semibold text-sm">
                  Access analytics
                </span>
              </div>
              <div className="flex justify-start gap-2">
                <DoneIcon className="text-[#838383]" />
                <span className="text-[#838383] font-semibold text-sm">
                  Manage community
                </span>
              </div>
            </div>
          </div>
          <div className="flex border rounded-xl border-[#FF00FF] p-5 flex-col min-w-1/4 gap-3 h-72 ">
            <div className="text-white font-semibold text-md">Editor</div>
            <div className="flex flex-col justify-start gap-3">
              <div className="flex justify-start gap-2">
                <DoneIcon className="text-[#838383]" />
                <span className="text-[#838383] font-semibold text-sm">
                  Review quests
                </span>
              </div>
              <div className="flex justify-start gap-2">
                <DoneIcon className="text-[#838383]" />
                <span className="text-[#838383] font-semibold text-sm">
                  Create quests
                </span>
              </div>
              <div className="flex justify-start gap-2">
                <DoneIcon className="text-[#838383]" />
                <span className="text-[#838383] font-semibold text-sm">
                  Create sprints
                </span>
              </div>
              <div className="flex justify-start gap-2">
                <DoneIcon className="text-[#838383]" />
                <span className="text-[#838383] font-semibold text-sm">
                  Manage members
                </span>
              </div>
              <div className="flex justify-start gap-2">
                <DoneIcon className="text-[#838383]" />
                <span className="text-[#838383] font-semibold text-sm">
                  Access analytics
                </span>
              </div>
            </div>
          </div>
          <div className="flex border rounded-xl border-[#FF00FF] p-5 flex-col min-w-1/4 gap-3 h-72 ">
            <div className="text-white font-semibold text-md ">Reviewer</div>
            <div className="flex flex-col justify-start gap-3">
              <div className="flex justify-start gap-2">
                <DoneIcon className="text-[#838383]" />
                <span className="text-[#838383] font-semibold text-sm">
                  Review quests
                </span>
              </div>
              <div className="flex justify-start gap-2">
                <DoneIcon className="text-[#838383]" />
                <span className="text-[#838383] font-semibold text-sm">
                  Claim Quests
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {screen == 4 && (
        <div className="hidden sm:flex sm:w-3/5 h-full justify-center items-center bg-black">
          <div className="bg-[#20212A] rounded-2xl p-4 flex flex-col gap-5 w-2/3 items-center justify-center">
            <img
              src={`${import.meta.env.VITE_BASE_URL}${newCommunity?.data?.data?.logo}`}
              height={80}
              width={80}
              className="rounded-xl  mx-auto"
            />
            <div className="flex flex-col justify-center items-center gap-1">
              <span className="text-white font-bold text-lg">{newCommunity?.data?.data?.name}</span>
              <span className="text-[#838383] font-semibold text-sm">
              {newCommunity?.data?.data?.description}
              </span>
            </div>
            <div className="flex justify-between gap-4">
              <div className="border-[#05F3DB] border rounded-xl font-semibold text-[#05f3db] text-xs sm:text-sm p-2 px-6  flex justify-between items-center cursor-pointer  gap-2">
                {/* {xp} XP */}
                <PersonIcon className="text-[#05f3db]" />
                <div className=""> 01</div>
              </div>
              <div className="border-[#05F3DB] border rounded-xl font-semibold text-white text-xs sm:text-sm p-2  flex justify-between px-6 items-center cursor-pointer  hover:text-white gap-2">
                {/* {hours} Hours */}
                <LanguageIcon className="text-[#05f3db]" />
                <span className="text-[#05f3db]">01</span>
              </div>
            </div>
            <div className="flex gap-2 justify-between w-full pb-10">
              <button className="p-2 w-1/2 bg-[#bc04be] border text-white font-semibold text-sm border-[#bc04be] rounded-lg">
                Connect to ShagudaLabs
              </button>
              <button className="p-2 w-1/2 border text-white font-semibold text-sm border-[#bc04be] rounded-lg">
                Invite to friends
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommunityModal;
