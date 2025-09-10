import Link from "next/link";
import { getImageUrl } from "@/lib/randfunctions";
import Image from "next/image";

const TvSeriesCard = ({ item }) => {
  // Construct the full TMDB image URL
  // const getImageUrl = (path, size = "w500") => {
  //   if (!path) return "/images/movie-placeholder.jpg"; // Fallback image
  //   return `https://image.tmdb.org/t/p/${size}${path}`;
  // };

  return (
    <Link href={`/tvseries/${item.id}`}>
      <div className="relative h-[150px] md:h-[195px] lg:h-[230px]  w-[107px]  md:w-[150px] lg:w-[188px] flex  justify-center shrink-0  rounded-[9px]  cursor-pointer overflow-hidden ">
        <Image
          className="h-[150px] md:h-[195px] lg:h-[230px]  w-[107px]  md:w-[150px] lg:w-[188px]  object-cover"
          src={getImageUrl(item.backdrop_path)}
          alt={
            item.original_title ||
            item.title ||
            item.original_name ||
            item.name ||
            "Movie poster"
          }
          fill
        />
        <div className=" absolute top-0 h-full w-full bg-black/60"></div>
        <div className="absolute top-0 z-30  h-full w-[80%] flex   justify-center items-center text-center">
          <p className="text-[15px]  lg:text-[20px] font-bold ">
            {item.original_title ||
              item.title ||
              item.original_name ||
              item.name ||
              "Untitled"}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default TvSeriesCard;
