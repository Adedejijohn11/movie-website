import React from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { IoMdVideocam } from "react-icons/io";

const Header = () => {
  return (
    <div
      style={{ backgroundImage: "url(/images/family-bg.jpg)" }}
      className="relative h-[500px] md:h-[550px]  w-full bg-cover bg-center flex items-center justify-center border-b-3 border-blue-400/80 shadow-lg shadow-blue-400/50"
    >
      <div className=" absolute top-0 right-0 h-[500px] md:h-[550px] w-full bg-black/60"></div>
      <div className="relative h-[500px] md:h-full lg:h-[480px] w-full lg:w-[93%] z-50 flex flex-col lg:flex-row justify-between items-center ">
        <div className="relative  h-[480px] md:h-full lg:h-[480px] w-full lg:w-[40%]  flex items-center  justify-center ">
          <Image
            src="/Images/family-img.jpg"
            alt="/"
            width={600}
            height={200}
            className=" h-[480px] md:h-full lg:h-[480px]  w-full rounded-none lg:rounded-2xl "
          />
        </div>

        <div className=" absolute lg:static bottom-0  h-[298px] md:h-[227px] lg:h-[480px] w-full lg:w-[60%] flex justify-center items-center  bg-background lg:bg-background/0  ">
          <div className="flex flex-col mx-4 md:mx-10  mt-0">
            <h1 className="text-[25px] md:text-[30px] lg:text-[55px] font-bold text-highlight ">
              Food Family
            </h1>
            <p className="text-[15px] md:text-[16px] lg:text-[20px] ">
              Comedy,Family,Binge Watch, Easy
            </p>
            <p className="text-[15px] md:text-[16px] lg:text-[20px]  mt-0 md:mt-2 lg:mt-3">
              6 series,2009-2016
            </p>

            <p className="text-[15px] md:text-[16px] lg:text-[20px]   mt-0 md:mt-2 lg:mt-3">
              Hilarious comedy series that revolves around the zany antics of
              the Johnsons, a qucikly family who run a struggling, and often
              chaotic
            </p>
            <div className="flex flex-col md:flex-row  gap-2 mt-5 lg:mt-10">
              <button className="flex flex-row items-center justify-center gap-3 px-3   md:px-10  py-[12px] lg:py-[13px] font-semibold bg-blue-400 text-white text-[15px] lg:text-[16px] xl:text-[18px] rounded-[10px] md:rounded-full hover:bg-blue-400/80">
                <FaPlay />
                <p>Watch now</p>
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
