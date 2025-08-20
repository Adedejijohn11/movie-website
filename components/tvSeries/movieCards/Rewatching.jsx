import React from "react";

const Rewatching = ({ data }) => {
  return (
    <div className="h-[188px] md:h-[238px] lg:h-[278px] w-full flex flex-col">
      <h1 className="text-[16px] md:text-[20px] lg:text-[25px]">
        Worth Rewatching
      </h1>
      <div className="h-[150px] md:h-[195px] lg:h-[230px]  w-full mt-2  gap-2 flex items-center overflow-x-scroll scroll  scroll-smooth scrollbar-hide ">
        {data.map((item) => (
          <div
            key={item.id}
            className="relative h-[150px] md:h-[195px] lg:h-[230px]  w-[107px]  md:w-[150px] lg:w-[188px] flex  justify-center shrink-0  rounded-[9px]  cursor-pointer overflow-hidden "
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

export default Rewatching;
