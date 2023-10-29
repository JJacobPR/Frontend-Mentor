import styles from "./PlanetArticle.module.scss";
import iconSource from "../../assets/img/icon-source.svg";

const PlanetArticle = (props) => {
  return (
    <div className={styles.planetArticle}>
      <h1>{props.name}</h1>
      <article>{props.content.content}</article>
      <p>
        Source:&nbsp;
        <a href={props.content.source}>
          Wikipedia
          <img src={iconSource} />
        </a>
      </p>
    </div>
  );
};

export default PlanetArticle;
