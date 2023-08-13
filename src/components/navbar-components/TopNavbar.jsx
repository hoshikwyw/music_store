import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsSearch,BsLightbulb } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import {
  AiOutlineHome,
  AiOutlineLike,
  AiOutlineSnippets,
  AiOutlineSetting,AiOutlineLogin
} from "react-icons/ai";
import { MdOutlineSwitchAccount,MdOutlineGTranslate } from "react-icons/md";
import {BiLogOut} from "react-icons/bi"
import logo from "../../assets/music.png";
import "./topnavbar.css";

const TopNavbar = () => {
  const [open, setOpen] = useState(false);
  // console.log(open);
  const [boxOpen, setBoxOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleBox = () => {
    setBoxOpen(!boxOpen);
  };
  return (
    <div>
      <div className=" flex justify-between w-full">
        {/* left side  */}
        <div className=" flex items-baseline gap-5 ms-3">
          <div className=" items-center text-center burger hover:bg-gray-200 px-3 py-2 rounded-full">
            <button className=" text-2xl" onClick={handleOpen}>
              <RxHamburgerMenu />
            </button>
          </div>
          <div className=" flex items-center gap-2">
            <img src={logo} alt="" className=" w-10" />
            <h2 className=" text-xl name pt-4">Music Store</h2>
          </div>
        </div>
        {/* right side  */}
        <div className=" flex items-center gap-5">
          <div className=" flex items-center gap-5 border px-3 py-1 rounded shadow">
            <input type="text" className="  outline-none search-bar" />
            <h2>
              <BsSearch />
            </h2>
          </div>
          <div>
            <button
              className=" text-3xl text-gray-500 pt-2"
              onClick={handleBox}>
              <CgProfile />
            </button>
          </div>
        </div>
      </div>
      {/* side bar  */}
      <div
        className={` fixed flex flex-col w-fit items-start gap-2 h-screen bg-[#e6dcd3] rounded-e-2xl ${
          open ? " top-0 left-0" : " top-0 left-[-10000px]"
        }`}>
        <div className=" flex items-baseline gap-5 ps-6 pe-8 border-b border-gray-700 w-full">
          <div className=" hover:bg-[#bda18c] px-3 py-2 rounded-full items-center">
            <button className=" text-2xl" onClick={handleOpen}>
              <RxHamburgerMenu />
            </button>
          </div>
          <div className=" flex items-center gap-2">
            <img src={logo} alt="" className=" w-10" />
            <h2 className=" text-xl name pt-4">Music Store</h2>
          </div>
        </div>
        <div className=" flex justify-start items-center w-[80%] rounded-full gap-5 hover:bg-[#bda18c] ms-6 px-3 py-1">
          <h2 className=" text-2xl text-gray-700">
            <AiOutlineHome />
          </h2>
          <h2 className=" text-lg">Home</h2>
        </div>
        <div className=" flex justify-start items-center w-[80%] rounded-full gap-5 hover:bg-[#bda18c] ms-6 px-3 py-1">
          <h2 className=" text-2xl text-gray-700">
            <AiOutlineLike />
          </h2>
          <h2 className=" text-lg">Liked</h2>
        </div>
        <div className=" flex justify-start items-center w-[80%] rounded-full gap-5 hover:bg-[#bda18c] ms-6 px-3 py-1">
          <h2 className=" text-2xl text-gray-700">
            <AiOutlineSnippets />
          </h2>
          <h2 className=" text-lg">Albums</h2>
        </div>
        <div className=" flex justify-start items-center w-[80%] rounded-full gap-5 hover:bg-[#bda18c] ms-6 px-3 py-1">
          <h2 className=" text-2xl text-gray-700">
            <AiOutlineSetting />
          </h2>
          <h2 className=" text-lg">Settings</h2>
        </div>
      </div>

      {/* profile box  */}
      <div
        className={` fixed bg-[#e6dcd3] rounded shadow-md text-[#474747] ${
          boxOpen ? "right-14 top-2 " : "right-[-1000000px]"
        }`}>
        <div className=" flex items-center gap-2 border-b border-gray-500 px-8 py-2 ">
          <h2 className=" text-2xl text-gray-700">
            <CgProfile />
          </h2>
          <h2 className=" font-semibold">Hello World</h2>
        </div>
        <div className=" flex flex-col gap-1 border-b border-gray-500 pb-1">
          <div className=" px-8 py-2 flex gap-2 hover:bg-[#bda18c]">
            <h2 className=" text-2xl text-gray-700">
              <MdOutlineSwitchAccount />
            </h2>
            <h2>Switch Account</h2>
          </div>
          <div className=" px-8 py-2 flex gap-2 hover:bg-[#bda18c]">
            <h2 className=" text-2xl text-gray-700">
              <BiLogOut />
            </h2>
            <h2>Sign Out</h2>
          </div>
          <div className=" px-8 py-2 flex gap-2 hover:bg-[#bda18c]">
            <h2 className=" text-2xl text-gray-700">
              <AiOutlineLogin />
            </h2>
            <h2>Register</h2>
          </div>
        </div>
        <div className=" flex flex-col gap-1 pt-1">
        <div className=" px-8 py-2 flex gap-2 hover:bg-[#bda18c]">
            <h2 className=" text-2xl text-gray-700">
              <MdOutlineGTranslate />
            </h2>
            <h2>Language</h2>
          </div>
          <div className=" px-8 py-2 flex gap-2 hover:bg-[#bda18c]">
            <h2 className=" text-xl text-gray-700">
              <BsLightbulb />
            </h2>
            <h2>Theme</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
