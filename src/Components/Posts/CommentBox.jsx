import EmojiPicker from 'emoji-picker-react';
import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { MdInsertEmoticon } from "react-icons/md";

const CommentBox = () => {
    return (
        <form className="w-full bg-green-300 flex  items-center h-8 my-auto rounded-full">
      
      <input
              className="w-full ml-2 mr-4 bg-green-300 placeholder:text-gray-600 focus-within:outline-none"
              placeholder="Write a public comment..."
        type="text"
        name=""
        id=""
            />
            <MdInsertEmoticon className="text-2xl text-center ml-3 flex justify-center items-center text-gray-600 mx-2 cursor-pointer" />
            {/* <EmojiPicker className='w-80' /> */}
            
    </form>
    );
};

export default CommentBox;