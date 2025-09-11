"use client";

import Header from "@/components/home/header";
import BrandSection from "@/components/home/sections/brandnewSection";
import CollectionSection from "@/components/home/sections/collectionsSection";
import TvSection from "@/components/home/sections/tvSection";
import TrendingSection from "@/components/home/sections/trendingSection";
import { useTMBD } from "@/contexts/TMDBContext";

const Home = () => {
  const { movieData, tvData, trendingData, loading, error } = useTMBD();

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
    <div className=" h-auto w-full flex flex-col items-center bg-red-00">
      {/* <h1>Welcome to the Home Page</h1> */}
      <Header />

      {/* mainSection */}
      <div className="h-full w-[98%] md:w-[95%] lg:w-[90%] mt-5 flex flex-col ">
        {/* MovieCards */}
        <BrandSection data={movieData} />
        {/* <ContinueSection data={nowPlayingData} /> */}
        <CollectionSection />
        <TvSection data={tvData} />
        <TrendingSection data={trendingData} />
      </div>
    </div>
  );
};

export default Home;
