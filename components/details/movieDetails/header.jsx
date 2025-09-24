"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getImageUrl } from "@/lib/randfunctions";
import { IoCloseOutline } from "react-icons/io5";

const Header = ({ movieDetails }) => {
  return (
    <div className="relative h-auto w-full">
      <Image
        src={getImageUrl(movieDetails?.backdrop_path)}
        alt="/"
        width={600}
        height={200}
        className=" h-[300px] lg:h-[550px] w-full bg-cover bg-center  "
      />

      <div className=" absolute top-0 h-[300px] lg:h-[550px] w-full bg-black/60"></div>
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
