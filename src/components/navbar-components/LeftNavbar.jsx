import React from "react";
import { AiOutlineHome,AiOutlineLike,AiOutlineSnippets } from "react-icons/ai";
import {BsCollectionPlay} from "react-icons/bs"

import { Link } from "react-router-dom";

const LeftNavbar = () => {
  return (
    <div className=" flex flex-col justify-start w-fit items-center gap-4">
      <div className=" flex flex-col items-center w-fit gap-1 hover:bg-slate-300 px-3 py-1 rounded">
        <h2 className=" text-2xl text-gray-700">
          <AiOutlineHome />
        </h2>
        <h2 className=" text-xs">Home</h2>
      </div>
      <div className=" flex flex-col items-center w-fit gap-1 hover:bg-slate-300 px-3 py-1 rounded">
        <h2 className=" text-2xl text-gray-700">
          <AiOutlineLike />
        </h2>
        <h2 className=" text-xs">Home</h2>
      </div>
      <div className=" flex flex-col items-center w-fit gap-1 hover:bg-slate-300 px-3 py-1 rounded">
        <h2 className=" text-2xl text-gray-700">
          <AiOutlineSnippets />
        </h2>
        <h2 className=" text-xs">Albumns</h2>
      </div>
      <div className=" flex flex-col items-center w-fit gap-1 hover:bg-slate-300 px-3 py-1 rounded">
        <h2 className=" text-2xl text-gray-700">
          <BsCollectionPlay />
        </h2>
        <h2 className=" text-xs">Library</h2>
      </div>
    </div>
  );
};

export default LeftNavbar;
