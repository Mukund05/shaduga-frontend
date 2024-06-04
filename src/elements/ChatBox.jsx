// ChatBox.js
import sender from "../assets/section2/avatar.png";
import React, { useState } from "react";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";
const ChatBox = ({ profile, username }) => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  const sendMessage = () => {
    if (inputMessage.trim() !== "") {
      setMessages([...messages, { text: inputMessage, sender: "user" }]);
      setInputMessage("");
      // You can implement functionality here to send the message to a server or external API
    }
  };

  return (
    <div className="chat-box w-full px-5 ">
      <div className="border-b border-[#838383] py-3  gap-3 flex justify-start items-center">
        <div className="relative">
          <img src={sender} className="" />
          <span className="bg-[#00a3ff] p-[6px] rounded-full absolute bottom-0 right-0"></span>
        </div>
        <div className="flex flex-col gap-1 ">
          <span className="text-white font-semibold text-lg">Grace Miller</span>
          <span className="text-xs text-[#00a3ff] font-semibold">Online</span>
        </div>
      </div>
      {/* <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          placeholder="Type your message..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div> */}
      {/* messages */}
      <div className="flex flex-col gap-4 py-4 overflow-x-auto max-h-screen relative pb-20">
        <div className="flex w-full justify-start ">
          <div className="flex gap-5 justify-start items-center">
            <img src={sender} className="h-fit w-1/12" />
            <div className="flex flex-col w-fit justify-start gap-2">
              <div className="bg-[#191a1e] rounded-xl p-3 w-full xs:w-3/4 text-sm text-white">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s,
              </div>
              <span className="text-xs text-white px-2">8:00 PM</span>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-end">
          <div className="flex gap-5 justify-end items-center">
            <div className="flex flex-col  w-full xs:w-3/4 justify-end items-end gap-2">
              <div className="bg-[#EC228D] rounded-xl p-3 w-full text-sm text-white">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s,
              </div>
              <span className="text-xs text-white px-2">8:00 PM</span>
            </div>
            <img src={profile} className="h-fit w-1/12" />
          </div>
        </div>
        <div className="flex w-full justify-start ">
          <div className="flex gap-5 justify-start items-center">
            <img src={sender} className="h-fit w-1/12" />
            <div className="flex flex-col w-fit justify-start gap-2">
              <div className="bg-[#191a1e] rounded-xl p-3 w-full xs:w-3/4 text-sm text-white">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s,
              </div>
              <span className="text-xs text-white px-2">8:00 PM</span>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-end">
          <div className="flex gap-5 justify-end items-center">
            <div className="flex flex-col  w-full xs:w-3/4 justify-end items-end gap-2">
              <div className="bg-[#EC228D] rounded-xl p-3 w-full text-sm text-white">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s,
              </div>
              <span className="text-xs text-white px-2">8:00 PM</span>
            </div>
            <img src={profile} className="h-fit w-1/12" />
          </div>
        </div>
        <div className="flex w-full justify-start ">
          <div className="flex gap-5 justify-start items-center">
            <img src={sender} className="h-fit w-1/12" />
            <div className="flex flex-col w-fit justify-start gap-2">
              <div className="bg-[#191a1e] rounded-xl p-3 w-full xs:w-3/4 text-sm text-white">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s,
              </div>
              <span className="text-xs text-white px-2">8:00 PM</span>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-end">
          <div className="flex gap-5 justify-end items-center">
            <div className="flex flex-col  w-full xs:w-3/4 justify-end items-end gap-2">
              <div className="bg-[#EC228D] rounded-xl p-3 w-full text-sm text-white">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s,
              </div>
              <span className="text-xs text-white px-2">8:00 PM</span>
            </div>
            <img src={profile} className="h-fit w-1/12" />
          </div>
        </div>
        <div className="lg:w-[42%] sm:w-3/5 w-[70%] xs:w-3/4 p-3 bg-[#20212a] fixed bottom-0 right-0">
          <div className="border w-full  border-[#FF00FF] rounded-lg flex px-3 py-2 justify-between bg-[#191A1E]">
            <input
              className="text-white focus:outline-none  text-md bg-transparent font-semibold w-full"
              placeholder="Write a message"
            />
            <div className="flex gap-3 justify-center cursor-pointer items-center">
              <AttachFileIcon className="text-[#EE06F2]" />
              <span className="flex justify-center p-1 bg-[#EE06F2] rounded-lg ">
                <SendIcon className="text-white" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
