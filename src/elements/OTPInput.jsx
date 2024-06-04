import React, { useState, useRef } from "react";
import { Cached } from "@mui/icons-material";

const OTPInput = ({ onComplete }) => {
  const [otp, setOTP] = useState(["", "", "", ""]);
  const refs = [useRef(), useRef(), useRef(), useRef()];

  const handleInputChange = (index, value, e) => {
    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);
    if (value !== "" && index < 3) {
      refs[index + 1].current.focus();
    }
    if (index === 3 && value !== "") {
      e.preventDefault();
      onComplete(newOTP.join(""), e);
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && index > 0 && otp[index] === "") {
      refs[index - 1].current.focus();
    }
  };

  const clearOTP = () => {
    setOTP(["", "", "", ""]);
  };

  return (
    <div className="flex flex-col gap-4 ">
      <div className="flex justify-between w-fit gap-5 mx-6">
        {otp.map((value, index) => (
          <input
            key={index}
            className="bg-[#2D2D2D] rounded-md p-2 w-12 text-center font-bold"
            placeholder="-"
            value={value}
            onChange={(e) => handleInputChange(index, e.target.value, e)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            ref={refs[index]}
            maxLength={1}
          />
        ))}
        {/* Add the refresh button to clear OTP */}
      </div>
      <button
        className="flex w-fit items-center justify-center bg-[#2D2D2D] rounded-md py-1 px-2 cursor-pointer gap-2 mx-5"
        onClick={clearOTP}
      >
        <Cached className="text-white" />
        <span className="text-white text-sm pr-2">Refresh</span>
      </button>
    </div>
  );
};

export default OTPInput;
