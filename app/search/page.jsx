"use client";

import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { useTMBD } from "@/contexts/TMDBContext";
import SearchCard from "@/components/ui/Cards/searchCard";

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");

  const {
    searchMovies,
    searchMoviesData,
    SearchTv,
    searchTvData,
    loading,
    error,
  } = useTMBD();

  const handleSearch = (e) => {
    e.preventDefault();
    searchMovies(`/search/movie?query=${searchQuery}`);
    SearchTv(`/search/tv?query=${searchQuery}`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-b border-highlight/20">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-highlight mb-2">
            Search Cinema
          </h1>
          <p className="text-gray-300 text-lg">
            Discover your next favorite movie or TV show
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="relative flex items-center border border-gray-600 focus:ring-2 focus:ring-highlight rounded-lg overflow-hidden ">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <IoMdSearch className="h-6 w-6 text-gray-400" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for movies, TV shows, people..."
            className="w-[90%] pl-12 pr-4 py-4 bg-gray-800/50 text-white placeholder-gray-400 focus:outline-none text-lg"
          />
          <button
            className="w-[100px] h-[60px] bg-gray-400 text-white"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>

      {/* Search Results */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        {/* searchMovies */}
        {searchMoviesData?.length === 0 ? (
          ""
        ) : (
          <h1 className="text-2xl mb-8">Movies</h1>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {searchMoviesData?.map((item) => (
            <SearchCard key={item.id} type={"movies"} item={item} />
          ))}
        </div>
        {/* SearchTV */}

        {searchTvData?.length === 0 ? (
          ""
        ) : (
          <h1 className="text-2xl my-8">Tv shows </h1>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {searchTvData?.map((item) => (
            <SearchCard key={item.id} type={"tvseries"} item={item} />
          ))}
        </div>

        {searchMoviesData?.length === 0 && searchTvData?.length === 0 && (
          <div className="text-center py-16">
            <IoMdSearch className="h-24 w-24 text-gray-600 mx-auto mb-6" />
            <h2 className="text-2xl font-semibold text-gray-400 mb-2">
              Start Your Search
            </h2>
            <p className="text-gray-500">
              Enter a movie, TV show, or person's name to get started
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
