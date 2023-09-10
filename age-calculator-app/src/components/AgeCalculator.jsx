import styles from "./AgeCalculator.module.css";
import DateForm from "./inputs/DateForm";
import DateOutput from "./DateOutput";
import { useState } from "react";

const AgeCalculator = () => {
  const [day, updateDay] = useState("");
  const [month, updateMonth] = useState("");
  const [year, updateYear] = useState("");

  const [calcDate, updateCalcDate] = useState({ day: "--", month: "--", year: "--" });

  const updateDate = (hasError) => {
    if (hasError) {
      updateCalcDate({ day: "--", month: "--", year: "--" });
      return;
    }

    const birthDate = new Date(year, month - 1, day);
    const currDate = new Date();

    let dayA = currDate.getDate() - birthDate.getDate();
    let monthA = currDate.getMonth() - birthDate.getMonth();
    let yearA = currDate.getFullYear() - birthDate.getFullYear();

    //Cases when day or month difference is < 0
    if (dayA < 0) {
      const lastDayOfMonth = new Date(currDate.getFullYear(), currDate.getMonth(), 0).getDate();
      dayA += lastDayOfMonth;
      monthA--;
    }
    if (monthA < 0) {
      yearA--;
      monthA += 12;
    }

    updateCalcDate({ day: dayA, month: monthA, year: yearA });
  };

  return (
    <div className={styles.ageCalculator}>
      <DateForm day={day} month={month} year={year} updateDate={updateDate} updateDay={updateDay} updateMonth={updateMonth} updateYear={updateYear} />
      <DateOutput calcDate={calcDate} />
    </div>
  );
};

export default AgeCalculator;
