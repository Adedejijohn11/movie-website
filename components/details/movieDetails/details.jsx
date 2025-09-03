"use client";

import React, { useEffect } from "react";
import Header from "./header";
import MainSection from "./mainSection";
// import { seasonMovies } from "../../../data";
import { useTMBD } from "../../../contexts/TMDBContext";

const Details = () => {
  const { fetchSimilarMovies, similarMoviesData, loading, error } = useTMBD();

  useEffect(() => {
    fetchSimilarMovies("/trending/all/day?language=en-US");
  }, [fetchSimilarMovies]);

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
    <div className=" h-auto w-full flex flex-col items-center ">
      <Header />
      <MainSection data={similarMoviesData} />
    </div>
  );
};

export default Details;
