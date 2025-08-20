"use client";

import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";

import { headerData } from "../../data";

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleRightSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % headerData.length);
  };

  const handleLeftSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex) {
        return prevIndex - 1;
      }
      return headerData.length - 1;
    });
  };

  const goToSlide = (dotindex) => {
    setCurrentIndex(dotindex);
  };
  return (
    <div className="relative h-[450px] md:h-[500px] w-[90%] md:w-full lg:w-full  border-b-3 border-blue-400/80 shadow-lg shadow-blue-400/50 overflow-hidden">
      <div
        className="h-full w-full flex transition-transform duration-500 "
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {headerData.map((item, index) => (
          <div
            key={item.id}
            style={{ backgroundImage: `url(${item.img})` }}
            className="w-full h-full bg-center bg-cover relative flex-shrink-0"
          >
            {/* Gradient */}
            <div className="w-full h-full absolute top-0 left-0 bg-black/20"></div>

            {/* Image data */}
            {currentIndex === index && (
              <div className="absolute bottom-16  left-[40px] md:left-[100px] lg:left-[150px] z-50  slideUp  ">
                <h1 className="text-[25px] md:text-[32px] lg:text-[60px] font-bold">
                  {item.title}
                </h1>
                <p className="text-[15px] md:text-[15px]  lg:text-[20px]">
                  {item.description}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Arrows */}
      <div
        onClick={handleLeftSlide}
        className="absolute top-[60%] md:top-[48%] lg:top-[45%] left-3 md:left-5 lg:left-8 z-50"
      >
        <IoIosArrowBack />
      </div>
      <div
        onClick={handleRightSlide}
        className="absolute top-[60%] md:top-[48%] lg:top-[45%] right-3 md:right-5 lg:right-8 z-50"
      >
        <MdArrowForwardIos />
      </div>
      {/* Dots */}
      <div className="absolute bottom-3 w-full flex justify-center space-x-2 z-50">
        {headerData.map((dot, dotindex) => (
          <div
            key={dotindex}
            onClick={() => goToSlide(dotindex)}
            className={`w-2 h-2 rounded-full hidden md:flex cursor-pointer transition-all duration-300 ${
              currentIndex === dotindex ? "bg-white scale-110" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Header;
