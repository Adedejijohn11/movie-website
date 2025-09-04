"use client";

import { getImageUrl } from "../../../lib/randfunctions";
import { MdFilterList } from "react-icons/md";
import { FaPlay, FaPlus } from "react-icons/fa";
import { IoMdVideocam } from "react-icons/io";
import Link from "next/link";

const SearchCard = ({ item, type }) => {
  return (
    <Link href={`/${type}/${item.id}`}>
      <div
        key={item.id}
        className="group bg-gray-800/30 border border-gray-700 rounded-lg overflow-hidden hover:border-highlight/50 transition-all duration-300 hover:transform hover:scale-105"
      >
        <div className="relative">
          <img
            src={getImageUrl(item?.poster_path)}
            alt={item?.title}
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="flex gap-3">
              <button className="p-3 bg-highlight text-black rounded-full hover:bg-highlight/80 transition-colors">
                <FaPlay className="h-4 w-4" />
              </button>
              <button className="p-3 bg-white/20 text-white rounded-full hover:bg-white/30 transition-colors">
                <FaPlus className="h-4 w-4" />
              </button>
              <button className="p-3 bg-white/20 text-white rounded-full hover:bg-white/30 transition-colors">
                <IoMdVideocam className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="absolute top-2 right-2 bg-highlight text-black px-2 py-1 rounded text-sm font-semibold">
            {item?.vote_average}
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-white mb-1">
            {item?.title || item?.original_name}
          </h3>
          <p className="text-gray-400 text-sm mb-2">
            {item?.release_date || item?.first_air_date}
          </p>
          {/* <p className="text-gray-500 text-xs">
        {item.genre}
      </p> */}
        </div>
      </div>
    </Link>
  );
};

export default SearchCard;
