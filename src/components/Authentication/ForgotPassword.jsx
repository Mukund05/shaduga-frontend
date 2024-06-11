import React, { useState, useRef } from "react";
import loginbg from "../../assets/section1/loginbg.png";
import MetaData from "../../layouts/MetaData";
import logo from "../../assets/section1/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { forgetPassword, resetPassword } from "../../slice/Userslice";
import { Visibility, VisibilityOff, Cached } from "@mui/icons-material";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const refs = [useRef(), useRef(), useRef(), useRef()];

  const handleSendOtp = async () => {
    if (!email) {
      setErrors({ email: "Email is required" });
      return;
    }
    setErrors({});
    setIsSubmitting(true);
    const resultAction = await dispatch(forgetPassword(email));

    setIsSubmitting(false);
    if (forgetPassword.fulfilled.match(resultAction)) {
      const otpData = resultAction.payload;
      if (otpData.success) {
        setShowModal(true);
      } else if (otpData.message && otpData.message.length > 0) {
        alert(otpData.message);
      }
    } else if (forgetPassword.rejected.match(resultAction)) {
      alert("Failed to send OTP. Please try again.");
    }
  };

  const handleResetPassword = async () => {
    if (newPassword !== confirmNewPassword) {
      setErrors({ confirmNewPassword: "Passwords do not match!" });
      return;
    }

    if (newPassword === "" || confirmNewPassword === "") {
      setErrors({
        newPassword: "New Password is required",
        confirmNewPassword: "Confirm Password is required",
      });
      return;
    }

    const otpValue = otp.join("");
    if (otpValue.length !== 4) {
      setErrors({ otp: "OTP is required" });
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    const resultAction = await dispatch(
      resetPassword({ otp: otpValue, email,password: newPassword })
    );

    setIsSubmitting(false);
    if (resetPassword.fulfilled.match(resultAction)) {
      const response = resultAction.payload;
      if (response.success) {
        console.log("Password reset successfully:", response);
        setShowModal(false);
        navigate("/login");
      } else {
        console.error("Password reset failed:", response.message);
        alert(response.message);
      }
    } else if (resetPassword.rejected.match(resultAction)) {
      const error = resultAction.payload || resultAction.error.message;
      console.error("Error resetting password:", error);
      alert("Failed to reset password. Please try again.");
    }
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 3) {
      refs[index + 1].current.focus();
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === "Backspace" && index > 0 && otp[index] === "") {
      refs[index - 1].current.focus();
    }
  };

  const clearOtp = () => {
    setOtp(["", "", "", ""]);
    refs[0].current.focus();
  };

  const Modal = () => (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-70 z-50 px-2">
      <div className="bg-[#191a1e] p-4 sm:p-6 rounded-lg flex flex-col items-center justify-center gap-y-4">
        <span className="text-[#EE06F2] font-bold text-xl sm:text-2xl">
          Reset Password
        </span>
        <div className="flex flex-col gap-4 ">
          <div className="flex justify-between w-fit gap-5 mx-6">
            {otp.map((value, index) => (
              <input
                key={index}
                className="bg-[#2D2D2D] rounded-md p-2 w-12 text-center font-bold"
                placeholder="-"
                value={value}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                onKeyDown={(e) => handleOtpKeyDown(index, e)}
                ref={refs[index]}
                maxLength={1}
              />
            ))}
          </div>
          {errors.otp && (
            <span className="text-red-500 text-sm">{errors.otp}</span>
          )}
          <button
            className="flex w-fit items-center justify-center bg-[#2D2D2D] rounded-md py-1 px-2 cursor-pointer gap-2 mx-5"
            onClick={clearOtp}
          >
            <Cached className="text-white" />
            <span className="text-white text-sm pr-2">Refresh</span>
          </button>
        </div>
        <div className="flex flex-col gap-3 w-full">
          <label className="flex justify-start text-[#9fa2b4] text-sm font-semibold">
            Email Address
          </label>
          <input
            className="border border-[#F0F1F7] rounded-md p-4 text-sm w-full"
            type="text"
            value={email}
            disabled
          />
        </div>
        <div className="flex flex-col gap-3 w-full">
          <label className="flex justify-start text-[#9fa2b4] text-sm font-semibold">
            Password
          </label>
          <div className="border border-[#F0F1F7] rounded-md bg-[#FCFDFE] flex items-center justify-between">
            <input
              className="p-4 text-[#4B506D] rounded-md text-sm focus:outline-none w-full"
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
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
          {errors.newPassword && (
            <span className="text-red-500 text-sm">{errors.newPassword}</span>
          )}
        </div>
        <div className="flex flex-col gap-3 w-full">
          <label className="flex justify-start text-[#9fa2b4] text-sm font-semibold">
            Confirm Password
          </label>
          <div className="border border-[#F0F1F7] rounded-md bg-[#FCFDFE] flex items-center justify-between">
            <input
              className="p-4 text-[#4B506D] rounded-md text-sm focus:outline-none w-full"
              placeholder="Confirm Password"
              type={showPassword ? "text" : "password"}
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
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
          {errors.confirmNewPassword && (
            <span className="text-red-500 text-sm">
              {errors.confirmNewPassword}
            </span>
          )}
        </div>
        <button
          className="border-[#3F0140] border rounded-lg font-semibold text-xs sm:text-sm p-4 flex justify-center items-center cursor-pointer bg-[#bc04be] text-white w-full"
          onClick={handleResetPassword}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Processing..." : "Reset Password"}
        </button>
      </div>
    </div>
  );

  return (
    <div>
      <MetaData title={"Forgot Password"} />
      <div className="flex justify-center w-full h-screen">
        <div className="bg-[#20212a] flex flex-col gap-3 justify-between items-center w-full lg:w-2/5 sm:w-2/3 h-full px-6  py-6 pt-8">
          <img src={logo} className="w-fit cursor-pointer py-3" />

          <div className="flex flex-col gap-5 w-full">
            <span className="text-[#EE06F2] font-bold text-xl sm:text-2xl text-center">
              Enter Email to reset your Password
            </span>
            <div className="flex flex-col gap-2 w-full">
              <label className="flex justify-start text-[#9fa2b4] text-sm py-2 font-semibold">
                EMAIL ADDRESS
              </label>
              <input
                className="border border-[#F0F1F7] rounded-md p-4 text-[#4B506D] text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email}</span>
              )}
            </div>
            <button
              className="border-[#3F0140] border rounded-lg font-semibold text-xs sm:text-sm p-4 flex justify-center items-center cursor-pointer bg-[#bc04be] text-white w-full text-center"
              onClick={handleSendOtp}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Processing..." : "Continue with email"}
            </button>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex justify-center text-white">
              <span className="text-[#9FA2B4] font-semibold text-sm flex">
                Already have an account?{" "}
                <Link
                  className="text-[#3751FF] font-semibold cursor-pointer text-sm px-1 flex"
                  to="/login"
                >
                  Log in
                </Link>
              </span>
            </div>
            <span className="text-white text-sm text-center py-2">
              By continuing, you agree to the{" "}
              <Link className="text-white underline">Terms of Service</Link> &{" "}
              <Link className="text-white underline">Privacy policy</Link>
            </span>
          </div>
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
      {showModal && <Modal />}
    </div>
  );
};

export default ForgotPassword;
