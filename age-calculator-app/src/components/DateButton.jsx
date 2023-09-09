import line from "../assets/images/icon-arrow.svg";
import styles from "./DateButton.module.css";

const ButtonLine = (props) => {
  return (
    <div className={styles.dateButton}>
      <hr />
      <img src={line} alt="favicon-32x32" />
      <hr className={styles.line} />
    </div>
  );
};

export default ButtonLine;
