import Tile from "./components/tile";
import TileContainer from "./components/tileContainer";
import { useSelector } from "react-redux";
function App() {
<<<<<<< HEAD
  return <TileContainer />;
=======
  const { defaultState } = useSelector((store) => store.jobs);
  return (
    <>
      {defaultState.map((job) => {
        console.log(defaultState);
        return <Tile key={job.id} {...job} />;
      })}
    </>
  );
>>>>>>> 5030d845433af9b9a3a01fa56111a513ace5e41b
}

export default App;
