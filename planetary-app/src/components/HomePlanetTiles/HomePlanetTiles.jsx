import styles from "./HomePlanetTiles.module.scss";
import HomePlanetTile from "./HomePlanetTile";
import data from "../../assets/data/data.json";

const HomePlanetTiles = () => {
  const names = data.map((e) => e.name);

  return (
    <div className={styles.planetTiles}>
      {names.map((name) => (
        <HomePlanetTile planetName={name} />
      ))}
    </div>
  );
};

export default HomePlanetTiles;
