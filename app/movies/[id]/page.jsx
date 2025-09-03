"use client";

import React, { useEffect } from "react";
import Details from "../../../components/details/movieDetails/details";
import { useTMBD } from "../../../contexts/TMDBContext";
import { useParams } from "next/navigation";

const page = () => {
  const { fetchMovieDetails, loading, error } = useTMBD();
  const params = useParams();
  const { id } = params;

  console.log("====================================");
  console.log(id);
  console.log("====================================");

  useEffect(() => {
    fetchMovieDetails(`/movie/${id}`);
  }, [fetchMovieDetails]);

  // console.log("====================================");
  // console.log(movieDetailsData);
  // console.log("====================================");

  return (
    <div>
      <Details />
    </div>
  );
};

export default page;
