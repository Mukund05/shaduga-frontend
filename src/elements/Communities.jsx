import React, { useEffect, useReducer, useState } from "react";
import CommunityCard from "./Card/CommunityCard";
import pandaimg from "../assets/section2/panda.png";
import { useDispatch, useSelector } from "react-redux";
import { allCommunities } from "../slice/Communities";

const Communities = () => {
  const dispatch = useDispatch();
  const { communities } = useSelector((state) => state.community);
  // console.log("///000000000" + JSON.stringify(communities));

  useEffect(() => {
    dispatch(allCommunities());
  }, []);

  const handleCommunityClick = (communityId, isAdmin,cardName) => {
    if (isAdmin) {
      navigate(`/cw/${cardName}/${communityId}/admin`);
    } else {
      navigate(`/cw/${cardName}/${communityId}`);
    }
  };

  return (
    <div className="px-4 sm:px-10 py-6">
      <span className="text-white text-[2rem] sm:text-[2.5rem] font-bold text-nowrap px-10 flex justify-center sm:justify-start">
        Trendy communities
      </span>
      <div className="flex gap-x-4 gap-y-12 items-start justify-around flex-wrap mx-2 my-10">
        {communities?.data?.map((card, index) => (
          <CommunityCard
            key={index}
            img={card.logo}
            title={card.name}
            content={card.description}
            users={"120"}
            tweets={"35k"}
            handleClick={()=>handleCommunityClick(card?.id, card?.user_id === userData?.data?.id,card?.name)}
          />
        ))}

        {/* <CommunityCard
          img={pandaimg}
          title={"Web3-go"}
          content={
            "Lorem ipsum dolor sit amet consectetur. Nec velit placerat sit non nunc mi. Eu sed eget gravida pellentesque aliquet. Tincidunt nibh enim nunc tellus in eu aliquam condimentum. "
          }
          users={"120"}
          tweets={"35k"}
          src={"/dashboard-quest/menu"}
        />
        <CommunityCard
          img={pandaimg}
          title={"Web3-go"}
          content={
            "Lorem ipsum dolor sit amet consectetur. Nec velit placerat sit non nunc mi. Eu sed eget gravida pellentesque aliquet. Tincidunt nibh enim nunc tellus in eu aliquam condimentum. "
          }
          users={"120"}
          tweets={"35k"}
          src={"/dashboard-quest/menu"}
        />
        <CommunityCard
          img={pandaimg}
          title={"Web3-go"}
          content={
            "Lorem ipsum dolor sit amet consectetur. Nec velit placerat sit non nunc mi. Eu sed eget gravida pellentesque aliquet. Tincidunt nibh enim nunc tellus in eu aliquam condimentum. "
          }
          users={"120"}
          tweets={"35k"}
          src={"/dashboard-quest/menu"}
        />
        <CommunityCard
          img={pandaimg}
          title={"Web3-go"}
          content={
            "Lorem ipsum dolor sit amet consectetur. Nec velit placerat sit non nunc mi. Eu sed eget gravida pellentesque aliquet. Tincidunt nibh enim nunc tellus in eu aliquam condimentum. "
          }
          users={"120"}
          tweets={"35k"}
          src={"/dashboard-quest/menu"}
        />
        <CommunityCard
          img={pandaimg}
          title={"Web3-go"}
          content={
            "Lorem ipsum dolor sit amet consectetur. Nec velit placerat sit non nunc mi. Eu sed eget gravida pellentesque aliquet. Tincidunt nibh enim nunc tellus in eu aliquam condimentum. "
          }
          users={"120"}
          tweets={"35k"}
          src={"/dashboard-quest/menu"}
        />
        <CommunityCard
          img={pandaimg}
          title={"Web3-go"}
          content={
            "Lorem ipsum dolor sit amet consectetur. Nec velit placerat sit non nunc mi. Eu sed eget gravida pellentesque aliquet. Tincidunt nibh enim nunc tellus in eu aliquam condimentum. "
          }
          users={"120"}
          tweets={"35k"}
          src={"/dashboard-quest/menu"}
        /> */}
      </div>
      <div className="my-16">
        <span className="text-white text-[2rem] sm:text-[2.5rem] font-bold xs:text-nowrap px-10 flex justify-center items-center text-center sm:justify-start my-8">
          Upcoming communities
        </span>
        <div className="flex  gap-x-4 gap-y-12 items-center justify-around flex-wrap mx-2 my-10">
          <CommunityCard
            img={pandaimg}
            title={"Web3-go"}
            content={
              "Lorem ipsum dolor sit amet consectetur. Nec velit placerat sit non nunc mi. Eu sed eget gravida pellentesque aliquet. Tincidunt nibh enim nunc tellus in eu aliquam condimentum. "
            }
            users={"120"}
            tweets={"35k"}
            src={"/dashboard-quest/menu"}
          />
          <CommunityCard
            img={pandaimg}
            title={"Web3-go"}
            content={
              "Lorem ipsum dolor sit amet consectetur. Nec velit placerat sit non nunc mi. Eu sed eget gravida pellentesque aliquet. Tincidunt nibh enim nunc tellus in eu aliquam condimentum. "
            }
            users={"120"}
            tweets={"35k"}
            src={"/dashboard-quest/menu"}
          />
          <CommunityCard
            img={pandaimg}
            title={"Web3-go"}
            content={
              "Lorem ipsum dolor sit amet consectetur. Nec velit placerat sit non nunc mi. Eu sed eget gravida pellentesque aliquet. Tincidunt nibh enim nunc tellus in eu aliquam condimentum. "
            }
            users={"120"}
            tweets={"35k"}
            src={"/dashboard-quest/menu"}
          />
        </div>
      </div>

      <div className=" flex  bg-[#BC04BE] rounded-lg  text-white cursor-pointer text-center items-center  w-3/5 sm:w-2/5 mx-auto justify-center p-2 px-4 my-3 font-semibold text-lg sm:text-xl ">
        Sign up to browse all communities
      </div>
    </div>
  );
};

export default Communities;
