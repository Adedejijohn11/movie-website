export default function Home() {
  return (
    <div className=" flex flex-col h-screen w-full bg-[url('/images/sky.jpg')] bg-top bg-cover ">
      <div className=" h-[75%] w-full bg-gray-800/80 border-b-3 border-x-3 border-blue-400/80 rounded-b-[100px] shadow-lg shadow-blue-400/50 flex items-center justify-center lg:justify-start px-0 md:px-[100px] ">
        <div className="flex flex-col items-center lg:items-start bg-amber-00">
          <h1 className="text-5xl md:text-7xl text-white font-bold tracking-[18px] ">
            CINEMA
          </h1>
          <p className=" text-center lg:text-left text-[28px] lg:text-[38px] leading-10 md:leading-12 mt-[10px] text-highlight ">
            Stream now newest <br /> movies and TV series.
          </p>
          <p className="text-center lg:text-lefttext-white/70 text-2xl font-medium my-[30px]">
            Basic subscription plan for $9.99
          </p>
          <button className="mt-4 px-18 py-[13px] font-semibold bg-blue-400 text-white text-lg rounded-full hover:bg-blue-400/80">
            Sign up now
          </button>
        </div>
      </div>
    </div>
  );
}
