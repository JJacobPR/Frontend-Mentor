import { Fragment } from "react";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <Fragment>
      <nav className={styles.navbar}>
        <h2 className={styles.headerPlanets}>The Planets</h2>
        <div className={styles.planets}>
          {props.planetNames.map((name, index) => (
            <Link key={index} className={styles.link} to={`planets/${name}`}>
              {name}
            </Link>
          ))}
        </div>
      </nav>
      <hr className={styles.navbarLine} />
    </Fragment>
  );
};

export default Navbar;
