import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <form className="w-64 bg-green-300 flex  items-center h-10 my-auto rounded-full">
      <CiSearch className=" text-xl text-center ml-3 flex justify-center items-center text-gray-700 " />
      <input
              className="w-full ml-2 mr-4 bg-green-300 placeholder:text-gray-600 focus-within:outline-none"
              placeholder="Search Sociopedia"
        type="text"
        name=""
        id=""
      />
    </form>
  );
};

export default SearchBar;
