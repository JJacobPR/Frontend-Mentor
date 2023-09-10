import DateInput from "./DateInput";
import DateButton from "../DateButton";
import styles from "./DateForm.module.css";
import { useState } from "react";

const DateForm = (props) => {
  const [dayError, updateDayError] = useState(false);
  const [monthError, updateMonthError] = useState(false);
  const [yearError, updateYearError] = useState(false);
  const currYear = new Date().getFullYear();

  const dayValidator = () => {
    //Checking if day is okay in current year case
    if (+props.year === currYear && +props.month === new Date().getMonth() + 1 && props.day > new Date().getDate()) return false;

    //Checking if day is okay based on particular month length
    if (props.day >= 1 && props.day <= new Date(props.year, props.month, 0).getDate()) return true;
    else return false;
  };

  const monthValidator = () => {
    //Checking if month is okay in current year case
    if (+props.year === currYear && props.month > new Date().getMonth() + 1) return false;

    if (props.month >= 1 && props.month <= 12) return true;
    return false;
  };

  const yearValidator = () => {
    if (props.year >= 1900 && props.year <= currYear) return true;
    else return false;
  };

  const submitDateForm = (e) => {
    e.preventDefault();

    if (!dayValidator()) updateDayError(true);
    else updateDayError(false);

    if (!monthValidator()) updateMonthError(true);
    else updateMonthError(false);

    if (!yearValidator()) {
      updateYearError(true);
    } else updateYearError(false);

    props.updateDate(!dayValidator() || !monthValidator() || !yearValidator());
  };

  return (
    <form onSubmit={submitDateForm} className={styles.dateForm}>
      <div className={styles.dateInputs}>
        <DateInput hasError={dayError} update={props.updateDay} name="Day" defaultValue="DD" />
        <DateInput hasError={monthError} update={props.updateMonth} name="Month" defaultValue="MM" />
        <DateInput hasError={yearError} update={props.updateYear} name="Year" defaultValue="YYYY" />
      </div>
      <DateButton />
    </form>
  );
};

export default DateForm;
