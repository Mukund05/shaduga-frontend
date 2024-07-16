import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { updateUser, deleteUser } from "../slice/Userslice"; // Assume deleteUser action is available
import { useNavigate } from "react-router-dom";

const EditProfile = ({ user, setShowSidebar, showSideBar }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    name: user?.name || '',
    email: user?.email || '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setData({
        name: user.name || '',
        email: user.email || '',
      });
    }
  }, [user]);

  const getFirstLetter = (name) => {
    if (!name) return ""; // Handle empty or undefined names
    return name.charAt(0).toUpperCase(); // Alternatively, you could use name[0]
  };

  const updateProfile = (id, data) => {
    setLoading(true);
    setError(null);
    dispatch(updateUser({ id: id, data }))
      .unwrap()
      .then((res) => {
        setLoading(false);
        if (res.success) {
          console.log(res.data);
        }
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
        console.log(err);
      });
  };

  const deleteAccount = (id) => {
    setLoading(true);
    setError(null);
    dispatch(deleteUser(id))
      .unwrap()
      .then((res) => {
        setLoading(false);
        if (res.success) {
          console.log("Account deleted successfully");
          localStorage.removeItem("token");
          navigate("/login")
          // Add any additional logic after account deletion
        }
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
        console.log(err);
      });
  };

  return (
    <div className="flex justify-center w-full flex-col">
      <div className="w-full flex-col flex rounded-b-3xl px-16 py-8 bg-gradient-to-r from-[#3F0140] to-[#A303A6] gap-2 relative">
        <div
          className="absolute top-10 left-6 flex sm:hidden z-50"
          onClick={() => setShowSidebar(!showSideBar)}
        >
          {!showSideBar ? (
            <MenuIcon className="text-white " />
          ) : (
            <CloseIcon className="text-white " />
          )}
        </div>
        <span className="font-bold text-xl text-[#ff00ff]">Edit profile</span>
        <span className="font-semibold text-md text-white">
          Manage your profile
        </span>
      </div>
      <div className="p-12 flex flex-col gap-10 justify-start ">
        <div className="flex flex-col gap-2">
          <span className="text-white text-lg font-bold">Avatar</span>
          <div className="border p-2 rounded-full border-[#05F3DB] w-fit cursor-pointer">
            <p className="w-24 h-24 flex items-center justify-center text-5xl text-lime-100">
              {getFirstLetter(user.name)}
            </p>
          </div>
          <span className="text-xs text-[#6e6e6e]">
            Recommended size in 256x256px
          </span>
        </div>
        <div className="flex flex-col gap-2 justify-start w-3/4">
          <span className="text-white text-lg font-bold">Name</span>
          <input
            className="border p-2 rounded-xl text-white border-[#05F3DB] bg-transparent"
            placeholder="Enter your Name"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>
        <div className="flex flex-col gap-2 justify-start w-3/4">
          <span className="text-white text-lg font-bold">E-Mail</span>
          <input
            className="border p-2 rounded-xl text-white border-[#05F3DB] bg-transparent"
            placeholder="Enter your E-Mail"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>
        <div className="p-2 w-full flex justify-end">
          <button
            className="bg-[#828282] text-white text-sm font-semibold p-2 px-4 rounded-md"
            onClick={() => updateProfile(user.id, data)}
            disabled={loading}
          >
            {loading ? "Updating..." : "Update"}
          </button>
        </div>
        {error && <span className="text-red-500">{error}</span>}
        <div className="flex gap-2 sm:w-1/2 flex-col ">
          <button
            className="flex justify-start p-3 px-4 font-semibold w-full text-[#F05F2B] bg-[#20212A] rounded-md"
            onClick={() => deleteAccount(user.id)}
            disabled={loading}
          >
            {loading ? "Deleting..." : "Delete my account"}
          </button>
          <span className="text-[#6e6e6e] text-xs font-semibold">
            Permanently delete the account on all communities
          </span>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
