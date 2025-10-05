"use client";

import Link from "next/link";
import React, { useState } from "react";
import { RiArrowLeftSLine } from "react-icons/ri";
import { MdOutlinePlayCircle } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useTMBD } from "@/contexts/TMDBContext";
import Image from "next/image";
import { getImageUrl } from "@/lib/randfunctions";

const page = () => {
  const { myList, setMyList, loading } = useTMBD();
  const [edit, setEdit] = useState(true);

  const handleEdit = () => {
    setEdit(!edit);
  };

  const handleIcons = (id) => {
    if (!edit) {
      setMyList(myList.filter((item) => item.id !== id));
    } else {
      alert("playing now");
    }
  };

  return (
    <div className=" min-h-screen h-auto w-full flex flex-col ">
      <div className=" flex justify-between items-center px-3 md:px-34 lg:px-50 xl:px-80 pt-5 border-b-2  border-gray-400 ">
        <Link href="/home" className="flex items-center text-[30px]">
          <RiArrowLeftSLine />
        </Link>

        <h1 className="text-[16px] lg:text-[20px]">My List</h1>

        <button
          onClick={handleEdit}
          className="  w-[60px]  text-[15px] lg:text-[20px]"
        >
          {edit ? "Edit" : "Done"}
        </button>
      </div>
      <div className="h-[545px] xl:h-[640px] w-full flex items-center justify-center ">
        <div className=" h-full w-[500px] lg:w-[900px] px-3 py-5 flex flex-col gap-3  overflow-y-scroll scroll scroll-smooth  scrollbar-hide">
          {myList.map((item) => (
            <div
              key={item.id}
              className=" h-[100px] md:h-[150px] w-full flex items-center  "
            >
              <div className=" h-[100px] md:h-[150px] w-[110px] md:w-[190px] lg:w-[280px] bg-white">
                <Image
                  src={getImageUrl(item.backdrop_path || item?.poster_path)}
                  alt="/"
                  width={600}
                  height={200}
                  priority
                  className=" h-full w-full bg-cover bg-center  "
                />
              </div>
              <div className="h-full w-[250px]  md:w-[300px] lg:w-[550px] flex items-center text-[15px] md:text-2xl pl-5 ">
                <h1>{item?.title || item?.original_title || item?.name}</h1>
              </div>
              <button onClick={() => handleIcons(item.id)} className="text-4xl">
                {edit ? <MdOutlinePlayCircle /> : <MdDelete />}
              </button>
            </div>
          ))}

          {myList.length === 0 && (
            <h1 className=" flex justify-center mt-20">No item</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
