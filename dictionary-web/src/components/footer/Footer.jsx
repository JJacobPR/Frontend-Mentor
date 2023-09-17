import { useEffect, useState } from "react";
import styles from "./Footer.module.css";

const Footer = (props) => {
  const [classes, updateClasses] = useState("");
  useEffect(() => {
    if (document.querySelector(".main-wrapper")?.classList.contains("theme")) updateClasses("theme-check theme");
    else updateClasses("theme-check");
  });

  return (
    <footer className={styles.footerMain}>
      <hr />
      <div>
        <h4>Source</h4>
        <a href={props.source} target={"_blank"} className={classes}>
          {props.source}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
