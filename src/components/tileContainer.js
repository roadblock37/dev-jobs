import Tile from "./tile";
import { useSelector } from "react-redux";

const TileContainer = () => {
  const { defaultState } = useSelector((store) => store.jobs);

  return (
    <>
      {defaultState.map((job) => {
        console.log(job.id);
        return <Tile key={job.id} {...job} />;
      })}
    </>
  );
};
export default TileContainer;
