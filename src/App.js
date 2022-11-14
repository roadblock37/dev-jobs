import Tile from "./components/tile";
import TileContainer from "./components/tileContainer";
import { useSelector } from "react-redux";
function App() {
  const { defaultState } = useSelector((store) => store.jobs);
  return (
    <>
      {defaultState.map((job) => {
        console.log(defaultState);
        return <Tile key={job.id} {...job} />;
      })}
    </>
  );
}

export default App;
