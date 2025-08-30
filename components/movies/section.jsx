"use client";

import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

// this is the seasonmovies that i pass from the parent component to the mainsection
import { seasonMovies } from "../../data";
// <MainSection seasonMovies={seasonMovies} />

const MainSection = () => {
  const [seasonOpen, setSeasonOpen] = useState(false);
  const [selectionSeason, setSelectionSeason] = useState("Season 1");
  const seasons = Object.keys(seasonMovies);

  const toggleSeason = () => {
    setSeasonOpen(!seasonOpen);
  };

  const handleSelect = (season) => {
    setSelectionSeason(season);
    setSeasonOpen(false);
  };

  return (
    <div className="h-full w-[93%] mt-6 flex flex-col ">
      <div className="flex flex-col ">
        {/* Season selection */}
        <div className=" relative  w-auto ">
          <button
            onClick={toggleSeason}
            className=" h-[20%] w-[140px] py-[10px] px-2  flex items-center justify-between   border-2  hover:border-amber-500 text-highlight hover:text-amber-500 text-[15px] lg:text-[18px] rounded-full"
          >
            <p>{selectionSeason}</p>
            <MdKeyboardArrowDown />
          </button>

          {seasonOpen && (
            <div className=" absolute top-12 left-3 h-auto w-[120px] flex flex-col items-center  bg-white text-gray-600 border-b-3 border-white/80 shadow-lg shadow-white/50 rounded-md">
              {seasons.map((season) => (
                <div
                  key={season}
                  onClick={() => handleSelect(season)}
                  className=" h-[25px] w-full py-[10px] px-1 flex items-center  hover:bg-blue-500 hover:text-white text-[18px] "
                >
                  {season}
                </div>
              ))}
            </div>
          )}
        </div>

        <div
          className="h-[80%] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
        
         gap-2 lg:gap-4 mt-6 "
        >
          {seasonMovies[selectionSeason].map((item) => (
            <div
              key={item.id}
              className="w-auto md:w-[340px] lg:w-[305px] xl:w-[420px]  "
            >
              <div className="h-[150px] md:h-[300px] w-[150px] md:w-[340px] lg:w-[305px] xl:w-[420px] rounded-[9px] flex justify-center overflow-hidden bg-white text-black ">
                <img
                  className="h-[150px] md:h-[300px] w-[150px] md:w-[340px] lg:w-[420px]"
                  src={item.poster}
                  alt="cat"
                />
              </div>
              <div className=" mt-3  ">
                <h1 className="text-[18px] font-bold">
                  Ep.{item.id}: {item.title}
                </h1>
                <p className="text-[16px] ">
                  The Johnsons face a crisis when their secret family recipe
                  goes missing just before a big restaurant review.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainSection;
