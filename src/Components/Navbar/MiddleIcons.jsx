import React from 'react';
import { IoHomeOutline } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import { PiUsersThreeDuotone } from 'react-icons/pi';
import { PiUsersThreeFill } from "react-icons/pi";
import { IoFlagOutline } from "react-icons/io5";
import { IoFlag } from "react-icons/io5";
import { BsCollectionPlay } from "react-icons/bs";

const MiddleIcons = () => {
    return (
        <div className=' text-3xl flex gap-24 justify-center items-center my-auto'>
            <IoHomeOutline />
            <PiUsersThreeDuotone />
            <IoFlagOutline/>
            <BsCollectionPlay/>
        </div>
    );
};

export default MiddleIcons;