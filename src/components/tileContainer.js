import Tile from "./tile";
import data from "../data.js"
import { useSelector } from "react-redux";

const TileContainer = () => {
  const { defaultState } = useSelector((store) => store.jobs);

  return (
    <section className='tile-grid'>
      {data.map((job) => {
        return (
            <Tile key={job.id} {...job} />
        );
      })}
    </section>
  );
};
export default TileContainer;
