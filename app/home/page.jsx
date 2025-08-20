import React from "react";
import Header from "../../components/home/header";
import BrandSection from "../../components/home/sections/brandnewSection";
import ContinueSection from "../../components/home/sections/continueSection";
import CollectionSection from "../../components/home/sections/collectionsSection";
import FunnySection from "../../components/home/sections/FunnySection";
import PreviousSection from "../../components/home/sections/previousSection";
import { mainMovieData, similarMovies } from "../../data";

const page = () => {
  return (
    <div className="min-h-screen h-auto w-full flex flex-col items-center bg-red-00">
      <Header />
      <div className="h-full w-[90%] mt-5 flex flex-col ">
        {/* MovieCards */}

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
