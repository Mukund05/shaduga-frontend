import React from "react";

const IconInput = ({ icon, placeholder, ...rest }) => {
  return (
    <div className="relative ">
      <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        {icon}
      </span>
      <input
        className="pl-40 pr-4 py-2 absolute left-10 border rounded-lg w-full"
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
};

export default IconInput;
