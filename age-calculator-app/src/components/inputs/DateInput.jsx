import styles from "./DateInput.module.css";

const DateInput = (props) => {
  return (
    <div className={`${styles.dateInput} ${props.hasError ? styles.error : ""}`}>
      <label htmlFor={props.name}>{props.name}</label>
      <input
        onChange={(e) => {
          props.update(e.target.value);
        }}
        name={props.name}
        type="text"
        placeholder={props.defaultValue}
        required
      />
      {props.hasError && <p>Must be a valid {props.name}</p>}
    </div>
  );
};

export default DateInput;
