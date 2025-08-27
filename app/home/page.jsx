"use client";

import React, { use, useEffect } from "react";
import Header from "../../components/home/header";
import BrandSection from "../../components/home/sections/brandnewSection";
import ContinueSection from "../../components/home/sections/continueSection";
import CollectionSection from "../../components/home/sections/collectionsSection";
import FunnySection from "../../components/home/sections/FunnySection";
import PreviousSection from "../../components/home/sections/previousSection";
import { mainMovieData, similarMovies } from "../../data";

const page = () => {
  const { fetchMovies } = useTMBD();

  // useEffect(() => {
  fetchMovies(
    "discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc/"
  );
  // }, []);

  return (
    <div className=" h-auto w-full flex flex-col items-center bg-red-00">
      <Header />
      <div className="h-full w-[90%] mt-5 flex flex-col ">
        {/* MovieCards */}
        {/* <ContinueWatching /> */}

        {/* Brand new releases */}
        <BrandSection data={mainMovieData} />
        {/* Continue Watching */}
        <ContinueSection data={mainMovieData} />
        {/* Collections */}
        <CollectionSection data={mainMovieData} />
        {/* Funny Tv Shows */}
        <FunnySection data={similarMovies} />
        {/* Based on your previous watches */}
        <PreviousSection data={mainMovieData} />
      </div>
    </div>
  );
};

export default page;
