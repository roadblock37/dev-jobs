import Tile from "./tile";
import { useSelector } from "react-redux";

const TileContainer = () => {
  const { defaultState } = useSelector((store) => store.jobs);

  return (
    <>
      {defaultState.map((job) => {
        return <Tile key={job.id} {...job} />;
      })}
    </>
  );
};
export default TileContainer;
