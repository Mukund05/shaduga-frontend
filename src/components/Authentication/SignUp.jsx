import React, { useEffect, useState } from "react";
import loginbg from "../../assets/section1/loginbg.png";
import MetaData from "../../layouts/MetaData";
import logo from "../../assets/section1/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import OtpModal from "../../elements/Modals/OtpModal";
import IncorrectModal from "../../elements/Modals/IncorrectModal";
import CorrectModal from "../../elements/Modals/CorrectModal";
import { useDispatch, useSelector } from "react-redux";
import { sendotp, verifyOtp } from "../../slice/Userslice";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [correctModal, setCorrectModal] = useState(false);
  const [incorrectModal, setIncorrectModal] = useState(false);
  const [otpModal, setOtpModal] = useState(true);
  const [otp, setOtp] = useState(""); // State to hold OTP value
  const [email, setEmail] = useState("");
  const handleContinueWithEmail = () => {
    if(otp === "") {
      alert("Enter otp first");
      return;
    }
    setShowModal(true);
  };

  const handleOTPComplete = async (otpValue, e) => {
    const resultAction = await dispatch(verifyOtp({ otp: otpValue, email }));

    setOtp(otpValue);
    setOtpModal(false);

    setIncorrectModal(false);
    setCorrectModal(false);

    if (verifyOtp.fulfilled.match(resultAction)) {
      const response = resultAction.payload;
      if (response.success) {
        console.log("OTP verified successfully:", response);
        setCorrectModal(true);
      } else {
        console.error("OTP verification failed:", response.message);
        alert(response.message);
        setIncorrectModal(true);
      }
    } else if (verifyOtp.rejected.match(resultAction)) {
      const error = resultAction.payload || resultAction.error.message;
      console.error("Error verifying OTP:", error);
      alert("Failed to verify OTP. Please try again.");
      setIncorrectModal(true);
    }
  };

  const handleSendOtp = async () => {
    const resultAction = await dispatch(sendotp(email));

    if (sendotp.fulfilled.match(resultAction)) {
      const otpData = resultAction.payload;
      if (otpData.success) {
        setShowModal(true);
      } else if (otpData.message && otpData.message.length > 0) {
        alert(otpData.message);
      }
    } else if (sendotp.rejected.match(resultAction)) {
      alert("Failed to send OTP. Please try again.");
    }
  };

  const Modal = () => {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-70 z-50 px-2 ">
        <div className="bg-[#191a1e] p-2 sm:p-4  rounded-lg flex flex-col items-center justify-center gap-y-4">
          {otpModal && (
            <OtpModal
              setShowModal={setShowModal}
              handleContinueWithEmail={handleContinueWithEmail}
              otp={otp}
              handleOTPComplete={handleOTPComplete}
              email={email}
            />
          )}
          {incorrectModal && (
            <IncorrectModal
              handleOTPComplete={handleOTPComplete}
              otp={otp}
              setOtp={setOtp}
              handleSendOtp={handleSendOtp}
              email={email}
            />
          )}
          {correctModal && (
            <CorrectModal setShowModal={setShowModal} email={email} />
          )}
        </div>
      </div>
    );
  };

  
  return (
    <div>
      <MetaData title={"Sign up"} />
      <div className="flex justify-center w-full h-screen">
        <div className="bg-[#20212a] flex flex-col gap-3 justify-between items-center w-full lg:w-2/5 sm:w-2/3 h-full px-6  py-6 pt-8">
          <img
            src={logo}
            className="w-fit cursor-pointer py-3"
            onClick={() => navigate("/demo")}
          />

          <div className="flex flex-col gap-5 w-full">
            <span className="text-[#EE06F2] font-bold text-xl sm:text-2xl  text-center">
              Create your account
            </span>
            <div className="flex flex-col gap-2 w-full">
              <label className="flex justify-start text-[#9fa2b4] text-sm py-2 font-semibold">
                EMAIL ADDRESS
              </label>
              <input
                className="border border-[#F0F1F7] rounded-md p-4 text-[#4B506D] text-sm"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div
              className="border-[#3F0140] border rounded-lg font-semibold  text-xs sm:text-sm p-4 flex justify-center items-center cursor-pointer bg-[#bc04be] text-white w-full text-center"
              onClick={handleSendOtp}
            >
              Continue with email
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className=" flex justify-center text-white">
              <span className="text-[#9FA2B4] font-semibold text-sm flex">
                Already have an account?{" "}
                <Link
                  className="text-[#3751FF] font-semibold cursor-pointer  text-sm px-1 flex"
                  to="/login"
                >
                  Log in
                </Link>
              </span>
            </div>
            <span className="text-white text-sm text-center py-2">
              By continuing, your agree to the{" "}
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

export default SignUp;
