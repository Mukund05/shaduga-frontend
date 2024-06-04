import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import HelpIcon from "@mui/icons-material/Help";
import metamask from "../assets/section2/metamask.png";
import allwallet from "../assets/section2/allwallet.png";
import coinbase from "../assets/section2/coinbase.png";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import walletconnect from "../assets/section2/walletconnect.png";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LanguageIcon from "@mui/icons-material/Language";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import qr from "../assets/section2/qr.png";
import meta from "../assets/section2/meta.png";

const LinkedAccount = ({ setShowSidebar, showSideBar }) => {
  const [showWallet, setShowWallet] = useState(false);
  const [modalData, setModalData] = useState(0);
  const handleWallet = () => {
    setShowWallet(true);
  };
  const WalletModal = () => {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50 px-2">
        <div className="bg-[#20212a] p-8 rounded-[3rem] flex flex-col items-center justify-center gap-y-4 w-4/5 sm:w-1/2 lg:w-1/3">
          {modalData === 0 && (
            <div className="flex justify-center w-full flex-col items-center">
              <div className="flex justify-between w-full pb-3">
                <HelpIcon className="text-[#717A8C] cursor-pointer" />
                <span className="text-lg font-semibold text-white">
                  Connect a wallet
                </span>
                <CloseIcon
                  className="text-[#717A8C] cursor-pointer"
                  onClick={() => setShowWallet(false)}
                />
              </div>
              <div className="flex flex-col gap-2 w-4/5">
                <div
                  className="p-3 px-4 rounded-xl cursor-pointer bg-[#1e1e1e] items-center flex gap-2"
                  onClick={() => setModalData(1)}
                >
                  <img src={metamask} className="" />
                  <span className="text-[#717A8C] text-md font-semibold">
                    MetaMask
                  </span>
                </div>

                <div
                  className="p-3 px-4 rounded-xl cursor-pointer bg-[#1e1e1e] items-center flex gap-2"
                  onClick={() => setModalData(1)}
                >
                  <img src={coinbase} className="" />
                  <span className="text-[#717A8C] text-md font-semibold">
                    CoinBase Wallet
                  </span>
                </div>
                <div
                  className="p-3 px-4 rounded-xl cursor-pointer bg-[#1e1e1e] items-center flex gap-2"
                  onClick={() => setModalData(1)}
                >
                  <img src={walletconnect} className="" />
                  <span className="text-[#717A8C] text-md font-semibold">
                    WalletConnect
                  </span>
                </div>
                <div
                  className="p-3 px-4 rounded-xl cursor-pointer bg-[#1e1e1e] items-center flex gap-2"
                  onClick={() => setModalData(1)}
                >
                  <img src={allwallet} className="" />
                  <span className="text-[#717A8C] text-md font-semibold">
                    All Wallets
                  </span>
                </div>
              </div>
              <span className="text-xs text-[#585C5B] font-semibold text-center pt-4">
                By connecting your wallet, you agree to our{" "}
                <span className="text-[#8d9193] cursor-pointer">
                  Terms of service
                </span>{" "}
                and{" "}
                <span className="text-[#8d9193] cursor-pointer">
                  Privacy Policy
                </span>
              </span>
            </div>
          )}
          {modalData === 1 && (
            <div className="flex justify-center w-full flex-col items-center gap-4">
              <div className="flex justify-between w-full pb-3">
                <ChevronLeftIcon
                  className="text-white cursor-pointer"
                  style={{ fontSize: "2rem" }}
                  onClick={() => setModalData(0)}
                />
                <span className="text-lg font-semibold text-white">
                  Binance Web3 Wallet
                </span>
                <CloseIcon
                  style={{ fontSize: "2rem" }}
                  className="text-white cursor-pointer"
                  onClick={() => setShowWallet(false)}
                />
              </div>
              <div className="flex justify-between gap-4 bg-[#2d2d2d] rounded-2xl p-1">
                <div
                  onClick={() => setModalData(1)}
                  className={`${
                    modalData === 1 && "bg-[#20212a]"
                  } p-1 flex text-white gap-2 items-center cursor-pointer rounded-xl`}
                >
                  <PhoneAndroidIcon
                    className=""
                    style={{ fontSize: "1.2rem" }}
                  />
                  <span className="text-xs font-semibold">Mobile</span>
                </div>
                <div
                  onClick={() => setModalData(2)}
                  className={`${
                    modalData === 2 && "bg-[#20212a]"
                  } p-1 flex text-white gap-2 items-center cursor-pointer rounded-xl`}
                >
                  <LanguageIcon className="" style={{ fontSize: "1.2rem" }} />
                  <span className="text-xs font-semibold">Browser</span>
                </div>
              </div>
              <div className="">
                <img src={qr} className="w-3/5 h-3/5 mx-auto" />
              </div>
              <span className="text-white text-sm font-semibold w-auto mx-auto">
                Scan this QR Code with your phone
              </span>
              <div className="flex gap-2 text-sm cursor-pointer">
                <ContentCopyIcon className="text-white" />
                <span className="text-white text-sm font-semibold w-auto mx-auto">
                  Copy
                </span>
              </div>
              <div className="border items-center flex justify-between border-[#4D5959] rounded-md p-2 w-full">
                {" "}
                <span className="text-white text-sm font-semibold w-auto mx-auto">
                  Don`t have Binance Wev3...?
                </span>
                <div className="bg-[#2d2d2d] p-1 rounded-xl font-semibold text-white text-sm items-center cursor-pointer h-fit">
                  Get <ChevronRightIcon className="" />
                </div>
              </div>
            </div>
          )}
          {modalData === 2 && (
            <div className="flex justify-center w-full flex-col items-center gap-4">
              <div className="flex justify-between w-full pb-3">
                <ChevronLeftIcon
                  className="text-white cursor-pointer"
                  style={{ fontSize: "2rem" }}
                  onClick={() => setModalData(1)}
                />
                <span className="text-lg font-semibold text-white">
                  Metamask
                </span>
                <CloseIcon
                  style={{ fontSize: "2rem" }}
                  className="text-white cursor-pointer"
                  onClick={() => setShowWallet(false)}
                />
              </div>
              <div className="flex justify-between gap-4 bg-[#2d2d2d] rounded-2xl p-1">
                <div
                  onClick={() => setModalData(1)}
                  className={`${
                    modalData === 1 && "bg-[#20212a]"
                  } p-1 flex text-white gap-2 items-center cursor-pointer rounded-xl`}
                >
                  <PhoneAndroidIcon
                    className=""
                    style={{ fontSize: "1.2rem" }}
                  />
                  <span className="text-xs font-semibold">Mobile</span>
                </div>
                <div
                  onClick={() => setModalData(2)}
                  className={`${
                    modalData === 2 && "bg-[#20212a]"
                  } p-1 flex text-white gap-2 items-center cursor-pointer rounded-xl`}
                >
                  <LanguageIcon className="" style={{ fontSize: "1.2rem" }} />
                  <span className="text-xs font-semibold">Browser</span>
                </div>
              </div>
              <div className="">
                <img src={meta} className="w-full mx-auto" />
              </div>
              <span className="text-white text-lg font-bold">Not detected</span>

              <div className="border items-center flex justify-between border-[#4D5959] rounded-md p-2 w-full">
                {" "}
                <span className="text-white text-sm font-semibold w-auto mx-auto">
                  Don`t have Metamask?
                </span>
                <div className="bg-[#2d2d2d] p-1 rounded-xl font-semibold text-white text-sm items-center cursor-pointer h-fit">
                  Get <ChevronRightIcon className="" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };
  return (
    <div className="flex justify-center w-full flex-col">
      <div className="w-full flex-col flex rounded-b-3xl px-16 py-8 bg-gradient-to-r from-[#3F0140] to-[#A303A6] gap-2 relative">
        <div
          className=" absolute top-10 left-6 flex sm:hidden z-50"
          onClick={() => setShowSidebar(!showSideBar)}
        >
          {!showSideBar ? (
            <MenuIcon className="text-white " />
          ) : (
            <CloseIcon className="text-white " />
          )}
        </div>
        <span className="font-bold text-xl text-[#ff00ff]">
          Linked accounts
        </span>
        <span className="font-semibold text-sm text-[#9FA2B4]">
          Connect discord or wallet in order to disconnect email
        </span>
      </div>
      <div className="p-8 flex flex-col items-center gap-10">
        <div className="flex justify-start w-[90%] sm:w-2/3 flex-col gap-1">
          <div className="text-white font-bold text-lg">Discord</div>
          <div className="text-xs text-[#9FA2B4] pb-2">
            Connect your Discord to access quests, receive role rewards and get
            XP from the bot
          </div>
          <div className="rounded-lg p-2 px-4 justify-between items-center flex bg-[#20212a] gap-2">
            <div className="text-md font-bold text-white">
              Connect your Discord
            </div>
            <button className="p-2 px-4 bg-[#901095] rounded-xl text-white font-semibold">
              Connect
            </button>
          </div>
        </div>
        <div className="flex justify-start w-[90%] sm:w-2/3 flex-col gap-1">
          <div className="text-white font-bold text-lg">Twitter</div>
          <div className="text-xs text-[#9FA2B4] pb-2">
            Connect your Twitter to access all quests
          </div>
          <div className="rounded-lg p-2 px-4 justify-between items-center flex bg-[#20212a] gap-2">
            <div className="text-md font-bold text-white">
              Connect your Twitter
            </div>
            <button className="p-2 px-4 bg-[#901095] rounded-xl text-white font-semibold">
              Connect
            </button>
          </div>
        </div>
        <div className="flex justify-start w-[90%] sm:w-2/3 flex-col gap-1">
          <div className="text-white font-bold text-lg">Tik Tok</div>
          <div className="text-xs text-[#9FA2B4] pb-2">
            Connect your Tik Tok to access all quests
          </div>
          <div className="rounded-lg p-2 px-4 justify-between items-center flex bg-[#20212a] gap-2">
            <div className="text-md font-bold text-white">
              Connect your Tik Tok
            </div>
            <button className="p-2 px-4 bg-[#901095] rounded-xl text-white font-semibold">
              Connect
            </button>
          </div>
        </div>
        <div className="flex justify-start w-[90%] sm:w-2/3 flex-col gap-1">
          <div className="text-white font-bold text-lg">Wallet</div>
          <div className="text-xs text-[#9FA2B4] pb-2">
            Connect your wallet for logging in to your account
          </div>
          <div className="rounded-lg p-2 px-4 justify-between items-center flex bg-[#20212a] gap-2">
            <div className="text-md font-bold text-white">
              Connect your wallet
            </div>
            <button
              className="p-2 px-4 bg-[#901095] rounded-xl text-white font-semibold"
              onClick={handleWallet}
            >
              Connect
            </button>
          </div>
        </div>
      </div>
      {showWallet && <WalletModal />}
    </div>
  );
};

export default LinkedAccount;
