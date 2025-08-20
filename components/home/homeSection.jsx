import MainSection from "./mainSection";
import Header from "./header";

const HomeSection = () => {
  return (
    <div className="min-h-screen h-auto w-full flex flex-col items-center">
      <Header />
      <div className="h-full w-[90%] mt-5 flex flex-col">
        <MainSection />
      </div>
    </div>
  );
};

export default HomeSection;
