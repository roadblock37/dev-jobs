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

  // return (
  //   <>
  //     {defaultState.map((job) => {
  //       console.log(job);
  //       return;
  //       <div key={job.id}>
  //         <Tile {...job} />
  //       </div>
  //       );
  //     })}
  //   </>
  // );
};
export default TileContainer;
