import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const MainSection = () => {
  return (
    <div className="h-full w-[93%] mt-6 flex flex-col bg-purple-500">
      <div className="flex flex-col bg-green-600  ">
        <div className="h-[20%] w-auto ">
          <button className="w-[140px] py-[10px] px-1  flex items-center justify-between   border-2  hover:border-amber-500 text-highlight hover:text-amber-500 text-[15px] lg:text-[18px] rounded-full">
            <p>Season 1</p>
            <MdKeyboardArrowDown />
          </button>
        </div>
        <div className="h-[80%] w-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  mt-6 bg-blue-500">
          {/* Cards */}
          <div className="w-auto md:w-[340px] bg-amber-800 ">
            <div className="h-[150px] md:h-[300px] w-[150px] md:w-[340px] rounded-[9px]  bg-white text-black ">
              video
            </div>
            <div className=" mt-3  bg-amber-400">
              <h1 className="text-[18px] font-bold">
                Ep. 1: Recipe for Disaster
              </h1>
              <p className="text-[16px] ">
                The Johnsons face a crisis when their secret family recipe goes
                missing just before a big restaurant review.
              </p>
            </div>
          </div>
          <div className="w-auto md:w-[340px] bg-amber-800">
            <div className="h-[150px] md:h-[300px] w-[150px] md:w-[340px] rounded-[9px]  bg-white text-black ">
              video
            </div>
            <div className=" mt-3  bg-amber-400">
              <h1 className="text-[18px] font-bold">
                Ep. 1: Recipe for Disaster
              </h1>
              <p className="text-[16px] ">
                The Johnsons face a crisis when their secret family recipe goes
                missing just before a big restaurant review.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
