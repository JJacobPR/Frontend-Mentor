import data from "./assets/data/data.json";
import "./App.scss";
import { Fragment } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";

const names = data.map((e) => e.name);
console.log(data);
function App() {
  return (
    <Fragment>
      <div className="background-wrapper">
        <div className="content-wrapper">
          <Navbar planetNames={names} />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
