import React, { useEffect, useState } from "react";
import loginbg from "../../assets/section1/loginbg.png";
import MetaData from "../../layouts/MetaData";
import logo from "../../assets/section1/Logo.png";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import discord from "../../assets/section1/discord.png";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser, currentUser } from "../../slice/Userslice";

const Loader = () => (
  <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-[#20212A] bg-opacity-70 z-70">
    <div className="loader"></div>
  </div>
);

const Login = () => {
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.user.login);

  const [formdata, setFormdata] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showScreen, setShowScreen] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
    console.log(formdata);
  };

  useEffect(() => {
    if (success) {
      setShowScreen(true);
      setTimeout(() => {
        setShowScreen(false);
        navigate("/my-communities");
      }, 1500);
    }
  }, [success, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    if(!formdata.email || !formdata.password){
      alert("Please enter email and password");
      return;
    }
    dispatch(LoginUser(formdata)).unwrap()
      .then(() => {
        dispatch(currentUser());
      })
      .catch((err) => {
        console.log(err);
        alert(error.message);
      });
  };

  const Redirect = () => {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-[#20212A] bg-opacity-70 z-70">
        <div className="bg-[#000000] w-full h-full p-3 sm:p-5 flex flex-col items-center justify-center gap-y-2 relative">
          <div className="flex gap-4 flex-col justify-center items-center z-50">
            <img
              src={logo}
              className="w-40 sm:w-60 cursor-pointer py-3"
              onClick={() => navigate("/demo")}
            />
            <span className="text-white text-lg font-semibold">
              Redirecting...
            </span>
          </div>{" "}
        </div>
      </div>
    );
  };

  return (
    <div>
      <MetaData title={"Login"} />
      <div className="flex justify-center w-full h-screen">
        <div className="bg-[#20212a] flex flex-col gap-3 justify-center items-center w-full md:w-2/5 h-full px-16 xs:px-6 py-6 pt-8">
          <img
            src={logo}
            className="w-fit cursor-pointer py-3 pb-6"
            onClick={() => navigate("/demo")}
          />

          <div className="flex flex-col gap-2 justify-center items-center">
            <span className="text-[#9fa2b4] font-semibold text-sm text-center">
              Enter your email and password below
            </span>
          </div>
          <Link className="rounded-lg text-[] font-lg sm:text-xl flex justify-center px-6 bg-[#2D2D2D] p-1 w-full gap-5 items-center">
            <img src={discord} alt="" className="w-fit" />
            <span className="text-white font-semibold text-sm text-center">
              Continue with Discord
            </span>
          </Link>
          <div className="w-full flex justify-center gap-2 items-center">
            <span className="border-b border-white flex-grow"></span>
            <span className="text-white">OR</span>
            <span className="border-b border-white flex-grow"></span>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label className="flex justify-start text-[#9fa2b4] text-sm font-semibold">
              Email
            </label>
            <input
              className="border border-[#F0F1F7] rounded-md p-2 text-[#4B506D] text-sm focus:outline-none"
              placeholder="Email address"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-3 w-full">
            <div className="flex justify-between items-end">
              <label className="flex justify-start text-[#9fa2b4] text-sm font-semibold ">
                Password
              </label>
              <span className="text-[#9fa2b4] text-sm font-semibold cursor-pointer" onClick={()=>navigate("/forget-password")}>
                Forgot password?
              </span>
            </div>
            <div className="border border-[#F0F1F7] rounded-md bg-[#FCFDFE] flex items-center justify-between">
              {" "}
              <input
                className="p-2 text-[#4B506D] rounded-md text-sm focus:outline-none"
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                name="password"
                onChange={handleChange}
              />
              <div
                className="cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <Visibility
                    className="text-[#9FA2B4] bg-transparent pr-2 "
                    style={{ fontSize: "2rem" }}
                  />
                ) : (
                  <VisibilityOff
                    className="text-[#9FA2B4] bg-transparent pr-2 "
                    style={{ fontSize: "2rem" }}
                  />
                )}
              </div>
            </div>
          </div>
          <button
            onClick={handleLogin}
            className="border-[#3F0140] border rounded-lg font-semibold text-xs sm:text-sm p-2 flex justify-center items-center cursor-pointer bg-[#bc04be] text-white w-full"
          >
            Log in
          </button>
          <div className="h-full flex items-end justify-end text-white">
            <span className="text-[#9FA2B4] font-semibold text-sm flex">
              Don’t have an account?{" "}
              <Link
                className="text-[#3751FF] font-semibold cursor-pointer text-sm px-1"
                to="/sign-up"
              >
                Sign up
              </Link>
            </span>
          </div>
          <span className="text-white text-sm text-center py-2">
            By continuing, you agree to the{" "}
            <Link className="text-white underline">Terms of Service</Link> &{" "}
            <Link className="text-white underline">Privacy policy</Link>
          </span>
        </div>
        <div className="relative w-fit xs:w-full h-full">
          <img
            src={loginbg}
            className="absolute inset-0 w-full h-full object-cover"
            alt="Login Background"
          />
          <div className="absolute inset-0 left-0 w-full h-full bg-gradient-to-r from-[#0d0d0d] to-transparent opacity-100"></div>
        </div>
      </div>
      {loading && <Loader />}
      {showScreen && <Redirect />}
    </div>
  );
};

export default Login;
