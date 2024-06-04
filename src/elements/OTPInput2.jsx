import React, { useState, useRef } from "react";

const OTPInput2 = ({ onComplete }) => {
  const [otp, setOTP] = useState(["", "", "", ""]);
  const refs = [useRef(), useRef(), useRef(), useRef()];

  const handleInputChange = (index, value) => {
    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);
    if (value !== "" && index < 3) {
      refs[index + 1].current.focus();
    }
    if (index === 3 && value !== "") {
      onComplete(newOTP.join(""));
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
      <div className="flex justify-between w-fit gap-4 sm:gap-8 mx-auto">
        {otp.map((value, index) => (
          <input
            key={index}
            className="bg-[#2D2D2D] rounded-md p-2 w-12 text-center font-bold border border-[#F05F2B]"
            placeholder="-"
            value={value}
            onChange={(e) => handleInputChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            ref={refs[index]}
            maxLength={1}
          />
        ))}
        {/* Add the refresh button to clear OTP */}
      </div>
      <div className="flex w-fit items-start  p-2 cursor-pointer gap-2 mx-5">
        <div className="text-[#F05F2B] text-sm font-semibold flex items-start text-start">
          OTP is wrong or expired
        </div>
      </div>
    </div>
  );
};

export default OTPInput2;
