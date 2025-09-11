"use client";

import React, { useEffect } from "react";
import Header from "@/components/movies/header";
import MainSection from "@/components/movies/mainSection";
import { useTMBD } from "@/contexts/TMDBContext";

function page() {
  const { similarMoviesData } = useTMBD();

  return (
    <div className="min-h-screen h-auto w-full flex flex-col items-center">
      <Header />
      <div className="h-full w-[95%] mt-5 flex flex-col">
        <MainSection data={similarMoviesData} />
      </div>
    </div>
  );
}

export default page;
