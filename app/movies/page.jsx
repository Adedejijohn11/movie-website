import React from "react";
import { similarMovies } from "../../data";
import Header from "../../components/movies/header";
import MainSection from "../../components/movies/mainSection";

const page = () => {
  return (
    <div className="min-h-screen h-auto w-full flex flex-col items-center">
      <Header />
      <div className="h-full w-[95%] mt-5 flex flex-col">
        <MainSection data={similarMovies} />
      </div>
    </div>
  );
};

export default page;
