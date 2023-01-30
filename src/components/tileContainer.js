import Tile from "./tile";
import { useSelector } from "react-redux";
import Data from "../data";

const TileContainer = () => {
  const { defaultState } = useSelector((store) => store.jobs);
  return (
    <div>
      {Data.map((job) => {
        return <Tile key={job.id} {...job} />;
      })}
    </div>
  );
};
export default TileContainer;
