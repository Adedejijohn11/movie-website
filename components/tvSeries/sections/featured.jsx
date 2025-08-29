import MovieCard from "../../ui/movieCards/movieCard";

const Featured = ({ data }) => {
  return (
    <div className="h-[188px] md:h-[238px] lg:h-[278px] w-full flex flex-col">
      <h1 className="text-[16px] md:text-[20px] lg:text-[25px]">Featured</h1>

      <div className="h-[150px] md:h-[195px] lg:h-[230px]  w-full mt-2  gap-2 flex items-center overflow-x-scroll scroll  scroll-smooth scrollbar-hide ">
        {data.map((item) => (
          <MovieCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
