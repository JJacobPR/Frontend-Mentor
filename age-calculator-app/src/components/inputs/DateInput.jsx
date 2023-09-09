import styles from "./DateInput.module.css";

const DateInput = (props) => {
  return (
    <div className={styles.dateInput}>
      <label for={props.name}>{props.name}</label>
      <input name={props.name} type="text" defaultValue={props.defaultValue}></input>
    </div>
  );
};

export default DateInput;
