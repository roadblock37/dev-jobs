import Tile from "./tile";
import { useSelector } from "react-redux";

const TileContainer = () => {
  const { defaultState } = useSelector((store) => store.jobs);

  return (
    <>
      {defaultState.map((job) => {
        return;
        <section className="tile-grid">
          <Tile key={job.id} {...job} />
        </section>;
      })}
    </>
  );
};
export default TileContainer;
