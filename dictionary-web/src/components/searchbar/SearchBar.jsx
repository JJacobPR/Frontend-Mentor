import styles from "./SearchBar.module.css";
import searchIcon from "../../assets/images/icon-search.svg";

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <input placeholder="Search..." />
      <img src={searchIcon} alt="Icon Search" />
    </div>
  );
};

export default SearchBar;
