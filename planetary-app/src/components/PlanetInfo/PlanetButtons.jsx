import styles from "./PlanetButtons.module.scss";

const PlanetButtons = (props) => {
  return (
    <div className={styles.planetButtons}>
      <button onClick={() => props.setOverview()}>Overview</button>
      <button onClick={() => props.setStructure()}>Internal Structure</button>
      <button onClick={() => props.setGeology()}>Surface Geology</button>
    </div>
  );
};

export default PlanetButtons;
