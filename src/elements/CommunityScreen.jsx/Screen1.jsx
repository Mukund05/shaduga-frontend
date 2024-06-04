import React, { useEffect, useRef, useState } from "react";
import CollectionsIcon from "@mui/icons-material/Collections";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";
import { SentimentNeutralSharp } from "@mui/icons-material";

const Screen1 = ({ formData, setFormdata, handleChange }) => {
  const { userData } = useSelector((state) => state.user);

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
  // const handleImageUpload = (event) => {
  //   const file = event.target.files[0];

  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       console.log("Image data read successfully:", reader.result);
  //       setFormdata((prev) => ({
  //         ...prev,
  //         logo: reader.result,
  //       }));

  //       const img = new Image();
  //       img.onload = () => {
  //         console.log("Image loaded successfully");
  //         const canvas = document.createElement("canvas");
  //         const ctx = canvas.getContext("2d");
  //         canvas.width = 256;
  //         canvas.height = 256;
  //         ctx.drawImage(img, 0, 0, 256, 256);

  //         canvas.toBlob((blob) => {
  //           console.log("Blob created successfully:", blob);
  //           // Save the blob object directly in the formData
  //           const resizedImageURL = URL.createObjectURL(blob);
  //           setImage(resizedImageURL);
  //         }, "image/png");
  //       };
  //       img.src = reader.result;
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

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
          />
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
          />
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
      </div>
    </div>
  );
};

export default Screen1;
