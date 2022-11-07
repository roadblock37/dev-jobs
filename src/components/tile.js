const Tile = ({
  logo,
  logoBackground,
  postedAt,
  contract,
  position,
  company,
  location,
}) => {
  return (
    //   tile container
    <div className="tile">
      {/*container that hold company logo */}
      <div
        className="logo-container"
        // style={(backgroundColor = { })}
      >
        <img src={logo} alt={company} />
      </div>
      {/*section holding position details */}
      <section className="position-container">
        <div className="posted-container">
          <h4>{postedAt}</h4>
          <h4>{contract}</h4>
        </div>
        <h3>{position}</h3>
        <h4>{company}</h4>
      </section>
      <h3 className="location">{location}</h3>
    </div>
  );
};
export default Tile;
