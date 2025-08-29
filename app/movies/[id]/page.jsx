"use client";

import React, { useEffect } from "react";
import ContinueWatching from "../../../components/continueWatching/continueWatching";
import { useTMBD } from "../../../contexts/TMDBContext";
import { useParams } from 'next/navigation';


const page = () => {
  const { fetchMovieDetails, movieDetailsData, loading, error } = useTMBD();
  const params = useParams();
  const { id } = params;



  useEffect(() => {
    fetchMovieDetails(`/movie/${id}`);
  }, [fetchMovieDetails]);


  console.log('====================================');
  console.log(movieDetailsData);
  console.log('====================================');


  return (
    <div>
      <ContinueWatching />
    </div>
  );
};

export default page;
