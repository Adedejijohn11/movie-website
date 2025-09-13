import React from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { IoMdVideocam } from "react-icons/io";
import { getImageUrl } from "@/lib/randfunctions";
import { useTMBD } from "@/contexts/TMDBContext";

const Header = () => {
  const { movieData } = useTMBD();

  return (
    <div
      style={{
        backgroundImage: `url(${getImageUrl(movieData?.[0]?.backdrop_path)})`,
      }}
      className="relative h-[600px]  w-full bg-cover bg-center flex items-center justify-center border-b-3 border-blue-400/80 shadow-lg shadow-blue-400/50"
    >
      <div className=" absolute top-0 right-0 h-[600px] w-full bg-black/80"></div>
      <div className="relative h-full lg:h-[480px] w-full lg:w-[93%] z-40 flex flex-col lg:flex-row justify-between items-center ">
        <div className="relative h-full lg:h-[480px] w-full lg:w-[40%]  flex items-center  justify-center  ">
          <Image
            src={getImageUrl(movieData?.[0]?.poster_path)}
            alt="/"
            width={600}
            height={200}
            className="h-full lg:h-[480px]  w-full rounded-none lg:rounded-2xl "
          />
        </div>

        <div className=" absolute lg:static bottom-0  h-[440px] md:h-[310px] lg:h-[480px] w-full lg:w-[60%] flex justify-center items-center  bg-background lg:bg-background/0  ">
          <div className="flex flex-col mx-4 md:mx-10  mt-0">
            <h1 className="text-[25px] md:text-[30px] lg:text-[55px] font-bold text-highlight ">
              The Art of Second Chances
            </h1>
            <p className=" text-[15px] md:text-[17px] text-gray-300   ">
              Directed by:Sarah Bliss
            </p>
            <p className=" text-[15px] md:text-[17px] text-gray-300 ">
              Cast Emily Jones, Billy Yates, Mathew Person, Romi Mclin, Thomas
              Elton
            </p>
            <p className=" text-[15px] md:text-[17px] mb-4">
              2h13min <span className="mx-0 md:mx-6">4k UHD</span>
              <span className="mx-0 md:mr-6">15%</span>
              Romantic,Funny,Bizarre
            </p>
            <p className=" text-[15px] md:text-[17px] mb-4">
              A recently divorced gallery owner abd a strulling artist find
              themselves as neighbors in a charming apartment building. As they
              navigate the ups and downs of their respective lives, they
              discover that sometimes, the canvas of love can be painted with
              second chances.
            </p>
            <div className="flex flex-col md:flex-row  gap-2 mt-5 lg:mt-10">
              <button className="flex items-center justify-center gap-3 px-3   md:px-10 lg:px-15 py-[12px] lg:py-[13px] font-semibold bg-blue-400 text-white text-[15px] lg:text-[18px] rounded-[10px] md:rounded-full hover:bg-blue-400/80">
                <FaPlay />
                Watch now
              </button>
              <button className="flex items-center justify-center gap-3 px-10 lg:px-15 py-[12px] lg:py-[13px] font-semibold border-2  hover:border-amber-500 text-highlight hover:text-amber-500 text-[15px] lg:text-[18px] text-center rounded-[10px] md:rounded-full">
                <IoMdVideocam /> Watch trailer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
