import React, { useEffect, useState, useCallback } from "react";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import LanguageIcon from "@mui/icons-material/Language";
import CloseIcon from "@mui/icons-material/Close";
import ClipLoader from "react-spinners/ClipLoader";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { currentUser } from "../slice/Userslice";
import { community } from "../slice/Communities";
import panda from "../assets/section2/panda.png"; // Make sure the path is correct

const Sidebar = ({ selectedCommunityId, handleCommunityClick }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchActive, setSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { communityData, loading } = useSelector((state) => state?.community);
  const { userData } = useSelector((state) => state?.user);

  const handleSearchIconClick = () => {
    setSearchActive(true);
  };

  const handleSearchCloseClick = () => {
    setSearchActive(false);
    setSearchQuery("");
  };

  const filteredCommunities = communityData?.data?.filter((community) =>
    community.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    dispatch(currentUser())
      .unwrap()
      .then((result) => {
        if (result.success) {
          dispatch(community(result.data.id));
        }
      })
      .catch((error) => {
        console.error("Error fetching current user:", error);
      });
  }, [dispatch]);

  useEffect(() => {
    if (!selectedCommunityId && communityData?.data?.length > 0) {
      const initialCommunity = communityData.data[0];
      handleCommunityClick(
        initialCommunity.id,
        initialCommunity.user_id === userData?.data?.id,
        initialCommunity.name
      );
    }
  }, [communityData, selectedCommunityId, handleCommunityClick, userData]);

  return (
    <div
      className={`transition-all duration-300 flex flex-col gap-5 h-full bg-[#20212A] py-20 lg:py-10 overflow-x-hidden overflow-y-auto left-0 top-0 ${
        searchActive ? "w-[98949px]" : "w-20"
      }`}
    >
      <div className="cursor-pointer ml-2 border-[#0db1a3] border-4 p-2 flex items-center justify-start rounded-xl w-[80%] bg-[#03A494]">
        {searchActive ? (
          <div className="flex items-center w-full">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent text-white flex-grow outline-none px-2"
              placeholder="Search..."
            />
            <CloseIcon
              className="text-white cursor-pointer"
              onClick={handleSearchCloseClick}
            />
          </div>
        ) : (
          <SearchIcon className="text-white" onClick={handleSearchIconClick} />
        )}
      </div>
      {loading ? (
        <div role="status">
          <ClipLoader color={"#FFFFFF"} loading={loading} size={50} />
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <div className="grid gap-3">
          {filteredCommunities?.length > 0 ? (
            filteredCommunities.map((item, index) => (
              <div
                key={index}
                className="cursor-pointer flex items-center p-1"
                onClick={() =>
                  handleCommunityClick(
                    item.id,
                    item.user_id === userData?.data?.id,
                    item.name
                  )
                }
              >
                <img
                  src={
                    item.logo
                      ? `${import.meta.env.VITE_BASE_URL}${item.logo}`
                      : '/dummy.jpg'
                  }
                  className={`w-[50px] h-[50px] object-cover rounded-full border-4 rounded-full  ${
                  selectedCommunityId === item.id
                      ? "border-[#FF00FF]"
                      : "border-transparent"
                  }`}
                  alt="Community Avatar"
                />
                {searchActive && (
                  <span className="text-white ml-2">{item.name}</span>
                )}
              </div>
            ))
          ) : (
            <div className="cursor-pointer border-[#FF00FF] border-4 p-2 flex items-center justify-center rounded-xl w-fit bg-[#7827a4]">
              <img src='/dummy.jpg' className="text-white" alt="Default Avatar" />
            </div>
          )}
        </div>
      )}
      <div className="cursor-pointer border-[#0db1a3] border-4 p-2 flex items-center justify-center rounded-xl  bg-[#03A494] ml-2 w-[80%]">
        <AddIcon className="text-white" />
        {searchActive ? (
          <p className="text-white ml-2">Create New Community</p>
        ) : (
          ""
        )}
      </div>
      <div className="cursor-pointer border-[#0db1a3] border-4 p-2 flex items-center justify-center rounded-xl  bg-[#03A494] ml-2 w-[80%]">
        <LanguageIcon
          className="text-white"
          onClick={() => navigate("/all-communities")}
        />
        {searchActive ? (
          <p className="text-white ml-2">Discover Community</p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Sidebar;
