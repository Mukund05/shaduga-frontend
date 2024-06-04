import React from "react";
import OTPInput from "../OTPInput";

const OtpModal = ({
  otp,
  handleOTPComplete,
  setShowModal,
  email,
  handleContinueWithEmail,
}) => {
  console.log(email);
  return (
    <div className="flex flex-col gap-8 px-2 sm:px-4">
      <span className="text-[#EE06F2] font-bold text-xl sm:text-2xl  text-center">
        Check your Email
      </span>
      <span className="text-white text-sm text-center">
        Enter the 4-digit code sent to {email}
      </span>
      <div className="w-auto mx-auto">
        <OTPInput value={otp} onComplete={handleOTPComplete} />
      </div>

      <div className="flex gap-4 justify-center">
        <div className="flex justify-center gap-4 rounded-xl p-2 px-4 items-center bg-[#2D2D2D] w-full mx-6 cursor-pointer font-semibold">
          <span
            className="text-white text-sm"
            onClick={() => setShowModal(false)}
          >
            cancel
          </span>
        </div>
        <div
          className="p-2 flex px-4 bg-[#BC04BE] rounded-lg font-semibold text-white cursor-pointer text-center w-full justify-center items-center text-sm"
          onClick={handleContinueWithEmail}
        >
          Next
        </div>
      </div>
    </div>
  );
};

export default OtpModal;
