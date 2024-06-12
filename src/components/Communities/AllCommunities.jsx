import React, { useEffect, useState } from "react";
import Footer from "../../elements/Footer";
import Header from "../../elements/Header";
import CommunityCard from "../../elements/Card/CommunityCard";
import CommunityModal from "../../elements/Modals/CommunityModal";
import MetaData from "../../layouts/MetaData";
import { useDispatch, useSelector } from "react-redux";
import { allCommunities, community } from "../../slice/Communities";
import { currentUser } from "../../slice/Userslice";

const AllCommunities = () => {
  const [CreateCommunity, setCreateCommunity] = useState(false);
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.user);
  const { communities } = useSelector((state) => state.community);
  const [loggedIn, setLoggedin] = useState(false);

  useEffect(() => {
    const fetchUserCommunity = async () => {
      if (!userData) {
        // Dispatch currentUser action to fetch user data
        await dispatch(currentUser());
      } else {
        // If user data exists, dispatch community action with user ID
        dispatch(allCommunities());
      }
    };

    fetchUserCommunity();
  }, [dispatch, userData]);

  useEffect(() => {
    if (userData) {
      setLoggedin(true);
      // Fetch communities when userData is available
      dispatch(allCommunities());
    } else {
      setLoggedin(false);
    }
  }, [dispatch, userData]);

  // Function to get the logo URL with dimensions 256x256
  const getResizedLogo = (logoUrl) => {
    return logoUrl ? `${logoUrl}?width=256&height=256` : null;
  };

  return (
    <div className="bg-[#0f1014]">
      <MetaData title={"All Communities"} />
      <Header
        loggedIn={loggedIn}
        CreateCommunity={CreateCommunity}
        setCreateCommunity={setCreateCommunity}
      />
      <div className="p-8 sm:px-12 flex flex-col gap-8">
        <div className="flex flex-col gap-5 justify-start sm:w-1/2">
          <span className="font-bold text-white text-2xl">All Communities</span>
          <span className="font-bold text-[#838383] text-md">
            This space will display all the groups you're part of. You can
            become a member of a group by clicking on the 'join' option next to
            its name.
          </span>
        </div>
        <div className="w-full pb-10 sm:pb-24 grid grid-cols-3">
          {communities?.data?.map((card, index) => (
            <CommunityCard
              key={index}
              img={getResizedLogo(card.logo)}
              title={card.name}
              content={card.description}
              users={"120"}
              tweets={"35k"}
              src={'/dashboard/admin'}
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

export default AllCommunities;