import data from "../assets/data/data.json";
import "./HomeView.scss";
import { Fragment } from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import PlanetInfo from "../components/PlanetInfo/PlanetInfo.jsx";
import { Outlet } from "react-router-dom";

const names = data.map((e) => e.name);

function App() {
  return (
    <Fragment>
      <div className="background-wrapper">
        <div className="content-wrapper">
          <Navbar planetNames={names} />
          <Outlet />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
