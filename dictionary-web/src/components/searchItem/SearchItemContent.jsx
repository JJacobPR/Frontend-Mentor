import styles from "./SearchItemContent.module.css";
import SearchItemListElement from "./SearchItemListElement";

const SearchItemContent = () => {
  return (
    <article className={styles.searchItemContent}>
      <header>
        <h3>noun</h3>
        <hr />
      </header>
      <h4>Meaning</h4>
      <ul>
        <SearchItemListElement />
        <SearchItemListElement />
        <SearchItemListElement />
      </ul>
      <h4>Synonyms</h4>
    </article>
  );
};

export default SearchItemContent;
