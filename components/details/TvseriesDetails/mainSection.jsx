"use client";

import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { IoMdVideocam } from "react-icons/io";
import Seasons from "@/components/details/TvseriesDetails/seasons";
// import { useTMBD } from "@/contexts/TMDBContext";

const MainSection = ({ seriesDetailsData }) => {
  // const { seriesDetailsData } = useTMBD();

  return (
    <div className="h-full  w-[90%] mt-6 flex flex-col overflow-y-scroll md:overflow-visible  scroll-smooth scrollbar-hide pt-5  ">
      <div className=" h-full  w-full  z-30 flex flex-col lg:flex-row justify-between items-center mb-5 ">
        <div className="h-auto w-full lg:w-[60%] flex justify-center items-center   ">
          <div className="flex flex-col mt-0">
            <h1 className="text-[25px] md:text-[30px] lg:text-[55px] font-bold text-highlight ">
              {seriesDetailsData?.original_name}
            </h1>
            <p className="text-[15px] md:text-[16px] lg:text-[20px] ">
              {seriesDetailsData?.genres?.map((genre) => genre.name).join(", ")}
            </p>
            <p className="text-[15px] md:text-[16px] lg:text-[20px]  mt-0 md:mt-2 lg:mt-3">
              {seriesDetailsData?.release_date ||
                seriesDetailsData?.first_air_date}
            </p>

            <p className="text-[15px] md:text-[16px] lg:text-[20px]   mt-0 md:mt-2 lg:mt-3">
              {seriesDetailsData?.overview}
            </p>
            <div className="flex flex-col md:flex-row  gap-2 mt-5 lg:mt-10">
              <button className="flex flex-row items-center justify-center gap-3 px-3   md:px-10  py-[12px] lg:py-[13px] font-semibold bg-blue-400 text-white text-[15px] lg:text-[16px] xl:text-[18px] rounded-[10px] md:rounded-full hover:bg-blue-400/80">
                <FaPlay />
                <p>Watch now</p>
              </button>
              <button className="flex items-center justify-center gap-3 px-10 lg:px-15 py-[12px] lg:py-[13px] font-semibold border-2  hover:border-amber-500 text-highlight hover:text-amber-500 text-[15px] lg:text-[18px] text-center rounded-[10px] md:rounded-full">
                <IoMdVideocam /> Watch trailer
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Seasons />
      </div>
    </div>
  );
};

export default MainSection;
