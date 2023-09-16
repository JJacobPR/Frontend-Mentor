import styles from "./Navigation.module.css";
import bookLogo from "../../assets/images/logo.svg";
import NavigationSelect from "./NavigationSelect";
import NavigationThemeChanger from "./NavigationThemeChanger";

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <img src={bookLogo} alt="Book logo" />
      <div className={styles.right}>
        <NavigationSelect />
        <div className={styles.line} />
        <NavigationThemeChanger />
      </div>
    </nav>
  );
};

export default Navigation;
