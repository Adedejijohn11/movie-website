import Image from "next/image";
import React from "react";

const NewlyAdded = () => {
  return (
    <div className="h-auto min-h-[348px] w-full flex flex-col bg-red-00 my-8">
      <h1 className="text-[16px] md:text-[20px] lg:text-[25px]">Newly added</h1>

      <div className="h-full w-full flex flex-col lg:flex-row gap-6 bg-amber-00">
        <div
          className="h-[280px] lg:h-[350px] w-full lg:w-[40%] rounded-2xl bg-white bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/gallery.jpg')",
          }}
        ></div>
        <div className="h-auto lg:h-[350px] w-full lg:w-[50%] bg-green-00">
          <h1 className="text-[20px] md:text-[28px] font-bold text-highlight">
            The Art of Second Chances
          </h1>
          <p className=" text-[15px] md:text-[17px] text-gray-300   ">
            Directed by:Sarah Bliss
          </p>
          <p className=" text-[15px] md:text-[17px] text-gray-300 mb-8">
            Cast Emily Jones, Billy Yates, Mathew Person, Romi Mclin, Thomas
            Elton
          </p>
          <p className=" text-[15px] md:text-[17px] mb-8">
            2h13min <span className="mx-0 md:mx-6">4k UHD</span>
            <span className="mx-0 md:mr-6">15%</span>
            Romantic,Funny,Bizarre
          </p>
          <p className=" text-[15px] md:text-[17px] mb-8">
            A recently divorced gallery owner abd a strulling artist find
            themselves as neighbors in a charming apartment building. As they
            navigate the ups and downs of their respective lives, they discover
            that sometimes, the canvas of love can be painted with second
            chances.
          </p>
          <button className="px-3 md:px-10 lg:px-15 py-[12px] lg:py-[13px] font-semibold bg-blue-400 text-white text-[15px] lg:text-[18px] rounded-[10px] md:rounded-full hover:bg-blue-400/80">
            Watch now
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewlyAdded;
