import React from "react";
import MovieCard from "../ui/Cards/movieCard";

const MainSection = ({ data }) => {
  return (
    <div className="h-full w-full flex flex-col">
      <h1 className="text-[16px] md:text-[20px] lg:text-[25px] pl-[20px] ">
        Similar Movies
      </h1>

      <div
        className="h-full w-full mt-2 gap-2 lg:gap-10 grid grid-cols-3 md:grid-cols-4 
      lg:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] place-items-center"
      >
        {data.map((item) => (
          <MovieCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MainSection;
