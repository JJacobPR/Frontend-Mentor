import styles from "./HomeView.module.scss";
import Navbar from "../components/Navbar/Navbar";
import HomePlanetTiles from "../components/HomePlanetTiles/HomePlanetTiles";
import data from "../assets/data/data.json";

const names = data.map((e) => e.name);

const HomeView = () => {
  return (
    <div className={styles["background-wrapper"]}>
      <div className={styles["content-wrapper"]}>
        <Navbar planetNames={names} />
        <h3 className={styles["headerHome"]}>Choose a planet to explore!</h3>
        <HomePlanetTiles />
      </div>
    </div>
  );
};

export default HomeView;
