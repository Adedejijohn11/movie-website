"use client";

import React, { useEffect } from "react";
import Header from "../../../components/tvSeries/seriesDetails/header";
import MainSection from "../../../components/tvSeries/seriesDetails/mainSection";
import { useTMBD } from "../../../contexts/TMDBContext";
import { useParams,  } from "next/navigation";

const page = () => {
  const { fetchSeriesDetails, seriesDetailsData, loading, error } = useTMBD();

  const params = useParams();

  const { id } = params;


  useEffect(() => {
    fetchSeriesDetails(`/tv/${id}`);
  }, [fetchSeriesDetails, id]);

  // console.log("====================================");
  // console.log(seriesDetailsData);
  // console.log("====================================");

  return (
    <div>
      <Header />
      <MainSection />
    </div>
  );
};

export default page;
