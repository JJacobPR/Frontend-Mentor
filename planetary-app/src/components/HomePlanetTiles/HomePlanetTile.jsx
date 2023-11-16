import styles from "./HomePlanetTile.module.scss";
import { Link } from "react-router-dom";
import useImageSvg from "../hooks/useImageSvg.jsx";

const HomePlanetTile = (props) => {
  const planetImg = useImageSvg(`planet-${props.planetName.toLowerCase()}`);
  return (
    <Link style={{ textDecoration: "none" }} to={`planets/planet/${props.planetName}`} className={styles.planetTile}>
      <img src={planetImg.image} alt="Planet Photo" />
      <h3>{props.planetName}</h3>
    </Link>
  );
};

export default HomePlanetTile;
