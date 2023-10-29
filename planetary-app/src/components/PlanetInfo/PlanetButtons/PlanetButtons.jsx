import styles from "./PlanetButtons.module.scss";

const PlanetButtons = (props) => {
  return (
    <div className={styles.planetButtons}>
      <button className={styles[props.name.toLowerCase()]} onClick={() => props.setOverview()}>
        Overview
      </button>
      <button className={styles[props.name.toLowerCase()]} onClick={() => props.setStructure()}>
        Internal Structure
      </button>
      <button className={styles[props.name.toLowerCase()]} onClick={() => props.setGeology()}>
        Surface Geology
      </button>
    </div>
  );
};

export default PlanetButtons;
