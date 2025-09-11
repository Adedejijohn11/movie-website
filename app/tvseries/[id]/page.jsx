"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/details/TvseriesDetails/header";
import MainSection from "@/components/details/TvseriesDetails/mainSection";
import { useTMBD } from "@/contexts/TMDBContext";
import { useParams } from "next/navigation";
import { getImageUrl } from "@/lib/randfunctions";

const page = () => {
  const {
    fetchSeriesDetails,
    seriesDetailsData,
    tvData,
    topRatedData,
    loading,
    error,
  } = useTMBD();

  const params = useParams();
  const { id } = params;

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fromContext =
      tvData.find((tv) => tv.id.toString() === id.toString()) ||
      topRatedData.find((tv) => tv.id.toString() === id.toString());

    if (fromContext) {
      setMovie({
        ...fromContext,
        poster_url: getImageUrl(fromContext.poster_path, "w780"),
        backdrop_url: getImageUrl(fromContext.backdrop_path, "w1280"),
      });
    } else {
      fetchSeriesDetails(`/tv/${id}`);
    }
  }, [id, tvData, fetchSeriesDetails]);

  useEffect(() => {
    if (seriesDetailsData?.id?.toString() === id.toString()) {
      setMovie({
        ...seriesDetailsData,
        poster_url: getImageUrl(seriesDetailsData.poster_path, "w780"),
        backdrop_url: getImageUrl(seriesDetailsData.backdrop_path, "w1280"),
      });
    }
  }, [seriesDetailsData, id]);
  // useEffect(() => {
  //   fetchSeriesDetails(`/tv/${id}`);
  // }, [fetchSeriesDetails, id]);

  // console.log("====================================");
  // console.log(seriesDetailsData);
  // console.log("====================================");

  return (
    <div className=" h-[800px] md:h-full w-full flex flex-col items-center">
      <Header seriesDetailsData={movie} />
      <MainSection seriesDetailsData={movie} />
    </div>
  );
};

export default page;
