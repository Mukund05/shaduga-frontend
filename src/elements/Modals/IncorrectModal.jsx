import React from "react";
import OTPInput2 from "../OTPInput2";

const IncorrectModal = ({
  handleOTPComplete,
  otp,
  email,
  handleSendOtp,
  setOtp,
}) => {
  const handleClick = () => {
    handleSendOtp();
    setOtp(["", "", "", ""]);
  };

  return (
    <div className="flex flex-col gap-8 ">
      <span className="text-[#EE06F2] font-bold text-xl sm:text-2xl  text-center">
        Check your Email
      </span>
      <div className="flex flex-col justify-center items-center">
        <span className="text-white text-sm font-bold">
          We’ve sent a code to {email}.
        </span>
        <span className="text-white text-sm">
          {" "}
          Please enter the code immediately, as it will soon expire
        </span>
      </div>
      <OTPInput2 value={otp} onComplete={handleOTPComplete} />

      <span className="text-center text-white text-sm font-semibold">
        Can’t find your code? Check the spam folder or{"  "}
        <span className="underline cursor-pointer px-1" onClick={handleClick}>
          resend it.
        </span>
      </span>
    </div>
  );
};

export default IncorrectModal;
