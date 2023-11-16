import { Fragment, useState } from "react";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import hamburgerIcon from "../../assets/img/icon-hamburger.svg";
import chevronIcon from "../../assets/img/icon-chevron.svg";

const Navbar = (props) => {
  const [showHam, updateShowHam] = useState(false);

  const handleHamburger = () => {
    updateShowHam(!showHam);
  };

  const hideHamburger = () => {
    updateShowHam(false);
  };

  return (
    <Fragment>
      <nav className={styles.navbar}>
        <h2 className={styles.headerPlanets}>The Planets</h2>
        <div className={styles.planets}>
          {props.planetNames.map((name, index) => (
            <Link key={index} className={styles.link} to={`planets/planet/${name}`}>
              {name}
            </Link>
          ))}
        </div>
        <div className={styles.navHamburger}>
          <img onClick={handleHamburger} src={hamburgerIcon} />
          {showHam && (
            <div onClick={hideHamburger} className={styles.linksHam}>
              {props.planetNames.map((name, index) => (
                <Link key={index} className={styles.linkHam} to={`planets/${name}`}>
                  <div className={styles.innerLink}>
                    <div className={styles[name.toLowerCase()]} />
                    {name}
                  </div>
                  <img src={chevronIcon} />
                  <hr className={styles.linkLine} />
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>
      <hr className={styles.navbarLine} />
    </Fragment>
  );
};

export default Navbar;
