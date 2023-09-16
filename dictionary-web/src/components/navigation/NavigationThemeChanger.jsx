import styles from "./NavigationThemeChanger.module.css";
import iconMoon from "../../assets/images/icon-moon.svg";
import iconMoonNight from "../../assets/images/icon-moon-night.svg";
import { useState } from "react";

const NavigationThemeChanger = () => {
  const [darkTheme, updateDarkTheme] = useState({ is: false, src: iconMoon });

  const check = () => {
    document.querySelectorAll([".main-wrapper", ".theme-check"]).forEach((element) => element.classList.toggle("theme"));
    if (darkTheme.is) updateDarkTheme({ is: !darkTheme.is, src: iconMoon });
    else updateDarkTheme({ is: !darkTheme.is, src: iconMoonNight });
  };

  return (
    <div className={styles.themeChanger}>
      <label className={styles.switch}>
        <input onClick={check} type="checkbox" />
        <span className={styles.slider}></span>
      </label>
      <img src={darkTheme.src} alt="Icon Moon" />
    </div>
  );
};

export default NavigationThemeChanger;
