import React, { useEffect, useState, useCallback } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const Screen4 = ({ setFormData, formData, SetScreen, HandleSubmit }) => {
  const [invites, setInvites] = useState([
    { email: "", role: "Editor", isOpen: false },
    { email: "", role: "Editor", isOpen: false },
    { email: "", role: "Editor", isOpen: false },
    { email: "", role: "Editor", isOpen: false },
  ]);

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const toggleDropdown = (index) => {
    setInvites((prevInvites) =>
      prevInvites.map((invite, i) =>
        i === index ? { ...invite, isOpen: !invite.isOpen } : invite
      )
    );
  };

  const handleEmailChange = (index, value) => {
    setInvites((prevInvites) =>
      prevInvites.map((invite, i) =>
        i === index ? { ...invite, email: value } : invite
      )
    );
  };

  const handleRoleChange = (index, role) => {
    const updatedInvites = invites.map((invite, i) =>
      i === index ? { ...invite, role, isOpen: false } : invite
    );
    setInvites(updatedInvites);
    updateFormData(updatedInvites);
  };

  const addInvite = () => {
    const newInvites = [
      ...invites,
      { email: "", role: "Editor", isOpen: false },
    ];
    setInvites(newInvites);
    updateFormData(newInvites);
  };

  const updateFormData = (invites) => {
    const invitationArray = invites
      .filter((invite) => invite.email && invite.role)
      .map((invite) => [invite.email, invite.role]);

    setFormData((prevData) => ({
      ...prevData,
      invitation: invitationArray,
    }));
  };

  const handleClick = (id) => {
    SetScreen(id);
  };

  return (
    <div>
      <div className="flex flex-col py-12 px-8 justify-between h-full items-start gap-12">
        <div className="flex flex-col justify-start gap-3">
          <div className="flex text-white text-lg sm:text-xl font-bold">
            Invite Teammates
          </div>
          <div className="flex text-[#838383] text-xs font-semibold">
            Get the most out of Shagudalabs by inviting your teammates
          </div>
        </div>

        <div className="flex flex-col justify-start gap-2 w-full">
          <div className="flex text-white text-lg font-bold">Send invite</div>

          {invites.map((invite, index) => (
            <div key={index} className="flex gap-3 justify-between">
              <input
                className="focus:outline-none rounded-lg p-2 w-full bg-transparent border border-[#00FFFF] text-md text-white"
                placeholder="Email address"
                value={invite.email}
                onChange={(e) => handleEmailChange(index, e.target.value)}
              />
              <div
                className="rounded-lg p-2 w-fit bg-transparent border border-[#00FFFF] font-semibold text-lg text-white flex justify-between gap-3 items-center cursor-pointer relative px-4"
                onClick={() => toggleDropdown(index)}
              >
                <span className="text-[#838383] text-sm">{invite.role}</span>
                <div className="flex items-center">
                  {invite.isOpen ? (
                    <KeyboardArrowUpIcon className="text-[#838383]" />
                  ) : (
                    <KeyboardArrowDownIcon className="text-[#838383]" />
                  )}
                </div>
                {invite.isOpen && (
                  <div className="bg-[#131619] rounded-md flex justify-center flex-col align-center absolute top-12 w-full left-0 p-2 gap-1 text-md z-30">
                    <div
                      className="text-[#838383] rounded-md hover:bg-[#20212A] p-1"
                      onClick={(e) => {
                        handleRoleChange(index, "Admin");
                        e.stopPropagation();
                      }}
                    >
                      Admin
                    </div>
                    <div
                      className="text-[#838383] rounded-md hover:bg-[#20212A] p-1"
                      onClick={(e) => {
                        handleRoleChange(index, "Editor");
                        e.stopPropagation();
                      }}
                    >
                      Editor
                    </div>
                    <div
                      className="text-[#838383] rounded-md hover:bg-[#20212A] p-1"
                      onClick={(e) => {
                        handleRoleChange(index, "Reviewer");
                        e.stopPropagation();
                      }}
                    >
                      Reviewer
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}

          <div className="flex gap-1 cursor-pointer w-fit" onClick={addInvite}>
            <AddCircleOutlineIcon className="text-[#1976D2]" />
            <div className="flex text-[#1976D2] text-md font-semibold">
              Add more
            </div>
          </div>
        </div>

        <div className="pt-4 flex justify-between gap-3 w-full">
          <div className="w-1/3 p-1 rounded-lg bg-[#111111]"></div>
          <div className="w-1/3 p-1 rounded-lg bg-[#111111]"></div>
          <div className="w-1/3 p-1 rounded-lg bg-[#FF00FF]"></div>
        </div>

        <div className="flex w-[100%]">
          <button
            className="mt-2 p-2 w-2/3 border text-white font-semibold text-sm border-[#bc04be] rounded-lg hover:bg-[#bc04be]"
            onClick={() => {
              handleClick(2);
            }}
          >
            Previous
          </button>
          <button
            className="mt-2 p-2 w-2/3 border text-white font-semibold text-sm border-[#bc04be] rounded-lg hover:bg-[#bc04be]"
            onClick={HandleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Screen4;
