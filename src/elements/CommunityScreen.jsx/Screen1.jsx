import React, { useEffect, useRef, useState } from "react";
import CollectionsIcon from "@mui/icons-material/Collections";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";

const Screen1 = ({ formData, setFormdata, handleChange, SetScreen }) => {
  const { userData } = useSelector((state) => state.user);
  const [errors, setErrors] = useState({});
  const [active, setActive] = useState(0);
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    console.log(image, "Image changed");
  }, [image]);

  useEffect(() => {
    console.log(formData?.logo);
    setFormdata((prevData) => ({
      ...prevData,
      is_blockchain: active === 1,
    }));
  }, [active]);

  const handleDivClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      // Display the image directly from the file
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);

      // Update the form data with the file object
      setFormdata((prev) => ({
        ...prev,
        logo: file,
      }));
    }
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.description) newErrors.description = "Description is required";

    return newErrors;
  };

  const handleClick = () => {
    if (Object.keys(validate()).length === 0) {
      SetScreen(1);
    } else {
      setErrors(validate());
    }
  };

  return (
    <div>
      <div className="flex flex-col py-12 px-8 justify-center items-start gap-5">
        <div className="flex flex-col justify-start gap-3">
          <div className="flex text-white text-lg sm:text-xl font-bold">
            Let's collaborate to establish our community, {userData?.data.name}.
          </div>
          <div className="flex text-[#838383] text-xs font-semibold">
            Our users appreciate having a comprehensive understanding of a
            community before deciding to participate. Therefore, it's important
            to provide all the necessary information. Let's ensure we include
            everything they might need to know.
          </div>
        </div>
        <div className="flex flex-col justify-start gap-1">
          <div className="flex text-white text-lg font-bold">Logo</div>
          <div
            className={`rounded-lg ${
              image ? "p-2" : "p-4"
            } border border-[#00FFFF] w-fit cursor-pointer`}
            onClick={handleDivClick}
          >
            {image ? (
              <img
                src={image}
                alt="Uploaded Logo"
                className="w-8 h-8 object-contain rounded-md"
              />
            ) : (
              <CollectionsIcon className="text-white w-64 h-64" />
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageUpload}
            className="hidden"
          />
          <span className="text-[#838383] text-xs">
            Recommended size in 256x256px
          </span>
        </div>
        <div className="flex flex-col justify-start gap-1 w-full">
          <div className="flex text-white text-lg font-bold">Name</div>
          <input
            className="rounded-lg p-2 bg-transparent border border-[#00FFFF] font-normal text-md sm:text-lg text-white focus:outline-none"
            placeholder="Name of your community"
            onChange={handleChange}
            name="name"
            value={formData.name}
          />
          {errors.name && (
            <span className="text-red-500 text-xs">{errors.name}</span>
          )}
        </div>
        <div className="flex flex-col justify-start gap-1 w-full">
          <div className="flex justify-between items-end">
            <div className="flex text-white text-lg font-bold">Description</div>
            <span className="text-xs text-[#838383] font-semibold">
              Optional
            </span>
          </div>

          <textarea
            rows={3}
            className="rounded-lg p-2 bg-transparent border border-[#00FFFF]  text-lg text-white font-normal "
            placeholder="Description"
            onChange={handleChange}
            name="description"
            value={formData.description}
          />
          {errors.description && (
            <span className="text-red-500 text-xs">{errors.description}</span>
          )}
        </div>
        <div className="flex flex-col justify-start gap-2 w-full">
          <div className="flex text-white text-lg font-bold">
            Is your project blockchain related?
          </div>
          <div className="flex gap-5 justify-start">
            <div
              className={`rounded-lg p-2 border border-[#00FFFF] font-semibold text-[#00FFFF] ${
                active === 0 ? "bg-[#12625f]" : "bg-transparent"
              } flex justify-between gap-1 text-sm items-center cursor-pointer`}
              onClick={() => setActive(0)}
            >
              <DoneIcon className="w-4 h-4" />
              <span>Yes</span>
            </div>
            <div
              className={`rounded-lg p-2 border border-[#00FFFF] font-semibold text-[#00FFFF] ${
                active === 1 ? "bg-[#12625f]" : "bg-transparent"
              } flex justify-between gap-1 text-sm items-center cursor-pointer`}
              onClick={() => setActive(1)}
            >
              <CloseIcon className="w-4 h-4" />
              <span>No</span>
            </div>
          </div>
        </div>

        <button
          className="mt-2 p-2 w-2/3 border text-white font-semibold text-sm border-[#bc04be] rounded-lg hover:bg-[#bc04be]"
          onClick={handleClick}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Screen1;
