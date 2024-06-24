import React from "react";
import { useSelector } from "react-redux";

const Screen5 = () => {
  const { newCommunity } = useSelector((state) => state.community);
  const handleCopyLink = () => {
    const linkToCopy = newCommunity?.data?.data.link;
    if (linkToCopy) {
      navigator.clipboard
        .writeText(linkToCopy)
        .then(() => {
          console.log("Link copied to clipboard:", linkToCopy);
        })
        .catch((error) => {
          console.error("Failed to copy link:", error);
        });
    }
  };
  return (
    <div>
      <div className="flex flex-col py-12 px-8 justify-between h-full items-start gap-12">
        <div className="flex flex-col justify-start gap-3">
          <div className="flex text-white text-lg sm:text-xl font-bold">
            You’re all set, next create your first quests and launch your
            community.
          </div>
          <div className="flex text-[#838383] text-xs font-semibold">
            You can already share the link beloww to allow your members to
            access your waiting page and pre-register.
          </div>
          <div className="flex flex-col justify-start gap-20">
            <span className="text-white text-lg font-semibold">
              Send invite
            </span>
            <div className="flex gap-3 justify-between">
              <div className=" focus:outline-none rounded-lg p-3 w-full bg-transparent border border-[#00FFFF] font-semibold text-sm text-white">
                {newCommunity?.data?.data.link}
              </div>
              <div
                className="rounded-lg py-2 w-2/4 bg-transparent border border-[#bc04be] font-semibold text-lg text-white flex justify-between items-center cursor-pointer relative px-4"
                onClick={handleCopyLink}
              >
                <span className="text-white text-sm text-nowrap">
                  Copy Link
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen5;
