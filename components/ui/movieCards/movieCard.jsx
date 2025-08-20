const MovieCard = ({ item }) => {
  return (
    <div className="relative h-[150px] md:h-[195px] lg:h-[230px]  w-[107px]  md:w-[150px] lg:w-[188px] flex  justify-center shrink-0  rounded-[9px]  cursor-pointer overflow-hidden ">
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
  );
};

export default MovieCard;
