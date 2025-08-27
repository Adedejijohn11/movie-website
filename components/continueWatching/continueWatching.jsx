import React from "react";

const ContinueWatching = () => {
  return (
    <div className=" h-auto w-full flex flex-col items-center ">
      <Header />
      <MainSection seasonMovies={seasonMovies} />
    </div>
  );
};

export default ContinueWatching;
