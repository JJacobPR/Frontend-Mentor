import styles from "./PlanetSubInfo.module.scss";

const PlanetSubInfo = (props) => {
  return (
    <section className={styles.subInfo}>
      <div>
        <h4>ROTATION TIME</h4>
        <p>{props.rotation}</p>
      </div>
      <div>
        <h4>REVOLUTION TIME</h4>
        <p>{props.revolution}</p>
      </div>
      <div>
        <h4>radius</h4>
        <p>{props.radius}</p>
      </div>
      <div>
        <h4>AVERAGE TEMP.</h4>
        <p>{props.temperature}</p>
      </div>
    </section>
  );
};

export default PlanetSubInfo;
