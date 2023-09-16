import { Fragment } from "react";
import styles from "./SearchItemListElement.module.css";

const SearchItemListElement = () => {
  return (
    <Fragment>
      <li className={styles.searchItemListElement}>(etc.) A set of keys used to operate eys used to operate a typewriter, computer etc.</li>
      <p className={styles.example}>Example</p>
    </Fragment>
  );
};
export default SearchItemListElement;
