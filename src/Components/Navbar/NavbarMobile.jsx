import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import { PiUsersThreeDuotone } from 'react-icons/pi';
import { PiUsersThreeFill } from "react-icons/pi";
import { IoFlagOutline } from "react-icons/io5";
import { IoFlag } from "react-icons/io5";
import { BsCollectionPlay } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { IoNotifications } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";


const NavbarMobile = () => {
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-green-200 ">
      <div className="grid h-full max-w-lg grid-cols-5 font-medium  text-3xl  my-auto justify-center items-center text-center mx-auto">
            <IoHome  className=" mx-auto"/>
          <PiUsersThreeFill className=" mx-auto" />
          <AiFillMessage  className=" mx-auto"/>
      <IoNotifications className=" mx-auto" />
      <FaCircleUser className=" mx-auto"/>
      </div>
    </div>
  );
};

export default NavbarMobile;
