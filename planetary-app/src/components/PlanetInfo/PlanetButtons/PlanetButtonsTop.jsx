import styles from "./PlanetButtons.module.scss";

const PlanetButtonsTop = (props) => {
  return (
    <div className={styles.planetButtonsTop}>
      <button className={styles[props.name.toLowerCase()]} onClick={() => props.setOverview()}>
        Overview
      </button>
      <button className={styles[props.name.toLowerCase()]} onClick={() => props.setStructure()}>
        Structure
      </button>
      <button className={styles[props.name.toLowerCase()]} onClick={() => props.setGeology()}>
        Surface
      </button>
    </div>
  );
};

export default PlanetButtonsTop;
