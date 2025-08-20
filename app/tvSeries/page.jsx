import Header from "../../components/continueWatching/header";
import MainSection from "../../components/tvSeries/mainSection";

const page = () => {
  return (
    <div className="min-h-screen h-auto w-full flex flex-col items-center">
      <div className=" h-[450px] md:h-[500px] w-[90%] md:w-full lg:w-full flex justify-center items-center  bg-highlight  border-b-3 border-blue-400/80 shadow-lg shadow-blue-400/50 overflow-hidden">
        <h1 className="text-black text-[40px]">00'S ROMCOMS</h1>
      </div>
      <div className="h-full w-[90%] mt-5 flex flex-col">
        <MainSection />
      </div>
    </div>
  );
};

export default page;
