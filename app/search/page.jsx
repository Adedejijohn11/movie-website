"use client";

import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { MdFilterList } from "react-icons/md";
import { FaPlay, FaPlus } from "react-icons/fa";
import { IoMdVideocam } from "react-icons/io";
import { useTMBD } from "../../contexts/TMDBContext";
import { getImageUrl } from "../../lib/randfunctions";
import SearchCard from "../../components/ui/Cards/searchCard";

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const { searchMovies, searchMoviesData, loading, error } = useTMBD();

  const filters = [
    { id: "all", label: "All" },
    { id: "movies", label: "Movies" },
    { id: "tv", label: "TV Shows" },
    { id: "people", label: "People" },
  ];

  const genres = [
    "Action",
    "Comedy",
    "Drama",
    "Horror",
    "Romance",
    "Sci-Fi",
    "Thriller",
    "Documentary",
  ];

  console.log("====================================");
  console.log(searchQuery);
  console.log("====================================");

  // Mock search results for design
  const mockResults = [
    {
      id: 1,
      title: "The Dark Knight",
      type: "movie",
      year: "2008",
      rating: "9.0",
      poster: "/images/movie-2.jpg",
      genre: "Action, Crime, Drama",
    },
    {
      id: 2,
      title: "Breaking Bad",
      type: "tv",
      year: "2008-2013",
      rating: "9.5",
      poster: "/images/movie-3.jpg",
      genre: "Crime, Drama, Thriller",
    },
    {
      id: 3,
      title: "Inception",
      type: "movie",
      year: "2010",
      rating: "8.8",
      poster: "/images/movie-4.jpg",
      genre: "Action, Sci-Fi, Thriller",
    },
    {
      id: 4,
      title: "Stranger Things",
      type: "tv",
      year: "2016-2022",
      rating: "8.7",
      poster: "/images/movie-5.jpg",
      genre: "Drama, Fantasy, Horror",
    },
  ];

  const handleSearch = (e) => {
      e.preventDefault();
      searchMovies(`/search/movie?query=${searchQuery}`);
  };

    console.log("====================================");
    console.log(searchMoviesData);
    console.log("====================================");

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
          <button className="w-[100px] h-[60px] bg-gray-400 text-white" onClick={handleSearch}>Search</button>
        </div>

        {/* Filter Toggle */}
        {/* <div className="flex items-center justify-between mt-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white hover:bg-gray-700/50 transition-colors"
            >
              <MdFilterList className="h-5 w-5" />
              Filters
            </button>
            
            <div className="flex gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setSelectedFilter(filter.id)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    selectedFilter === filter.id
                      ? "bg-highlight text-black font-semibold"
                      : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          <div className="text-gray-400">
            {mockResults.length} results found
          </div>
        </div> */}

        {/* Advanced Filters */}
        {/* {showFilters && (
          <div className="mt-6 p-6 bg-gray-800/30 border border-gray-600 rounded-lg">
            <h3 className="text-lg font-semibold text-white mb-4">Advanced Filters</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Year
                </label>
                <select className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white">
                  <option>Any Year</option>
                  <option>2024</option>
                  <option>2023</option>
                  <option>2022</option>
                  <option>2021</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Rating
                </label>
                <select className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white">
                  <option>Any Rating</option>
                  <option>9.0+</option>
                  <option>8.0+</option>
                  <option>7.0+</option>
                  <option>6.0+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Genre
                </label>
                <select className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white">
                  <option>Any Genre</option>
                  {genres.map((genre) => (
                    <option key={genre} value={genre}>{genre}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Sort By
                </label>
                <select className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white">
                  <option>Relevance</option>
                  <option>Rating</option>
                  <option>Year</option>
                  <option>Popularity</option>
                </select>
              </div>
            </div>
          </div>
        )} */}
      </div>

      {/* Search Results */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
      
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            
            {searchMoviesData?.map((item) => (
              <SearchCard key={item.id} item={item} />
            ))}
          </div>
       
            {searchMoviesData.length === 0 && <div className="text-center py-16">
            <IoMdSearch className="h-24 w-24 text-gray-600 mx-auto mb-6" />
            <h2 className="text-2xl font-semibold text-gray-400 mb-2">
              Start Your Search
            </h2>
            <p className="text-gray-500">
              Enter a movie, TV show, or person's name to get started
            </p>
          </div>}

        {/* Load More Button */}
        {/* {searchQuery && (
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-highlight text-black font-semibold rounded-lg hover:bg-highlight/80 transition-colors">
              Load More Results
            </button>
          </div>
        )} */}
      </div>
    </div>
  );
}
