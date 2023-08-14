import React from "react";
import Trending from "../components/home-components/Trending";
import Chart from "../components/home-components/Chart";
import "../components/home-components/home.css";
import TopArtist from "../components/home-components/TopArtist";
import New from "../components/home-components/New";
import Playlists from "../components/home-components/Playlists";

const Home = () => {
  return (
    <>
      <div className=" w-[98%] mx-auto rounded mt-5">
        <div className=" main">
          <div className=" trend h-full">
            <Trending />
          </div>
          <div className=" chart rounded">
            <Chart />
          </div>
        </div>
        <div>
          <TopArtist />
        </div>
        <div className=" flex flex-col md:flex-row gap-5 mt-3 h-[300px]">
          <div className=" bg-slate-400 w-full md:w-[65%]">
            <New />
          </div>
          <div className=" bg-red-200 w-full md:w-[35%]">
            <Playlists />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
