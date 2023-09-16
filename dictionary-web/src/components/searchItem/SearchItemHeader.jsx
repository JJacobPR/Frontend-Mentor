import playButtonIcon from "../../assets/images/icon-play.svg";
import styles from "./SearchItemHeader.module.css";

const SearchItemHeader = () => {
  return (
    <header className={styles.itemHeader}>
      <div>
        <h1>keyboard</h1>
        <h3>/ˈkiːbɔːd/</h3>
      </div>
      <img src={playButtonIcon} />
    </header>
  );
};

export default SearchItemHeader;
