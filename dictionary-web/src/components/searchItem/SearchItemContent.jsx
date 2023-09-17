import styles from "./SearchItemContent.module.css";
import SearchItemListElement from "./SearchItemListElement";

const SearchItemContent = (props) => {
  return (
    <article className={styles.searchItemContent}>
      <header>
        <h3>{props.meaning.partOfSpeech}</h3>
        <hr />
      </header>
      <h4>Meaning</h4>
      <ul>
        {props.meaning.definitions.map((def, index) => (
          <SearchItemListElement key={index} def={def} />
        ))}
      </ul>
      {props.meaning.synonyms.length !== 0 && (
        <div>
          <h4>Synonyms&emsp;</h4>
          {props.meaning.synonyms.map((syn, index) => (
            <p className={styles.synonym} key={index}>
              {syn}&ensp;
            </p>
          ))}
        </div>
      )}
    </article>
  );
};

export default SearchItemContent;
