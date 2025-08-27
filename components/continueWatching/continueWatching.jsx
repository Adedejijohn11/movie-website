// import React from "react";
import Header from "../continueWatching/header";
import { seasonMovies } from "../../data";
import MainSection from "../continueWatching/mainSection";

const ContinueWatching = () => {
  return (
    <div className=" h-auto w-full flex flex-col items-center ">
      <Header />
      <MainSection seasonMovies={seasonMovies} />
    </div>
  );
};

export default ContinueWatching;
