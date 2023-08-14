import React from "react";
import { IoHeartCircleOutline } from "react-icons/io5";
import { BsPlusCircle,BsFillHeartFill } from "react-icons/bs";

const Chart = () => {
  return (
    <div className=" w-[92%] mx-auto my-2">
      <div className=" flex justify-between">
        <h2 className=" text-lg font-semibold font-mono text-[#555555]">
          Top Charts
        </h2>
        <button className=" bg-[#c5c4c4de] px-3 py-1 rounded text-xs font-semibold tracking-wider">
          See More
        </button>
      </div>
      <div className=" mt-3 flex flex-col gap-3 ">
        <div className=" flex items-center justify-between px-3 py-1 rounded hover:bg-[#b3b1b1]">
          <div className=" flex gap-2 items-center">
            <img
              src={
                "https://pub-static.fotor.com/assets/projects/pages/58ce02c72b3e4997b65d0862e2d26453/red-chill-aesthetic-music-playlist-949d687a745c45d5a1ac79abe5cb0cfa.jpg"
              }
              alt=""
              className=" w-12 rounded"
            />
            <div className=" text-xs">
              <h2>name</h2>
              <h2>singer</h2>
            </div>
          </div>
          <div className=" flex gap-3 items-center">
            <h2 className=" text-sm">2:04</h2>
            <button className=" text-[#d64444]">
              <BsFillHeartFill />
            </button>
            <button>
              <BsPlusCircle />
            </button>
          </div>
        </div>
        <div className=" flex items-center justify-between px-3 py-1 rounded hover:bg-[#b3b1b1]">
          <div className=" flex gap-2 items-center">
            <img
              src={
                "https://pub-static.fotor.com/assets/projects/pages/58ce02c72b3e4997b65d0862e2d26453/red-chill-aesthetic-music-playlist-949d687a745c45d5a1ac79abe5cb0cfa.jpg"
              }
              alt=""
              className=" w-12 rounded"
            />
            <div className=" text-xs">
              <h2>name</h2>
              <h2>singer</h2>
            </div>
          </div>
          <div className=" flex gap-3 items-center">
            <h2 className=" text-sm">2:04</h2>
            <button className=" text-[#d64444]">
              <BsFillHeartFill />
            </button>
            <button>
              <BsPlusCircle />
            </button>
          </div>
        </div>
        <div className=" flex items-center justify-between px-3 py-1 rounded hover:bg-[#b3b1b1]">
          <div className=" flex gap-2 items-center">
            <img
              src={
                "https://pub-static.fotor.com/assets/projects/pages/58ce02c72b3e4997b65d0862e2d26453/red-chill-aesthetic-music-playlist-949d687a745c45d5a1ac79abe5cb0cfa.jpg"
              }
              alt=""
              className=" w-12 rounded"
            />
            <div className=" text-xs">
              <h2>name</h2>
              <h2>singer</h2>
            </div>
          </div>
          <div className=" flex gap-3 items-center">
            <h2 className=" text-sm">2:04</h2>
            <button className=" text-[#d64444]">
              <BsFillHeartFill />
            </button>
            <button>
              <BsPlusCircle />
            </button>
          </div>
        </div>
        <div className=" flex items-center justify-between px-3 py-1 rounded hover:bg-[#b3b1b1]">
          <div className=" flex gap-2 items-center">
            <img
              src={
                "https://pub-static.fotor.com/assets/projects/pages/58ce02c72b3e4997b65d0862e2d26453/red-chill-aesthetic-music-playlist-949d687a745c45d5a1ac79abe5cb0cfa.jpg"
              }
              alt=""
              className=" w-12 rounded"
            />
            <div className=" text-xs">
              <h2>name</h2>
              <h2>singer</h2>
            </div>
          </div>
          <div className=" flex gap-3 items-center">
            <h2 className=" text-sm">2:04</h2>
            <button className=" text-[#d64444]">
              <BsFillHeartFill />
            </button>
            <button>
              <BsPlusCircle />
            </button>
          </div>
        </div>
        <div className=" flex items-center justify-between px-3 py-1 rounded hover:bg-[#b3b1b1]">
          <div className=" flex gap-2 items-center">
            <img
              src={
                "https://pub-static.fotor.com/assets/projects/pages/58ce02c72b3e4997b65d0862e2d26453/red-chill-aesthetic-music-playlist-949d687a745c45d5a1ac79abe5cb0cfa.jpg"
              }
              alt=""
              className=" w-12 rounded"
            />
            <div className=" text-xs">
              <h2>name</h2>
              <h2>singer</h2>
            </div>
          </div>
          <div className=" flex gap-3 items-center">
            <h2 className=" text-sm">2:04</h2>
            <button className=" text-[#d64444]">
              <BsFillHeartFill />
            </button>
            <button>
              <BsPlusCircle />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
