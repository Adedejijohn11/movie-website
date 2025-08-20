import Featured from "../tvSeries/movieCards/featured";
import NewlyAdded from "../tvSeries/movieCards/new";
import Critically from "../tvSeries/movieCards/Critically";
import Rewatching from "../tvSeries/movieCards/Rewatching";
import { mainMovieData } from "../../data";

const MainSection = () => {
  return (
    <div className="flex flex-col">
      {/*Featured  */}
      <Featured data={mainMovieData} />
      <NewlyAdded data={mainMovieData} />
      {/* Critically */}
      <Critically data={mainMovieData} />
      {/* Rewatching  */}
      <Rewatching data={mainMovieData} />
    </div>
  );
};

export default MainSection;
