import React, { useEffect, useReducer, useState } from "react";
import Footer from "../../elements/Footer";
import Header from "../../elements/Header";
import CommunityCard from "../../elements/Card/CommunityCard";
import pandaimg from "../../assets/section2/panda.png";
import CommunityModal from "../../elements/Modals/CommunityModal";
import MetaData from "../../layouts/MetaData";
import { useDispatch, useSelector } from "react-redux";
import { allCommunities } from "../../slice/Communities";

const MyCommunities = () => {
  const [CreateCommunity, setCreateCommunity] = useState(false);
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.user);
  const { communities } = useSelector((state) => state.community);
  console.log(communities);

  useEffect(() => {
    dispatch(allCommunities());
  }, []);

  useEffect(() => {
    if (userData) {
      setLoggedin(true);
    } else setLoggedin(false);
  }, [userData]);
  const [loggedIn, setLoggedin] = useState(false);

  // Function to get the logo URL with dimensions 256x256
  const getResizedLogo = (logoUrl) => {
    // If logoUrl exists, return a modified URL with dimensions 256x256
    console.log(`${logoUrl}?width=256&height=256`);
    return logoUrl ? `${logoUrl}?width=256&height=256` : null;
  };

  return (
    <div className="bg-[#0f1014] ">
      <MetaData title={"My Communities"} />
      <Header
        loggedIn={loggedIn}
        CreateCommunity={CreateCommunity}
        setCreateCommunity={setCreateCommunity}
      />
      <div className="p-8 sm:px-12 flex flex-col gap-8 ">
        <div className="flex flex-col gap-5 justify-start sm:w-1/2">
          <span className="font-bold text-white text-2xl">My Communities</span>
          <span className="font-bold text-[#838383] text-md">
            This space will display all the groups you're part of. You can
            become a member of a group by clicking on the 'join' option next to
            its name.
          </span>
        </div>
        {/* <div className="flex gap-5 justify-between w-full flex-wrap pb-10 sm:pb-24"> */}
        <div className="w-full pb-10 sm:pb-24 grid grid-cols-3">
          {communities?.data?.message.map((card, index) => (
            <CommunityCard
              key={index}
              img={card.logo}
              title={card.name}
              content={card.description}
              users={"120"}
              tweets={"35k"}
              src={"/dashboard/admin"}
            />
          ))}
        </div>
      </div>
      <Footer />
      {CreateCommunity && (
        <CommunityModal setCreateCommunity={setCreateCommunity} />
      )}
    </div>
  );
};

export default MyCommunities;
