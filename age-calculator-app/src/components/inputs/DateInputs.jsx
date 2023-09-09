import DateInput from "./DateInput";
import styles from "./DateInputs.module.css";

const DateInputs = () => {
  return (
    <div className={styles.dateInputs}>
      <DateInput name="Day" defaultValue="DD" />
      <DateInput name="Month" defaultValue="MM" />
      <DateInput name="Year" defaultValue="YYYY" />
    </div>
  );
};

export default DateInputs;
