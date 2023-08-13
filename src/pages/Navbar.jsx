import React from "react";
import TopNavbar from "../components/navbar-components/TopNavbar";
import LeftNavbar from "../components/navbar-components/LeftNavbar";
import BottomNavbar from "../components/navbar-components/BottomNavbar";
import "../components/navbar-components/navbar.css";
import Category from "../components/navbar-components/Category";

const Navbar = () => {
  return (
    <div className=" w-[98%] mx-auto h-screen ">
      <TopNavbar />
      <div className=" flex gap-2">
        <div className=" left-nav">
          <LeftNavbar />
        </div>
        <Category />
      </div>
      <div className=" bottom-nav w-full">
        <BottomNavbar />
      </div>
    </div>
  );
};

export default Navbar;
