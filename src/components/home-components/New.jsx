import React from "react";
import { IoHeadsetOutline, IoHeartCircleOutline } from "react-icons/io5";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

const New = () => {
  const songs = [
    {
      id: "1",
      name: "song1",
      artist: "The Weekend",
      album: "Star Boy",
      playtime: "3:00",
      img: "https://i.pinimg.com/474x/a2/15/74/a21574e989114d109a05fddaa01040cc.jpg",
    },
    {
      id: "2",
      name: "song2",
      artist: "Billie Ellish",
      album: "Star Boy",
      playtime: "3:00",
      img: "https://i.pinimg.com/474x/87/3d/c3/873dc39a2615ff06a296b1689f6f89f6.jpg",
    },
    {
      id: "3",
      name: "song3",
      artist: "Adele",
      album: "Star Boy",
      playtime: "3:00",
      img: "https://i.pinimg.com/474x/4f/cb/67/4fcb679577d0e730c63fe8f70833f881.jpg",
    },
    {
      id: "4",
      name: "song4",
      artist: "Billie Ellish",
      album: "Star Boy",
      playtime: "3:00",
      img: "https://i.pinimg.com/474x/83/27/88/83278815d2d8bc350328da5ca995dba3.jpg",
    },
    {
      id: "5",
      name: "song5",
      artist: "Billie Ellish",
      album: "Star Boy",
      playtime: "3:00",
      img: "https://i.pinimg.com/474x/ca/5d/62/ca5d62ddf83fb03d6c53cd991cb1bb4b.jpg",
    },
  ];
  return (
    <div className=" py-2">
      <div className=" flex justify-between px-3">
        <h2 className=" text-lg font-semibold font-mono text-[#555555]">
          New Release Songs
        </h2>
        <button className=" border-2 border-[#c5c4c4de] hover:bg-[#c5c4c4de] px-3 py-1 rounded text-xs font-semibold tracking-wider">
          See All
        </button>
      </div>
      <table className=" flex flex-col gap-3 mt-2 w-[96%] mx-auto table-fixed ">
        <thead className=" flex">
          <tr className=" flex w-[72%] mx-auto ps-5 items-center gap-10">
            <th>Song</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Playtime</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song) => (
            <tr className=" flex gap-3 items-center justify-start px-3 py-2 rounded hover:bg-[#b3b1b169]">
              <td className=" font-bold ">0{song.id}</td>
              <img className=" w-16 rounded" src={song.img} alt="" />
              <td className=" flex justify-evenly w-full items-center ">
                <h2 className=" text-start">{song.name}</h2>
                <h2 className=" text-start">{song.artist}</h2>
                <h2 className=" text-start">{song.album}</h2>
                <h2 className=" text-start">{song.playtime}</h2>
              </td>
              <td className=" flex gap-5 items-center">
                <Tooltip title="listen" arrow>
                  <IconButton>
                    <IoHeadsetOutline className=" text-xl text-gray-500 hover:text-red-500 focus:text-red-500 mb-0" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="like" arrow>
                  <IconButton>
                    <IoHeartCircleOutline className=" text-2xl text-gray-500 hover:text-red-500 focus:text-red-500 mb-0" />
                  </IconButton>
                </Tooltip>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default New;
