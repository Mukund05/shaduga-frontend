import React, { useEffect, useState } from "react";
import curve from "../assets/section1/curve.png";
import logo from "../assets/section1/Logo.png";
import img from "../assets/section1/headerImg.png";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogoutUser } from "../slice/Userslice";
import Header from "./Header";
import CommunityModal from "./Modals/CommunityModal";

const Navbar = () => {
  const { userData } = useSelector((state) => state.user);
  const { logout } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuCloseMy = () => {
    navigate("/My-communities");
    setAnchorEl(null);
  };
  const handleMenuCloseCreate = () => {
    setAnchorEl(null);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAnchorEl(null);
    dispatch(LogoutUser())
      .then(() => {
        alert("logout Successfully!!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [loggedIn, setLoggedin] = useState(false);
  const [CreateCommunity, setCreateCommunity] = useState(false);

  useEffect(() => {
    if (userData) {
      setLoggedin(true);
    } else {
      setLoggedin(false);
    }
  }, [dispatch, userData]);

  return (
    <div className="relative overflow-hidden">
      <Header
        loggedIn={loggedIn}
        CreateCommunity={CreateCommunity}
        setCreateCommunity={setCreateCommunity}
      />
      {/* <header className="flex justify-between px-12 py-6 gap-5 z-20 relative">
        <div className="w-1/2 flex items-center justify-start">
          <img
            src={logo}
            className="w-36 h-10 cursor-pointer"
            alt="Logo"
            onClick={() => navigate("/demo")}
          />
        </div>
        <div className="flex justify-end  w-1/2 items-center md:pr-8">
          <div className="">
            {userData?.data ? (
              <div className="flex gap-4 items-center">
                {" "}
                <div className="border-[#3F0140] border rounded-lg font-semibold text-white text-md p-2 px-4 hidden md:flex justify-center items-center cursor-pointer hover:bg-[#bc04be] hover:text-white text-center">
                  Create a community
                </div>
                <Link
                  to="/my-communities"
                  className="border-[#3F0140] border rounded-lg font-semibold text-white text-md p-2 px-4 hidden md:flex justify-center items-center cursor-pointer hover:bg-[#bc04be] hover:text-white text-center"
                >
                  My communities
                </Link>
                <button
                  onClick={handleLogout}
                  className="border-[#3F0140] border rounded-lg font-semibold text-white text-md p-2 px-4 hidden md:flex justify-center items-center cursor-pointer hover:bg-[#bc04be] hover:text-white text-center"
                >
                  Logout
                </button>
                <div className="rounded-full p-4  border border-white text-black font-bold text-md bg-[#FF00FF] w-6 h-6 flex items-center justify-center mr-3">
                  {userData?.data?.name &&
                    userData.data.name.substr(0, 1).toUpperCase()}
                </div>
              </div>
            ) : (
              <div className="flex gap-4 items-center w-full">
                {" "}
                <Link
                  to="/login"
                  className="border-[#3F0140] border rounded-lg font-semibold text-white   p-2 px-6 hidden md:flex justify-center items-center cursor-pointer hover:bg-[#bc04be] hover:text-white text-md"
                >
                  Login
                </Link>
                <Link
                  to="/sign-up"
                  className="p-2 hidden md:flex px-4 bg-[#BC04BE] rounded-lg font-semibold text-white cursor-pointer text-center text-md"
                >
                  Create an Account
                </Link>
              </div>
            )}
          </div>
          <div className="md:hidden">
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
              style={{ color: "white", cursor: "pointer" }}
            >
              <MenuIcon />
            </IconButton>
          </div>
        </div>
      </header> */}
      <Menu
        id="header-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        {userData ? (
          <div className="">
            {" "}
            <MenuItem onClick={handleMenuCloseCreate}>
              Create a community
            </MenuItem>
            <MenuItem onClick={handleMenuCloseMy}>My Communities</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </div>
        ) : (
          <div className="">
            <MenuItem onClick={() => navigate("/sign-up")}>
              Create an account
            </MenuItem>
            <MenuItem onClick={() => navigate("/login")}>Login</MenuItem>
          </div>
        )}
      </Menu>
      <div className="flex justify-between sm:px-10 px-4 gap-14 md:gap-5 py-10 relative z-10 flex-col md:flex-row">
        <div className="flex flex-col justify-center items-center sm:px-6 gap-12 md:w-1/2 w-3/4 mx-auto">
          <span className="font-bold text-[2.5rem] sm:text-[3rem] text-white">
            Join us
          </span>
          <span className="text-white text-2xl sm:text-3xl text-center font-bold">
            Be different. Join us and turn fun into something magical
          </span>
          <input
            className="flex w-full  bg-[#2D2D2D] border-[#780c79] border-2 text-white font-semibold rounded-md text-sm px-4 py-3 focus:outline-none"
            placeholder="Search"
          />
        </div>

        <img
          src={img}
          className="w-3/4 md:w-1/2 sm:px-6 mx-auto"
          alt="Header Image"
        />
      </div>
      <img
        src={curve}
        className="absolute top-16 left-16 w-[30rem]"
        alt="Curve"
      />
      <img
        src={curve}
        className="absolute top-4 left-4 w-[25rem] "
        alt="Curve"
      />
      {CreateCommunity && (
        <CommunityModal setCreateCommunity={setCreateCommunity} />
      )}
    </div>
  );
};

export default Navbar;
