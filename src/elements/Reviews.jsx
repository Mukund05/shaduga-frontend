import React, { useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import StarIcon from "@mui/icons-material/Star";
import mathis from "../assets/section2/mathis.png";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import CloseIcon from "@mui/icons-material/Close";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BoltIcon from "@mui/icons-material/Bolt";
import { useMediaQuery } from "@react-hook/media-query";
import MenuIcon from "@mui/icons-material/Menu";
import { createReviews, userReview } from "../slice/review"; // Make sure to import the postReviewComment action
import { useDispatch, useSelector } from "react-redux";

const Reviews = ({ openSideBar, setOpenSideBar, setCardNo, communityId }) => {
  const dispatch = useDispatch();
  const lessThanLg = useMediaQuery("(max-width: 1024px)");
  const [showActivity, setShowActivity] = useState(!lessThanLg);
  const user = useSelector((state) => state?.user?.userData?.data);
  const [data, setData] = useState(null);
  const [selectedReview, setSelectedReview] = useState(null);
  const [showUserDetails, setShowUserDetails] = useState(false);
  const [comment, setComment] = useState(""); // New state for comment
  const [starRating, setStarRating] = useState(0); // New state for star rating
  const [bookmarked, setBookmarked] = useState(false); // New state for bookmark status

  const handleQuest = () => {
    if (lessThanLg) {
      setShowActivity(!showActivity);
    }
  };

  // Handle click on a user profile name or image to show user details
  const handleUserClick = () => {
    setShowUserDetails(true);
  };

  // Handle close button click
  const handleClose = () => {
    setSelectedReview(null);
    setShowUserDetails(false);
  };

  // Handle click on a review to show review details
  const handleReviewClick = (review) => {
    setSelectedReview(review);
    setShowUserDetails(false);
  };

  useEffect(() => {
    dispatch(userReview({ userId: user.id, commId: communityId }))
      .unwrap()
      .then((data) => {
        if (data.success) setData(data.data);
      });
    setCardNo(0);
  }, []);

  const getTimeAgo = (createdAt) => {
    const now = new Date();
    const createdDate = new Date(createdAt);
    const diffInSeconds = Math.floor((now - createdDate) / 1000);

    if (diffInSeconds < 60) {
      return `${diffInSeconds} seconds ago`;
    }

    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) {
      return `${diffInMinutes} minutes ago`;
    }

    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) {
      return `${diffInHours} hours ago`;
    }

    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) {
      return `${diffInDays} days ago`;
    }

    const diffInWeeks = Math.floor(diffInDays / 7);
    if (diffInWeeks < 4) {
      return `${diffInWeeks} weeks ago`;
    }

    const diffInMonths = Math.floor(diffInDays / 30);
    if (diffInMonths < 12) {
      return `${diffInMonths} months ago`;
    }

    const diffInYears = Math.floor(diffInMonths / 12);
    return `${diffInYears} years ago`;
  };

  // Handle adding a comment
  const handleAddComment = () => {
    if (comment.trim()) {
      const reviewData = {
        user_id: user.id,
        community_id: parseInt(communityId),
        star_rating: starRating,
        body: comment,
        status: 1,
        bookmarked: bookmarked,
      };
      dispatch(createReviews(reviewData))
        .unwrap()
        .then((response) => {
          if (response.success) {
            setComment(""); // Clear comment input
            setStarRating(0); // Reset star rating
            setBookmarked(false); // Reset bookmark status
            // Optionally refetch reviews to update the list
            dispatch(userReview({ userId: user.id, commId: communityId }))
              .unwrap()
              .then((data) => {
                if (data.success) setData(data.data);
              });
          }
        });
    }
  };

  return (
    <div className="flex justify-end relative">
      <div
        className=" absolute top-4 left-4 flex lg:hidden z-50"
        onClick={() => setOpenSideBar(!openSideBar)}
      >
        {!openSideBar ? (
          <MenuIcon className="text-white " />
        ) : (
          <CloseIcon className="text-white " />
        )}
      </div>
      {/* Review Listing Section */}
      <div
        className="h-screen w-full lg:w-[25%] border-r border-l border-[#FF00FF] "
        onClick={handleQuest}
      >
        <div className=" flex justify-start items-center p-3 gap-2  pl-14 lg:pl-3 ">
          <input
            type="checkbox"
            style={{
              appearance: "none",
              width: "1rem",
              height: "1rem",
              position: "relative",
            }}
            className="border-[#838383]  rounded cursor-pointer custom-checkbox "
          />

          <div className="text-xs text-white font-semibold">Longest wait</div>
          <KeyboardArrowDownIcon className="text-white cursor-pointer" />
        </div>
        {data?.length ? (
          data?.map((ele) => (
            <div
              className="bg-[#24252a] flex flex-col justify-start gap-2 p-2 border-l-4 border-[#c5c9e3]"
              key={ele.id}
              onClick={() => handleReviewClick(ele)}
            >
              <div className="flex justify-start text-xs text-white items-center gap-1">
                <img
                  src={
                    ele.image
                      ? `${import.meta.env.VITE_BASE_URL}${ele.image}`
                      : mathis
                  }
                  className=""
                />{" "}
                <span className="font-semibold">
                  {" "}
                  {ele?.user?.name || "Unknown User"}
                </span>
                <span className="text-[#838383]">{ele?.created_at}</span>
              </div>
              <div className="flex justify-start gap-1 text-xs text-white font-semibold">
                {ele?.title || "No Title"}{" "}
                <StarIcon
                  className="text-[#ff00ff]"
                  style={{ fontSize: "1.2rem" }}
                />
              </div>
            </div>
          ))
        ) : (
          <>No Reviews</>
        )}
      </div>
      {/* Blank Section */}
      {!selectedReview && !showUserDetails && (
        <div className="w-full lg:w-[75%] flex justify-center items-center">
          <div className="text-white text-lg">No reviews selected</div>
        </div>
      )}

      {/* Review Details Section */}
      {selectedReview && !showUserDetails && (
        <div
          className={` ${
            showActivity ? "absolute md:static" : "hidden md:static"
          }  w-full lg:w-[${
            showUserDetails ? "45%" : "75%"
          }] flex h-screen  flex-col justify-between bg-[#191a1e]`}
        >
          <div className="">
            <div className="flex flex-col xs:flex-row gap-2 justify-between p-2">
              <span className="text-[#838383] text-sm font-semibold flex items-center ">
                <span
                  className="cursor-pointer pl-14 lg:pl-0"
                  onClick={handleQuest}
                >
                  Reviews/{selectedReview?.title}{" "}
                </span>
                <StarIcon
                  className="text-[#ff00ff] "
                  style={{ fontSize: "1.2rem" }}
                />{" "}
                /{selectedReview?.user?.name}
              </span>
              <div className="flex gap-3 justify-center">
                <div className="rounded-md border bg-[#0e5f59]  border-[#05F3DB] cursor-pointer h-fit">
                  {" "}
                  <KeyboardArrowUpIcon className="text-white " />
                </div>
                <div className="rounded-md border bg-[#0e5f59]  border-[#05F3DB] cursor-pointer h-fit">
                  {" "}
                  <KeyboardArrowDownIcon className="text-white " />
                </div>
              </div>
            </div>
            <div className="bg-[#24252a] flex justify-start gap-2 p-3 text-white text-xs font-semibold">
              {" "}
              {selectedReview?.body}
            </div>
            <div className=" flex gap-4 justify-start pl-3 p-2 items-center">
              <img
                  src={
                    selectedReview?.image
                      ? `${import.meta.env.VITE_BASE_URL}${selectedReview?.image}`
                      : mathis
                  }
                  alt="User"
                  onClick={handleUserClick}
                  className=""
                />
              <span className="text-white text-xs font-semibold cursor-pointer">
                {" "}
                {selectedReview?.user?.name}
              </span>
              <div className="bg-[#24252a] p-2 rounded-lg text-[#838383] text-xs">
                {getTimeAgo(selectedReview?.created_at)}
              </div>
            </div>
          </div>

          {/* Comment Section */}
          <div className="p-2 border-t border-[#ff00ff]">
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Add a comment..."
              className="w-full p-2 rounded bg-[#24252a] text-white"
            />
            <div className="flex justify-between items-center mt-2">
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon
                    key={star}
                    className={`cursor-pointer ${
                      star <= starRating ? "text-[#ff00ff]" : "text-[#838383]"
                    }`}
                    onClick={() => setStarRating(star)}
                  />
                ))}
                <BookmarkIcon
                  className={`cursor-pointer ${
                    bookmarked ? "text-[#ff00ff]" : "text-[#838383]"
                  }`}
                  onClick={() => setBookmarked(!bookmarked)}
                />
              </div>
              <button
                className="bg-[#ff00ff] text-white px-4 py-2 rounded"
                onClick={handleAddComment}
              >
                Post
              </button>
            </div>
          </div>
        </div>
      )}

      {/* User Details Section */}
      {showUserDetails && !selectedReview && (
        <div
          className={` ${
            showActivity ? "absolute md:static" : "hidden md:static"
          }  w-full lg:w-[75%] flex h-screen  flex-col justify-between bg-[#191a1e]`}
        >
          <div className="p-3 flex justify-between">
            <span className="text-white text-lg font-semibold">
              User Details
            </span>
            <CloseIcon
              className="text-white cursor-pointer"
              onClick={handleClose}
            />
          </div>
          <div className="flex flex-col gap-3 p-3 text-white">
            <img
              src={selectedReview?.image}
              alt="User"
              className="rounded-full w-32 h-32 mx-auto"
            />
            <span className="text-center text-lg font-semibold">
              {selectedReview?.user?.name}
            </span>
            <div className="text-sm text-center">
              Joined: {selectedReview?.user?.joined_date}
            </div>
            <div className="text-sm text-center">
              Reviews: {selectedReview?.user?.reviews_count}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reviews;
