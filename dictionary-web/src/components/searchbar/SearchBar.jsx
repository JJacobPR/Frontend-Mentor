import styles from "./SearchBar.module.css";
import searchIcon from "../../assets/images/icon-search.svg";
import { useState } from "react";

const SearchBar = (props) => {
  const [input, updateInput] = useState("");
  const [error, updateError] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      updateError(false);
      props.searchWord(input);
    } else updateError(true);
  };

  const inputChange = (e) => {
    updateInput(e.target.value);
  };

  return (
    <div className={styles.searchBar}>
      <form onSubmit={submitForm}>
        <input className={error ? styles.error : undefined} onChange={inputChange} placeholder="Search for any word..." />
        <img onClick={submitForm} src={searchIcon} alt="Icon Search" />
      </form>
      {error && <p className={styles.errorP}>Whoops, can’t be empty…</p>}
    </div>
  );
};

export default SearchBar;
