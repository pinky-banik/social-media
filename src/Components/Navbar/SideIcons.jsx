import React from "react";
import { AiFillMessage } from "react-icons/ai";
import { IoNotifications } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";

const SideIcons = () => {
  return (
    <div className="text-5xl flex gap-4 justify-center items-center my-auto mx-10 text-black">
      <AiFillMessage className="bg-green-100 p-3 rounded-full" />
      <IoNotifications className="bg-green-100 p-3 rounded-full" />
      <FaCircleUser className="bg-green-100 p-3 rounded-full" />
    </div>
  );
};

export default SideIcons;
