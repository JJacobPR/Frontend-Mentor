import { Fragment } from "react";
import "./index.css";

import Navigation from "./components/navigation/Navigation";
import SearchBar from "./components/searchbar/Searchbar";
import SearchItem from "./components/searchItem/SearchItem";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="main-wrapper">
      <div className="app-wrapper">
        <Navigation />
        <SearchBar />
        <SearchItem />
        <Footer />
      </div>
    </div>
  );
}

export default App;
