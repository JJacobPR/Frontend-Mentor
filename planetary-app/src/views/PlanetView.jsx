import data from "../assets/data/data.json";
import styles from "./PlanetView.module.scss";
import { Fragment } from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import { Outlet } from "react-router-dom";

const names = data.map((e) => e.name);

function App() {
  return (
    <Fragment>
      <div className={styles["background-wrapper"]}>
        <div className={styles["content-wrapper"]}>
          <Navbar planetNames={names} />
          <Outlet />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
