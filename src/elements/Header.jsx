import React, { useEffect, useState } from "react";
import logo from "../assets/section1/Logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { LogoutUser } from "../slice/Userslice";
import { useDispatch, useSelector } from "react-redux";

const Header = ({ loggedIn, setCreateCommunity, CreateCommunity }) => {
  const { logout } = useSelector((state) => state.user);
  const { userData } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleMenuCloseCreate = () => {
    setCreateCommunity(!CreateCommunity);
    setAnchorEl(null);
  };
  const handleMenuCloseMy = () => {
    navigate("/my-communities");
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAnchorEl(null);
    dispatch(LogoutUser())
      .then(() => {
        alert("logout Successfully!!");
        navigate("/login")
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <header className="flex justify-between px-12 py-6 gap-5 z-20 relative">
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
            {loggedIn ? (
              <div className="flex gap-4 items-center">
                {" "}
                <div
                  className="border-[#3F0140] border rounded-lg font-semibold text-white text-md p-2 px-4 hidden md:flex justify-center items-center cursor-pointer hover:bg-[#bc04be] hover:text-white text-center"
                  onClick={() => setCreateCommunity(!CreateCommunity)}
                >
                  Create a community
                </div>
                <div className="border-[#3F0140] border rounded-lg font-semibold text-white text-md p-2 px-4 hidden md:flex justify-center items-center cursor-pointer hover:bg-[#bc04be] hover:text-white text-center">
                  My communities
                </div>
                <div
                  className="border-[#3F0140] border rounded-lg font-semibold text-white text-md p-2 px-4 hidden md:flex justify-center items-center cursor-pointer hover:bg-[#bc04be] hover:text-white text-center"
                  onClick={handleLogout}
                >
                  Logout
                </div>
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
              style={{ color: "white", cursor: "pointer" }} // Apply custom style to make the icon white
            >
              <MenuIcon />
            </IconButton>
          </div>
        </div>
      </header>
      <Menu
        id="header-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        {loggedIn ? (
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
    </div>
  );
};

export default Header;
