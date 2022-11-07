import { useSelector } from "react-redux";
import data from "../data.json";
const Tile = (
  {
    //   logo,
    //   logoBackground,
    //   postedAt,
    //   contract,
    //   position,
    //   company,
    //   location,
  }
) => {
  const { defaultState } = useSelector((store) => store.jobs);
  return (
    <section className="tile-grid">
      {defaultState.map((job) => {
        return (
          //   tile container
          <div className="tile" key={job.id}>
            {/*container that hold company logo */}
            <div
              className="logo-container"
              // style={{ backgroundColor: { logoBackground } }}
            >
              <img src={job.logo} alt={job.company} />
            </div>
            {/*section holding position details */}
            <section className="position-container">
              <div className="posted-container">
                <h4>{job.postedAt}</h4>
                <h4>{job.contract}</h4>
              </div>
              <h3>{job.position}</h3>
              <h4>{job.company}</h4>
            </section>
            <h3 className="location">{job.location}</h3>
          </div>
        );
      })}
    </section>
  );
};
export default Tile;
