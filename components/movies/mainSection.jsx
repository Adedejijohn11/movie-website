import React from "react";

const MainSection = ({ data }) => {
  return (
    <div className="h-full w-full flex flex-col bg-red-500">
      <h1 className="text-[16px] md:text-[20px] lg:text-[25px] pl-[20px] ">
        Brand new releases
      </h1>

      <div
        className="h-full w-full mt-2 gap-2 lg:gap-10 grid grid-cols-3 md:grid-cols-4 
      lg:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] place-items-center bg-amber-300"
      >
        {data.map((item) => (
          <div
            key={item.id}
            className="relative h-[150px] md:h-[195px] lg:h-[230px]  w-[107px]  md:w-[150px] lg:w-[188px] flex  justify-center shrink-0  rounded-[9px]  cursor-pointer overflow-hidden bg-green-400 "
          >
            <img
              className="h-[150px] md:h-[195px] lg:h-[230px]  w-[107px]  md:w-[150px] lg:w-[188px]  "
              src={item.img}
              alt="cat"
            />
            <div className=" absolute top-0 h-full w-full bg-black/30"></div>
            <div className="absolute top-0 z-30  h-full w-[80%] flex   justify-center items-center text-center">
              <p className="text-[15px] md:text-[18px] lg:text-[20px] font-bold ">
                {item.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainSection;
