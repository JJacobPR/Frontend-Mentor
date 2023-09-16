import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footerMain}>
      <hr />
      <div>
        <h4>Source</h4>
        <a className="theme-check">https://en.wiktionary.org/wiki/keyboard</a>
      </div>
    </footer>
  );
};

export default Footer;
