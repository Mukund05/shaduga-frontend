import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createModule, updateModule } from "../slice/ModuleSlice";
import { currentUser } from "../slice/Userslice";

const NewModule = ({ setDashboardData, userId, communityId, module, setModule }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.user?.userData?.data);

  const [data, setData] = useState({
    title: module?.title || "",
    desc: module?.desc || "",
    community_id: communityId || module?.community_id,
    user_id: user?.id,
    id: module?.id || null,
  });

  const [errors, setErrors] = useState({
    title: "",
    desc: "",
  });

  const validate = () => {
    let isValid = true;
    const errors = {};

    if (!data.title.trim()) {
      errors.title = "Title is required";
      isValid = false;
    }

    if (!data.desc.trim()) {
      errors.desc = "Description is required";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSave = () => {
    if (validate()) {
      const action = module ? updateModule : createModule;
      const payload = module ? { ...data, id: module.id } : data;
      dispatch(action(payload))
        .unwrap()
        .then((res) => {
          if (res.success) {
            setDashboardData(0);
            setModule(null);
            clear();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const clear = () => {
    setData({
      title: "",
      desc: "",
      community_id: communityId,
      user_id: user?.id,
    });
  };

  return (
    <div className="justify-center flex-col md:flex-row gap-[0.1rem] flex fixed w-full lg:w-[75%] h-full top-0 right-0">
      <div className="w-full text-white bg-[#20212a] overflow-y-auto max-h-screen md:h-screen pb-40">
        <header className="flex justify-between gap-4 p-4">
          <div className="flex justify-start gap-3">
            <div className="cursor-pointer">
              <span className="text-white text-md font-semibold">Parameters</span>
            </div>
          </div>
        </header>
        <div className="pt-12 px-6 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <span className="text-2xl font-bold grid gap-2">
              <input
                type="text"
                name="title"
                value={data.title}
                onChange={(e) => setData({ ...data, title: e.target.value })}
                className="bg-transparent text-white font-semibold text-md focus:outline-none border-2 border-[#ffffff21] rounded-lg px-3.5 w-2/4"
                placeholder="Choose a clear and concise title"
              />
              {errors.title && (
                <span className="text-red-500 text-sm">{errors.title}</span>
              )}
            </span>
            <span className="text-sm text-[#838383] font-semibold grid gap-2">
              <textarea
                name="desc"
                onChange={(e) => setData({ ...data, desc: e.target.value })}
                value={data.desc}
                className="bg-transparent text-white font-semibold text-md border-2 border-[#ffffff21] rounded-lg p-3.5 w-2/4"
                placeholder="Provide more context about the theme of the module here"
                rows={5}
              />
              {errors.desc && (
                <span className="text-red-500 text-sm">{errors.desc}</span>
              )}
            </span>
          </div>
          <div className="flex mt-5 w-2/4 justify-end">
            <button
              type="button"
              className="text-white bg-transparent hover:bg-[#ffffff0e] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-[#ffffff0e] dark:hover:bg-[#ffffff0e] dark:focus:ring-[#ffffff0e]"
              onClick={clear}
            >
              Clear
            </button>
            <button
              type="button"
              className="text-white bg-[#a71873] hover:bg-[#a71873] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-[#a71873] dark:hover:bg-[#a71873] dark:focus:ring-[#a71873]"
              onClick={handleSave}
            >
              {module ? "Update Module" : "Create Module"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewModule;
