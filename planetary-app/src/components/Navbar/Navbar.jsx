import { Fragment } from "react";
import styles from "./Navbar.module.scss";

const Navbar = (props) => {
  return (
    <Fragment>
      <nav className={styles.navbar}>
        <h2 className={styles.headerPlanets}>The Planets</h2>
        <div className={styles.planets}>
          {props.planetNames.map((name) => (
            <h4>{name}</h4>
          ))}
        </div>
      </nav>
      <hr className={styles.navbarLine} />
    </Fragment>
  );
};

export default Navbar;
