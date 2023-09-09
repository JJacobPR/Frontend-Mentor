import styles from "./AgeCalculator.module.css";
import DateInputs from "./inputs/DateInputs";
import ButtonLine from "./DateButton";
import DateOutput from "./DateOutput";

const AgeCalculator = () => {
  return (
    <div className={styles.ageCalculator}>
      <DateInputs />
      <ButtonLine />
      <DateOutput />
    </div>
  );
};

export default AgeCalculator;
