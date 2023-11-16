import data from "../../assets/data/data.json";

const planetLoader = (obj) => {
  const planetAr = data.filter((planet) => planet.name === obj.params.planetName);
  return planetAr[0];
};

export default planetLoader;
