import SearchItemContent from "./SearchItemContent";
import SearchItemHeader from "./SearchItemHeader";
import styles from "./SearchItem.module.css";

const SearchItem = (props) => {
  return (
    <section className={styles.searchItem}>
      {props.word && <SearchItemHeader word={props.word} sound={props.word.phonetics} />}
      {props.word && props.word.meanings.map((meaning, index) => <SearchItemContent meaning={meaning} key={index} />)}
    </section>
  );
};

export default SearchItem;
