"use client";

import React, { useEffect, useState } from "react";
import { useTMBD } from "@/contexts/TMDBContext";
import { useParams } from "next/navigation";
import { getImageUrl } from "@/lib/randfunctions";
import Header from "@/components/details/movieDetails/header";
import MainSection from "@/components/details/movieDetails/mainSection";

const page = () => {
  const {
    fetchMovieDetails,
    movieData,
    movieDetailsData,
    trendingData,
    similarMoviesData,
  } = useTMBD();
  const params = useParams();
  const { id } = params;

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // 1️ Check if we already have this movie in context
    const fromContext =
      movieData.find((m) => m.id.toString() === id.toString()) ||
      trendingData.find((t) => t.id.toString() === id.toString()) ||
      similarMoviesData.find((s) => s.id.toString() === id.toString());

    if (fromContext) {
      setMovie({
        ...fromContext,
        poster_url: getImageUrl(fromContext.poster_path, "w780"),
        backdrop_url: getImageUrl(fromContext.backdrop_path, "w1280"),
      });
    } else {
      // 2️ Fetch if it's not in context
      fetchMovieDetails(`/movie/${id}`);
    }
  }, [id, movieData, fetchMovieDetails]);

  useEffect(() => {
    // 3️ Update state once movieDetailsData comes in
    if (movieDetailsData?.id?.toString() === id.toString()) {
      setMovie({
        ...movieDetailsData,
        poster_url: getImageUrl(movieDetailsData.poster_path, "w780"),
        backdrop_url: getImageUrl(movieDetailsData.backdrop_path, "w1280"),
      });
    }
  }, [movieDetailsData, id]);

  if (!movie) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg">Loading...</p>
      </div>
    );
  }

  return (
    <div className=" h-[800px] md:h-full w-full flex flex-col items-center">
      <Header movieDetails={movie} />
      <MainSection data={similarMoviesData} movieDetails={movie} />
    </div>
  );
};

export default page;
