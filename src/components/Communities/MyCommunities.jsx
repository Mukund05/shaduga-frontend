import React, { useEffect, useState } from "react";
import Footer from "../../elements/Footer";
import Header from "../../elements/Header";
import CommunityCard from "../../elements/Card/CommunityCard";
import CommunityModal from "../../elements/Modals/CommunityModal";
import MetaData from "../../layouts/MetaData";
import { useDispatch, useSelector } from "react-redux";
import { community } from "../../slice/Communities";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const MyCommunities = () => {
  const [CreateCommunity, setCreateCommunity] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {userData} = useSelector((state) => state.user);
  const { communityData, loading, error } = useSelector(
    (state) => state.community
  );
  const [loggedIn, setLoggedin] = useState(false);

  useEffect(() => {
    if (userData?.success) {
      setLoggedin(true);
      dispatch(community(userData?.data?.user?.id));
    } else {
      setLoggedin(false);
      navigate("/login")
    }
  }, [dispatch, userData]);

  // Function to get the logo URL with dimensions 256x256
  const getResizedLogo = (logoUrl) => {
    // If logoUrl exists, return a modified URL with dimensions 256x256
    return logoUrl ? `${logoUrl}?width=256&height=256` : null;
  };

  const handleCommunityClick = (communityId, isAdmin,cardName) => {
    if (isAdmin) {
      navigate(`/cw/${cardName}/${communityId}/admin`);
    } else {
      navigate(`/cw/${cardName}/${communityId}`);
    }
  };

  return (
    <div className="bg-[#0f1014]">
      <MetaData title={"My Communities"} />
      <Header
        loggedIn={loggedIn}
        CreateCommunity={CreateCommunity}
        setCreateCommunity={setCreateCommunity}
      />
      <div className="p-8 sm:px-12 flex flex-col gap-8">
        <div className="flex flex-col gap-5 justify-start sm:w-1/2">
          <span className="font-bold text-white text-2xl">My Communities</span>
          <span className="font-bold text-[#838383] text-md">
            This space will display all the groups you're part of. You can
            become a member of a group by clicking on the 'join' option next to
            its name.
          </span>
        </div>
        {communityData && loading ? (
          <div className="flex justify-center items-center flex-grow">
            <ClipLoader color={"#FFFFFF"} loading={loading} size={50} />
          </div>
        ) : error ? (
          <div className="flex justify-center items-center flex-grow text-red-500">
            <span>Failed to load communities. Please try again later.</span>
          </div>
        ) : (
          <div className="w-full pb-10 sm:pb-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {communityData?.data?.map((card, index) => (
              <CommunityCard
                key={index}
                img={getResizedLogo(card.logo)}
                title={card.name}
                content={card.description}
                users={"120"}
                tweets={"35k"}
                handleClick={() =>
                  handleCommunityClick(
                    card?.id,
                    card?.user_id === userData?.data?.id,
                    card?.name
                  )
                }
              />
            ))}
          </div>
        )}
      </div>
      <Footer />
      {CreateCommunity && (
        <CommunityModal setCreateCommunity={setCreateCommunity} />
      )}
    </div>
  );
};

export default MyCommunities;
