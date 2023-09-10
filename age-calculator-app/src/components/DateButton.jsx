import line from "../assets/images/icon-arrow.svg";
import styles from "./DateButton.module.css";

const DateButton = (props) => {
  return (
    <div className={styles.dateButton}>
      <hr />
      <button type="submit">
        <img src={line} alt="favicon-32x32" />
      </button>
      <hr className={styles.line} />
    </div>
  );
};

export default DateButton;
