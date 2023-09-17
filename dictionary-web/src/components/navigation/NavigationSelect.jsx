import dropIcon from "../../assets/images/icon-arrow-down.svg";
import styles from "./NavigationSelect.module.css";

const NavigationSelect = () => {
  const selectFont = (e) => {
    document.documentElement.style.setProperty("--font-regular", e.target.value);
  };

  return (
    <div className={styles.dropdown}>
      <select onChange={selectFont} className="theme-check">
        <option value={"Inter"}>Sans Serif</option>
        <option value={"Lora"}>Serif</option>
        <option value={"Inconsolata"}>Mono</option>
      </select>
      <img src={dropIcon} alt="Drop Icon" />
    </div>
  );
};

export default NavigationSelect;
