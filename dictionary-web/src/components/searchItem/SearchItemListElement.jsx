import { Fragment } from "react";
import styles from "./SearchItemListElement.module.css";

const SearchItemListElement = (props) => {
  return (
    <Fragment>
      <li className={styles.searchItemListElement}>{props.def.definition}</li>
      <p className={styles.example}>{props.def.example && props.def.example}</p>
    </Fragment>
  );
};
export default SearchItemListElement;
