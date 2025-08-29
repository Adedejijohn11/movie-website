"use client";

import React, { useEffect } from "react";
import Header from "../../components/home/header";
import BrandSection from "../../components/home/sections/brandnewSection";
import ContinueSection from "../../components/home/sections/continueSection";
import CollectionSection from "../../components/home/sections/collectionsSection";
import FunnySection from "../../components/home/sections/FunnySection";
import PreviousSection from "../../components/home/sections/previousSection";
import { useTMBD } from "../../contexts/TMDBContext";
import { mainMovieData } from "../../data";

const page = () => {
  const {
    fetchMovies,
    fetchTvShows,
    fetchTrending,
    movieData,
    tvData,
    trendingData,
    loading,
    error,
  } = useTMBD();

  useEffect(() => {
    fetchMovies(
      "/discover/movie?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc"
    );
    fetchTvShows(
      "/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc"
    );
    fetchTrending("/trending/movie/day?language=en-US");
    // fetchNowPlaying("");
  }, [fetchMovies, fetchTvShows, fetchTrending]);

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <div className="text-xl text-red-500">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className=" h-auto w-full flex flex-col items-center bg-red-00">
      <Header />
      <div className="h-full w-[90%] mt-5 flex flex-col ">
        {/* MovieCards */}
        {/* Brand new releases */}
        <BrandSection data={movieData} />
        {/* Continue Watching */}
        {/* <ContinueSection data={nowPlayingData} /> */}
        {/* Collections */}
        <CollectionSection />
        {/* Funny Tv Shows */}
        <FunnySection data={tvData} />
        {/* Based on your previous watches */}
        <PreviousSection data={trendingData} />
      </div>
    </div>
  );
};

export default page;
