"use client";

import { useTMBD } from "@/contexts/TMDBContext";
import Featured from "@/components/tvSeries/sections/featured";
import NewlyAdded from "@/components/tvSeries/sections/new";
import Critically from "@/components/tvSeries/sections/Critically";
import TopRated from "@/components/tvSeries/sections/topRated";

const page = () => {
  const { tvData, topRatedData, loading, error } = useTMBD();

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
      <div className=" h-[450px] md:h-[500px] w-[90%] md:w-full lg:w-full flex justify-center items-center  bg-highlight  border-b-3 border-blue-400/80 shadow-lg shadow-blue-400/50 overflow-hidden">
        <h1 className="text-black text-[30px] md:text-[40px]">TV SERIES</h1>
      </div>
      <div className="h-full w-[90%] mt-5 flex flex-col">
        <Featured data={tvData} />
        <NewlyAdded />
        <TopRated data={topRatedData} />
        <Critically data={tvData} />
      </div>
    </div>
  );
};

export default page;
