import React from "react";
import { ImPencil } from "react-icons/im";
import { FaPlus } from "react-icons/fa6";

const ProfileSection = () => {
  return (
    <div className="min-h-screen h-auto w-full flex justify-center items-center ">
      <div className=" h-[50%] w-[70%] flex flex-col">
        <h1 className="text-center text-4xl font-bold text-highlight m-6">
          Who Is Watching?
        </h1>
        <div className="h-full w-full grid grid-cols-2 lg:grid-cols-4  gap-2 mt-6">
          <div className=" relative h-auto w-auto  flex flex-col items-center">
            <div className=" h-[180px] w-[180px] rounded-full bg-sky-400 "></div>
            <div className="absolute right-7 lg:right-14 bottom-11 h-8 w-8 flex items-center justify-center text-black text-[12px] bg-white rounded-full">
              <ImPencil />
            </div>
            <h2 className="font-bold mt-3">David</h2>
          </div>
          <div className=" relative h-auto w-auto   flex flex-col items-center">
            <div className=" h-[180px] w-[180px] rounded-full bg-amber-700 "></div>
            <div className="absolute right-7 lg:right-14 bottom-11 h-8 w-8 flex items-center justify-center text-black text-[12px] bg-white rounded-full">
              <ImPencil />
            </div>
            <h2 className="  font-bold mt-3">Denisa</h2>
          </div>
          <div className="relative h-auto w-auto flex flex-col items-center">
            <div className=" h-[180px] w-[180px] rounded-full bg-pink-200 "></div>
            <div className="absolute right-7 lg:right-14 bottom-11 h-8 w-8 flex items-center justify-center text-black text-[12px] bg-white rounded-full">
              <ImPencil />
            </div>
            <h2 className="font-bold mt-3">Johny</h2>
          </div>
          <div className="h-auto w-auto flex flex-col items-center">
            <div className=" h-[180px]  w-[180px] flex items-center justify-center rounded-full border-2 border-highlight">
              <FaPlus className="text-highlight" />
            </div>
            <h2 className="font-bold mt-3">Add Profile</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
