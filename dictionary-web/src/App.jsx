import "./index.css";
import Navigation from "./components/navigation/Navigation";
import SearchBar from "./components/searchbar/SearchBar";
import SearchItem from "./components/searchItem/SearchItem";
import Footer from "./components/footer/Footer";
import { useState } from "react";
import ErrorCard from "./components/ErrorCard";

function App() {
  const [wordData, updateWordData] = useState(null);

  const searchWord = async (value) => {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${value}`);
    if (!response.ok) {
      updateWordData(undefined);
      return;
    }
    const data = await response.json();
    updateWordData(data[0]);
  };

  return (
    <div className="main-wrapper">
      <div className="app-wrapper">
        <Navigation />
        <SearchBar searchWord={searchWord} />
        {!wordData && <ErrorCard />}
        {wordData && <SearchItem word={wordData} />}
        {wordData && <Footer source={wordData.sourceUrls[0]} />}
      </div>
    </div>
  );
}

export default App;
