import BrandSection from "./movieCards/brandnewSection";
import ContinueSection from "./movieCards/continueSection";
import CollectionSection from "./movieCards/collectionsSection";
import FunnySection from "./movieCards/FunnySection";
import PreviousSection from "./movieCards/previousSection";
import { mainMovieData } from "../../data";

const MainSection = () => {
  return (
    <div className=" flex flex-col">
      {/* MovieCards */}

      {/* Brand new releases */}
      <BrandSection data={mainMovieData} />
      {/* Continue Watching */}
      <ContinueSection data={mainMovieData} />
      {/* Collections */}
      <CollectionSection data={mainMovieData} />
      {/* Funny Tv Shows */}
      <FunnySection data={mainMovieData} />
      {/* Based on your previous watches */}
      <PreviousSection data={mainMovieData} />
    </div>
  );
};

export default MainSection;
