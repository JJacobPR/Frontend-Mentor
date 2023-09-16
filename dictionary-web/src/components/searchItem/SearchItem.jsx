import SearchItemContent from "./SearchItemContent";
import SearchItemHeader from "./SearchItemHeader";
import styles from "./SearchItem.module.css";

const SearchItem = () => {
  return (
    <section className={styles.searchItem}>
      <SearchItemHeader />
      <SearchItemContent />
      <SearchItemContent />
    </section>
  );
};

export default SearchItem;
