import React, { useEffect, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/section1/Logo.png";
import { useDispatch, useSelector } from "react-redux";
import { RegisterUser } from "../../slice/Userslice";
const CorrectModal = ({ setShowModal, email, setCorrectModal }) => {
  const dispatch = useDispatch();

  const { error, success } = useSelector((state) => state.user.registration);

  useEffect(() => {
    if (error) alert(error.message?.email);
  }, [error]);

  const [formData, setFormData] = useState({
    name: "",
    email: email,
    password: "",
    community_id: [],
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [cPassword, setcPassword] = useState("");
  const [showScreen, setShowScreen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (showScreen) {
      // Set showScreen to true
      // After 3 seconds, set showScreen to false and redirect to "/"
      const timer = setTimeout(() => {
        setShowScreen(true);
        setTimeout(() => {
          setShowScreen(false);
          navigate("/");
        }, 3000);
      }, 3000);

      // Clear the timer if the component unmounts or showScreen changes
      return () => clearTimeout(timer);
    }
  }, [showScreen, navigate]);

  const handleSubmit = async () => {
    // Password requirements
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (formData.password !== cPassword) {
      alert("Password and Confirm Password don't match.");
      setPassword("");
      setcPassword("");
    } else if (!formData.password.match(passwordRegex)) {
      alert(
        "Password must be at least 8 characters long and contain at least 1 uppercase letter, 1 number, and 1 special character."
      );
      setPassword("");
      setcPassword("");
    } else {
      try {
        dispatch(RegisterUser(formData));
        // Registration successful
        if (success) {
          alert("Registration successful!");
          setShowScreen(true);
          setShowModal(false);
        }

        setFormData({ name: "", email: "", password: "" });
        setPassword("");
        setcPassword("");
      } catch (error) {
        // Registration failed
        if (error.message) {
          alert(error.message);
        } else {
          alert("Registration failed. Please try again.");
        }
        setPassword("");
        setcPassword("");
      }
    }
  };

  const handleTogglePasswordVisibility = (e) => {
    e.preventDefault(); // Prevent default form submission
    setShowPassword(!showPassword);
  };

  const Screen = () => {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-[#20212A] bg-opacity-70 z-70">
        <div className="bg-[#000000] w-full h-full p-3 sm:p-5 flex flex-col items-center justify-center gap-y-2 relative">
          <div className="flex gap-4 flex-col justify-center items-center z-50">
            <span className="text-[#EE06F2] font-bold text-2xl sm:text-3xl text-center">
              Welcome to
            </span>
            <img
              src={logo}
              className="w-40 sm:w-60 cursor-pointer py-3"
              onClick={() => navigate("/demo")}
            />
            <div
              className="p-2 flex px-4 bg-[#BC04BE] rounded-lg font-semibold text-white cursor-pointer text-center w-full justify-center items-center text-sm mx-4"
              onClick={() => navigate("/login")}
            >
              Get started
            </div>
          </div>{" "}
          {/* Your content */}
          <div className="bg-gradient-to-b from-[#000000] to-[#05F3DB] w-screen h-[50vh] absolute bottom-0 left-0 "></div>{" "}
        </div>
      </div>
    );
  };
  return (
    <div className="flex flex-col gap-3 px-4">
      <span className="w-3/5 mx-auto text-[#EE06F2] font-semibold text-xl   text-center">
        Customize your account
      </span>
      <div className="flex flex-col gap-2 w-full">
        <label className="flex justify-start text-[#9fa2b4] text-sm  font-semibold">
          USERNAME
        </label>
        <input
          className=" focus:outline-none border border-[#F0F1F7] rounded-md p-1 text-[#4B506D] text-sm"
          placeholder="Username"
          onChange={handleChange}
          name="name"
        />
      </div>{" "}
      <div className="flex flex-col gap-4">
        <span className="flex justify-between text-[#EE06F2] font-semibold text-sm sm:text-lg w-auto mx-auto">
          Set a password
        </span>
        <div className="flex flex-col justify-start items-start ">
          <span className="text-white text-sm ">Password must have: </span>
          <span className="text-white text-sm ">Minimum of 8 characters</span>
          <span className="text-white text-sm ">
            At least 1 uppercase letter
          </span>
          <span className="text-white text-sm ">At least 1 number</span>
          <span className="text-white text-sm ">
            At leats 1 special character
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-3 w-full">
        <div className="flex justify-between items-end">
          <label className="flex justify-start text-[#9fa2b4] text-sm  font-semibold ">
            password
          </label>
        </div>
        <div className="border border-[#F0F1F7] rounded-md bg-[#FCFDFE] flex items-center justify-between">
          <input
            className="p-1 text-[#4B506D] rounded-md text-sm focus:outline-none"
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <span
            className="cursor-pointer"
            onClick={handleTogglePasswordVisibility}
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
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-3 w-full">
        <div className="flex justify-between items-end">
          <label className="flex justify-start text-[#9fa2b4] text-sm  font-semibold ">
            Confirm password
          </label>
        </div>
        <div className="border border-[#F0F1F7] rounded-md bg-[#FCFDFE] flex items-center justify-between">
          <input
            className="p-1 text-[#4B506D] rounded-md text-sm focus:outline-none"
            placeholder="Password"
            type={showCPassword ? "text" : "password"}
            value={cPassword}
            onChange={(e) => setcPassword(e.target.value)}
          />
          <span
            className="cursor-pointer"
            onClick={() => setShowCPassword(!showCPassword)}
          >
            {showCPassword ? (
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
          </span>
        </div>
      </div>
      <div className="flex gap-5 justify-center">
        <div className="flex justify-center gap-4 rounded-xl p-2 px-8 items-center bg-[#2D2D2D] w-full  cursor-pointer font-semibold">
          <span
            className="text-white text-sm"
            onClick={() => setShowModal(false)}
          >
            cancel
          </span>
        </div>
        <div
          className="p-2 flex px-8 bg-[#BC04BE] rounded-lg font-semibold text-white cursor-pointer text-center w-full justify-center items-center text-sm"
          onClick={handleSubmit}
        >
          Continue
        </div>
      </div>
      {showScreen && <Screen />}
    </div>
  );
};

export default CorrectModal;
