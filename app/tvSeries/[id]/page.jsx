"use client";

import React, { useEffect } from "react";
import Header from "../../../components/tvSeries/seriesDetails/header";
import MainSection from "../../../components/tvSeries/seriesDetails/mainSection";
import { useTMBD } from "../../../contexts/TMDBContext";
import { useParams } from "next/navigation";

const page = () => {
  const { fetchSeriesDetails, seriesDetailsData, loading, error } = useTMBD();
  const params = useParams();
  const { id } = params;

  console.log("====================================");
  console.log(id);
  console.log("====================================");

  useEffect(() => {
    fetchSeriesDetails(`/tv/${id}`);
  }, [fetchSeriesDetails]);

  console.log("====================================");
  console.log(seriesDetailsData);
  console.log("====================================");

  return (
    <div>
      <Header />
      <MainSection />
    </div>
  );
};

export default page;
