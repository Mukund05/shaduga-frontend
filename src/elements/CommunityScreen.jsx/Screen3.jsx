import React, { useEffect, useState } from "react";
import PushPinIcon from "@mui/icons-material/PushPin";
import ai from "../../assets/section2/ai.png";
import gaming from "../../assets/section2/gaming.png";
import fashion from "../../assets/section2/dress.png";
import health from "../../assets/section2/health.png";
import marketing from "../../assets/section2/marketing.png";
import engineering from "../../assets/section2/engineering.png";
import design from "../../assets/section2/design.png";
import music from "../../assets/section2/music.png";
import finance from "../../assets/section2/finance.png";

const Screen3 = ({ setFormdata, formData, SetScreen }) => {
  const handleCategoryClick = (category) => {
    setFormdata((prevData) => ({
      ...prevData,
      categories: prevData.categories.includes(category) ? [] : [category],
    }));
  };

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (formData.categories.length == 0)
      newErrors.categories = "Category is required";

    return newErrors;
  };

  const handleClick = (id) => {
    if (id === 1 || Object.keys(validate()).length === 0) {
      SetScreen(id);
    } else {
      setErrors(validate());
    }
  };

  return (
    <div>
      <div className="flex flex-col py-12 px-8 justify-between h-full items-center gap-12">
        <div className="flex flex-col justify-start gap-3">
          <div className="flex text-white text-lg sm:text-xl font-bold">
            Optimise the visibility of your community on Shagudalabs
          </div>
          <div className="flex text-[#838383] text-xs font-semibold">
            Attract high-quality members by providing comprehensive details
            about your community.
          </div>
        </div>

        <div className="flex flex-col justify-start gap-2 w-full">
          <div className="flex text-white text-lg font-bold">
            Select the sector your community belongs to.
          </div>
          <div className="flex flex-wrap justify-start gap-x-5 gap-y-3">
            <div
              onClick={() => handleCategoryClick("Productivity")}
              className={`hover:bg-[#05F3DB]  flex gap-2 justify-between p-2 border-[#05F3DB] border rounded-md w-fit cursor-pointer ${
                formData.categories.includes("Productivity") && "bg-[#05F3DB]"
              }`}
            >
              <PushPinIcon className="text-red-600" />

              <span className="text-white text-md font-semibold  ">
                Productivity
              </span>
            </div>
            <div
              className={`hover:bg-[#05F3DB]  flex gap-2 justify-between p-2 border-[#05F3DB] border rounded-md w-fit cursor-pointer ${
                formData.categories.includes("AI") && "bg-[#05F3DB]"
              }`}
              onClick={() => handleCategoryClick("AI")}
            >
              <img src={ai} className="text-red-600" />
              <span className="text-white text-md font-semibold ">AI</span>
            </div>
            <div
              onClick={() => handleCategoryClick("Gaming")}
              className={`hover:bg-[#05F3DB]  flex gap-2 justify-between p-2 border-[#05F3DB] border rounded-md w-fit cursor-pointer ${
                formData.categories.includes("Gaming") && "bg-[#05F3DB]"
              }`}
            >
              <img src={gaming} className="text-red-600" />
              <span className="text-white text-md font-semibold ">Gaming</span>
            </div>
            <div
              onClick={() => handleCategoryClick("Music")}
              className={`hover:bg-[#05F3DB]  flex gap-2 justify-between p-2 border-[#05F3DB] border rounded-md w-fit cursor-pointer ${
                formData.categories.includes("Music") && "bg-[#05F3DB]"
              }`}
            >
              <img src={music} className="text-red-600" />

              <span className="text-white text-md font-semibold ">Music</span>
            </div>
            <div
              onClick={() => handleCategoryClick("Design & Creative")}
              className={`hover:bg-[#05F3DB]  flex gap-2 justify-between p-2 border-[#05F3DB] border rounded-md w-fit cursor-pointer ${
                formData.categories.includes("Design & Creative") &&
                "bg-[#05F3DB]"
              }`}
            >
              <img src={design} className="text-red-600" />

              <span className="text-white text-md font-semibold ">
                Design & Creative
              </span>
            </div>
            <div
              onClick={() => handleCategoryClick("Fashion & Brands")}
              className={`hover:bg-[#05F3DB]  flex gap-2 justify-between p-2 border-[#05F3DB] border rounded-md w-fit cursor-pointer ${
                formData.categories.includes("Fashion & Brands") &&
                "bg-[#05F3DB]"
              }`}
            >
              <img src={fashion} className="text-red-600" />

              <span className="text-white text-md font-semibold ">
                Fashion & Brands
              </span>
            </div>
            <div
              onClick={() => handleCategoryClick("Finance")}
              className={`hover:bg-[#05F3DB]  flex gap-2 justify-between p-2 border-[#05F3DB] border rounded-md w-fit cursor-pointer ${
                formData.categories.includes("Finance") && "bg-[#05F3DB]"
              }`}
            >
              <img src={finance} className="text-red-600" />

              <span className="text-white text-md font-semibold ">Finance</span>
            </div>
            <div
              onClick={() => handleCategoryClick("Health & Fitness")}
              className={`hover:bg-[#05F3DB]  flex gap-2 justify-between p-2 border-[#05F3DB] border rounded-md w-fit cursor-pointer ${
                formData.categories.includes("Health & Fitness") &&
                "bg-[#05F3DB]"
              }`}
            >
              <img src={health} className="text-red-600" />

              <span className="text-white text-md font-semibold ">
                Health & Fitness
              </span>
            </div>
            <div
              onClick={() => handleCategoryClick("Marketing & Growth")}
              className={`hover:bg-[#05F3DB]  flex gap-2 justify-between p-2 border-[#05F3DB] border rounded-md w-fit cursor-pointer ${
                formData.categories.includes("Marketing & Growth") &&
                "bg-[#05F3DB]"
              }`}
            >
              <img src={marketing} className="text-red-600" />

              <span className="text-white text-md font-semibold ">
                Marketing & Growth
              </span>
            </div>
            <div
              onClick={() => handleCategoryClick("Engineering & Development")}
              className={`hover:bg-[#05F3DB]  flex gap-2 justify-between p-2 border-[#05F3DB] border rounded-md w-fit cursor-pointer ${
                formData.categories.includes("Engineering & Development") &&
                "bg-[#05F3DB]"
              }`}
            >
              <img src={engineering} className="text-red-600" />

              <span className="text-white text-md font-semibold text-nowrap">
                Engineering & Development
              </span>
            </div>
          </div>
          {errors.categories && (
            <span className="text-red-500 text-xs">{errors.categories}</span>
          )}
        </div>
        <div className="pt-4 flex justify-between gap-3 w-full">
          <div className="w-1/3 p-1 rounded-lg bg-[#111111]"></div>
          <div className="w-1/3 p-1 rounded-lg bg-[#FF00FF]"></div>
          <div className="w-1/3 p-1 rounded-lg bg-[#111111]"></div>
        </div>

        <div className="flex w-[100%]">
          <button
            className="mt-2 p-2 w-2/3 border text-white font-semibold text-sm border-[#bc04be] rounded-lg hover:bg-[#bc04be]"
            onClick={() => {
              handleClick(1);
            }}
          >
            Previous
          </button>
          <button
            className="mt-2 p-2 w-2/3 border text-white font-semibold text-sm border-[#bc04be] rounded-lg hover:bg-[#bc04be]"
            onClick={() => {
              handleClick(3);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Screen3;
