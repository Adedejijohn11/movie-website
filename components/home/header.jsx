"use client";

import React, { useState, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";
import { headerData } from "../../data";

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState(new Set());

  // Preload only the first 2 images initially
  useEffect(() => {
    const preloadImages = async () => {
      const imagesToPreload = headerData.slice(0, 2);
      for (const item of imagesToPreload) {
        const img = new Image();
        img.src = item.img;
        await new Promise((resolve) => {
          img.onload = resolve;
          img.onerror = resolve;
        });
        setLoadedImages(prev => new Set(prev).add(item.img));
      }
    };
    preloadImages();
  }, []);

  // Lazy load other images when needed
  const preloadNextImage = (index) => {
    const nextIndex = (index + 1) % headerData.length;
    const nextItem = headerData[nextIndex];
    if (!loadedImages.has(nextItem.img)) {
      const img = new Image();
      img.src = nextItem.img;
      img.onload = () => {
        setLoadedImages(prev => new Set(prev).add(nextItem.img));
      };
    }
  };

  const handleRightSlide = () => {
    const newIndex = (currentIndex + 1) % headerData.length;
    setCurrentIndex(newIndex);
    preloadNextImage(newIndex);
  };

  const handleLeftSlide = () => {
    const newIndex = currentIndex === 0 ? headerData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    preloadNextImage(newIndex);
  };

  const goToSlide = (dotindex) => {
    setCurrentIndex(dotindex);
    preloadNextImage(dotindex);
  };

  return (
    <div className="relative h-[450px] md:h-[500px] w-[90%] md:w-full lg:w-full border-b-3 border-blue-400/80 shadow-lg shadow-blue-400/50 overflow-hidden">
      <div
        className="h-full w-full flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {headerData.map((item, index) => (
          <div
            key={item.id}
            style={{ 
              backgroundImage: loadedImages.has(item.img) ? `url(${item.img})` : 'none',
              backgroundColor: loadedImages.has(item.img) ? 'transparent' : '#1f2937'
            }}
            className="w-full h-full bg-center bg-cover relative flex-shrink-0"
          >
            {/* Loading placeholder */}
            {!loadedImages.has(item.img) && (
              <div className="w-full h-full flex items-center justify-center">
                <div className="animate-pulse bg-gray-600 w-32 h-8 rounded"></div>
              </div>
            )}

            {/* Gradient */}
            <div className="w-full h-full absolute top-0 left-0 bg-black/20"></div>

            {/* Image data */}
            {currentIndex === index && loadedImages.has(item.img) && (
              <div className="absolute bottom-16 left-[40px] md:left-[100px] lg:left-[150px] z-40 slideUp">
                <h1 className="text-[25px] md:text-[32px] lg:text-[60px] font-bold">
                  {item.title}
                </h1>
                <p className="text-[15px] md:text-[15px] lg:text-[20px]">
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
        className="absolute top-[60%] md:top-[48%] lg:top-[45%] left-3 md:left-5 lg:left-8 z-40 cursor-pointer"
      >
        <IoIosArrowBack />
      </div>
      <div
        onClick={handleRightSlide}
        className="absolute top-[60%] md:top-[48%] lg:top-[45%] right-3 md:right-5 lg:right-8 z-40 cursor-pointer"
      >
        <MdArrowForwardIos />
      </div>

      {/* Dots */}
      <div className="absolute bottom-3 w-full flex justify-center space-x-2 z-40">
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
