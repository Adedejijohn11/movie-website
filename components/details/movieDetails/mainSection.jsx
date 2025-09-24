"use client";

import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { IoCheckmark } from "react-icons/io5";
import { IoMdVideocam } from "react-icons/io";
import MovieCard from "../../ui/Cards/movieCard";
import { useTMBD } from "@/contexts/TMDBContext";

const MainSection = ({ data, movieDetails }) => {
  const { Addtolist } = useTMBD();
  const [edit, setEdit] = useState(true);

  const handleList = () => {
    Addtolist(movieDetails);
    setEdit(!edit);
  };

  return (
    <div className="h-full w-[90%] flex flex-col items-center   overflow-y-scroll md:overflow-visible  scroll-smooth scrollbar-hide pt-5 ">
      <div className=" h-full  w-full  z-30 flex flex-col lg:flex-row justify-between items-center mb-5 ">
        <div className="h-auto w-full lg:w-[60%] flex justify-center items-center   ">
          <div className="flex flex-col mx-4  mt-0">
            <h1 className="text-[25px] md:text-[30px] lg:text-[55px] font-bold text-highlight ">
              {movieDetails?.title ||
                movieDetails?.original_title ||
                movieDetails?.name}
            </h1>
            <p className="text-[15px] md:text-[16px] lg:text-[20px] ">
              {movieDetails?.genres?.map((genre) => genre.name).join(", ")}
            </p>
            <p className="text-[15px] md:text-[16px] lg:text-[20px]  mt-0 md:mt-2 lg:mt-3">
              {movieDetails?.release_date}
            </p>

            <p className="text-[15px] md:text-[16px] lg:text-[20px]   mt-0 md:mt-2 lg:mt-3">
              {movieDetails?.overview}
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
            <div className="w-[80px] md:w-[100px] flex flex-col mt-5 ml-[10px] ">
              <button
                type="button"
                onClick={handleList}
                className="w-full text-[25px] md:text-[30px] flex items-center justify-center font-bold"
              >
                {edit ? <GoPlus /> : <IoCheckmark />}
              </button>
              <p className="text-[15px] md:text-[20px]  ">Add to List</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-auto w-full flex flex-col mt-5">
        <h1 className="text-[16px] md:text-[20px] lg:text-[25px] pl-[20px] ">
          More like this
        </h1>

        <div
          className="h-full w-full mt-2 gap-2 lg:gap-10 grid grid-cols-3 md:grid-cols-4 
      lg:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] place-items-center"
        >
          {data?.map((item) => (
            <MovieCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainSection;
