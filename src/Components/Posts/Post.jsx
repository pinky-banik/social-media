import React, { useState } from "react";
import Logo from "../Logo";
import { BsCollectionPlay } from "react-icons/bs";
import { BiLike } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";
import { BiSolidLike } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";
import SearchBar from './../SearchBar';
import CommentBox from "./CommentBox";

const Post = () => {
  const [showMore, setShowMore] = useState(false);

  const text =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat consectetur reiciendis, corporis quia error quibusdam blanditiis fugiat odit deleniti praesentium nobis qui possimus sed nesciunt inventore deserunt illo ducimus unde non ex ad dolor? Tempore praesentium quam deleniti repellendus possimus asperiores a aperiam? Sequi enim modi quam aliquam? Saepe, quos necessitatibus voluptates quaerat rem similique repellat facere tempore provident consectetur, sint voluptas molestias doloribus nulla, non maiores placeat odit quia sapiente iure! Ex, delectus natus deleniti ut dolores doloribus totam. Provident facere nulla et accusamus, optio a beatae corporis quas saepe sint impedit asperiores rerum illum necessitatibus perferendis. Maxime, iusto?";
  return (
    <div className="md:w-2/5 bg-green-100 mt-10 border rounded-lg shadow w-3/4 mx-auto">
      <div className="flex my-3">
        <FaRegUserCircle className="text-5xl border-2  font-extrabold font-roboto w-12 h-12  flex text-center items-center justify-center my-auto ml-5 mr-3 rounded-full shadow-md text-gray-700"/>
        <div className="flex flex-col justify-around">
          <h1 className="text-xl font-semibold font-roboto">User Name</h1>
          <h2 className="font-mono text-gray-500 text-xs my-[-5px]">
            12:00:00
          </h2>
        </div>
      </div>
      <div className="p-5">
        <p>
          {showMore ? `${text}    ` : `${text.substring(0, 450)}   `}
          <button
            className={`${
              text.length <= 450 ? "hidden" : "font-semibold cursor-pointer"
            }`}
            onClick={() => setShowMore(!showMore)}
          >
            ...{showMore ? "show less" : "show more"}
          </button>
        </p>
      </div>
          <img className="w-full h-80 bg-black" src="" alt="image content" />
          {/* LIKE COMMENT SHARE */}
          <div className="p-5 pt-0">
          <div className="flex justify-between  mt-3">
              <p className="flex justify-center items-center gap-1 text-lg"><BiSolidLike className="text-white  bg-blue-500 p-[3px] rounded-full text-xl" /> <span className="text-base text-gray-700">100</span></p>
              <p className="text-base text-gray-700"> 5 comments</p>
          </div>
          <div className="grid grid-cols-3 p-2 my-5 text-center   justify-center items-center text-2xl text-gray-500 border-y-[1px] border-gray-200 ">
              <div className="flex justify-center items-center cursor-pointer gap-2"><BiLike/><span className="flex text-base font-semibold">Like</span> </div>
              <div className="flex justify-center cursor-pointer"><FaRegComment/></div>
              <div className="flex justify-center"><RiShareForwardLine/></div>
              </div>
              {/* comment box */}
          <div className="flex gap-3">
                  <FaRegUserCircle className="w-8 h-8 text-gray-700" />
                  <CommentBox/>
          </div>
          </div>
    </div>
  );
};

export default Post;
