"use client";

import React, { useEffect } from "react";
import Header from "../../components/movies/header";
import MainSection from "../../components/movies/mainSection";
import { useTMBD } from "../../contexts/TMDBContext";

const page = () => {
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
    <div className="min-h-screen h-auto w-full flex flex-col items-center">
      <Header />
      <div className="h-full w-[95%] mt-5 flex flex-col">
        <MainSection data={similarMoviesData} />
      </div>
    </div>
  );
};

export default page;
