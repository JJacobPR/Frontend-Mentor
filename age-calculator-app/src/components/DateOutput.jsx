import styles from "./DateOutput.module.css";

const DateOutput = (props) => {
  return (
    <div className={styles.dateOutput}>
      <p className={styles.number}>
        <span>{props.calcDate.year}</span> years
      </p>
      <p className={styles.number}>
        <span>{props.calcDate.month}</span> months
      </p>
      <p className={styles.number}>
        <span>{props.calcDate.day}</span> days
      </p>
    </div>
  );
};

export default DateOutput;
