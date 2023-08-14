import React from "react";
import bgTrend from "../../assets/trending.jpg";
import { IoHeadsetOutline, IoHeartCircleOutline } from "react-icons/io5";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import "./styles.css";

const Trending = () => {
    // console.log(sidebarOpen);
  return (
    <div className={` h-full w-full `} >
      <Swiper
        direction={"vertical"}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper">
        <SwiperSlide>
          <div className=" bg-[url(https://i.pinimg.com/564x/67/8d/dd/678dddfb4c55bd8aef94c37cb04836a9.jpg)] bg-cover bg-no-repeat bg-center rounded h-full w-full">
            <div className=" bg-black bg-opacity-60 h-full w-full text-white bg-cover rounded">
              <h2 className=" text-[#ffffffd2] font-thin font-mono pt-3 ps-3">
                Trending New Songs
              </h2>
              <div className=" ms-20 mt-28">
                <h2 className=" text-4xl text-[#ffffff] font-semibold tracking-wider font-mono drop-shadow-lg">
                  Shut Down
                </h2>
                <div className=" flex gap-12 items-center mt-2">
                  <h2 className=" font-thin tracking-wider font-mono drop-shadow ">
                    Blackpink
                  </h2>
                  <h2 className=" font-semibold text-sm tracking-widest text-[#e8ecef] drop-shadow-md">
                    <span className=" font-bold ">200M</span> Views
                  </h2>
                </div>
                <div className=" mt-5 flex items-center gap-10">
                  <button className=" flex items-center gap-3 bg-[#b6b6b6] bg-opacity-40 px-3 py-1 rounded font-semibold tracking-wider font-mono">
                    Listen{" "}
                    <span>
                      <IoHeadsetOutline />
                    </span>
                  </button>
                  <Tooltip title="like" arrow>
                    <IconButton>
                      <IoHeartCircleOutline className=" text-3xl text-red-500 mb-0" />
                    </IconButton>
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-[url(https://c4.wallpaperflare.com/wallpaper/147/273/141/nirvana-album-covers-cover-art-music-wallpaper-preview.jpg)] bg-cover bg-no-repeat bg-center rounded h-full w-full">
            <div className=" bg-black bg-opacity-60 h-full w-full text-white bg-cover rounded">
              <h2 className=" text-[#ffffffd2] font-thin font-mono pt-3 ps-3">
                Trending New Songs
              </h2>
              <div className=" ms-20 mt-28">
                <h2 className=" text-4xl text-[#ffffff] font-semibold tracking-wider font-mono drop-shadow-lg">
                  Shut Down
                </h2>
                <div className=" flex gap-12 items-center mt-2">
                  <h2 className=" font-thin tracking-wider font-mono drop-shadow ">
                    Blackpink
                  </h2>
                  <h2 className=" font-semibold text-sm tracking-widest text-[#e8ecef] drop-shadow-md">
                    <span className=" font-bold ">200M</span> Views
                  </h2>
                </div>
                <div className=" mt-5 flex items-center gap-10">
                  <button className=" flex items-center gap-3 bg-[#b6b6b6] bg-opacity-40 px-3 py-1 rounded font-semibold tracking-wider font-mono">
                    Listen{" "}
                    <span>
                      <IoHeadsetOutline />
                    </span>
                  </button>
                  <Tooltip title="like" arrow>
                    <IconButton>
                      <IoHeartCircleOutline className=" text-3xl text-red-500 mb-0" />
                    </IconButton>
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-[url(https://plugins-media.makeupar.com/smb/blog/post/2022-10-13/ed3e29cd-cabc-43d5-832a-89c14dc7987c.jpg)] bg-cover bg-no-repeat bg-center rounded h-full w-full">
            <div className=" bg-black bg-opacity-60 h-full w-full text-white bg-cover rounded">
              <h2 className=" text-[#ffffffd2] font-thin font-mono pt-3 ps-3">
                Trending New Songs
              </h2>
              <div className=" ms-20 mt-28">
                <h2 className=" text-4xl text-[#ffffff] font-semibold tracking-wider font-mono drop-shadow-lg">
                  Shut Down
                </h2>
                <div className=" flex gap-12 items-center mt-2">
                  <h2 className=" font-thin tracking-wider font-mono drop-shadow ">
                    Blackpink
                  </h2>
                  <h2 className=" font-semibold text-sm tracking-widest text-[#e8ecef] drop-shadow-md">
                    <span className=" font-bold ">200M</span> Views
                  </h2>
                </div>
                <div className=" mt-5 flex items-center gap-10">
                  <button className=" flex items-center gap-3 bg-[#b6b6b6] bg-opacity-40 px-3 py-1 rounded font-semibold tracking-wider font-mono">
                    Listen{" "}
                    <span>
                      <IoHeadsetOutline />
                    </span>
                  </button>
                  <Tooltip title="like" arrow>
                    <IconButton>
                      <IoHeartCircleOutline className=" text-3xl text-red-500 mb-0" />
                    </IconButton>
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Trending;
