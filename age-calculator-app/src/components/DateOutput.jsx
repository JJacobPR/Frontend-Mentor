import styles from "./DateOutput.module.css";

const DateOutput = () => {
  return (
    <div className={styles.dateOutput}>
      <p className={styles.number}>
        <span>38</span> years
      </p>
      <p className={styles.number}>
        <span>3</span> months
      </p>
      <p className={styles.number}>
        <span>123</span> days
      </p>
    </div>
  );
};

export default DateOutput;
