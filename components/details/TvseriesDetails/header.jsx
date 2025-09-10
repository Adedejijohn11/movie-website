"use client";

import React from "react";
import Image from "next/image";
// import { useTMBD } from "@/contexts/TMDBContext";
import { IoCloseOutline } from "react-icons/io5";
import Link from "next/link";
import { getImageUrl } from "@/lib/randfunctions";

const Header = ({ seriesDetailsData }) => {
  // const { seriesDetailsData } = useTMBD();
  // Construct the full TMDB image URL
  // const getImageUrl = (path, size = "w500") => {
  //   // if (!path) return "/images/Bg-gallery.jpg"; // Fallback image
  //   return `https://image.tmdb.org/t/p/${size}${path}`;
  // };

  return (
    <div className="relative h-auto w-full">
      <Image
        src={getImageUrl(seriesDetailsData?.backdrop_path)}
        alt="/"
        width={600}
        height={200}
        className=" h-[300px] lg:h-[500px] w-full bg-cover bg-center  "
      />

      <div className=" absolute top-0 h-[300px] lg:h-[500px] w-full bg-black/60"></div>
      <Link
        href="/home"
        className="absolute top-5 right-4 bg-gray-500/60 rounded-full h-5 lg:h-8 w-5 lg:w-8 flex items-center justify-center"
      >
        <IoCloseOutline className="text-[20px] lg:text-[25px]" />
      </Link>
    </div>
  );
};

export default Header;
