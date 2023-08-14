import React from "react";
import "../../components/navbar-components/navbar.css";
import { Route, Routes } from "react-router-dom";
import TopNavbar from "../../components/navbar-components/TopNavbar";
import LeftNavbar from "../../components/navbar-components/LeftNavbar";
import Category from "../../components/navbar-components/Category";
import Home from "../../pages/Home";
import Liked from "../../pages/Liked";
import BottomNavbar from "../../components/navbar-components/BottomNavbar";

const Path = () => {
  return (
    <div>
      <div className=" w-[98%] mx-auto h-screen">
        <TopNavbar />
        <div className=" flex gap-2">
          <div className=" left-nav">
            <LeftNavbar />
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/like" element={<Liked />} />
          </Routes>
        </div>
        <div className=" bottom-nav w-full">
          <BottomNavbar />
        </div>
      </div>
    </div>
  );
};

export default Path;
