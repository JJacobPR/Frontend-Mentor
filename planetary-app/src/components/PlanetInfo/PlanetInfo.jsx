import PlanetArticle from "./PlanetArticle.jsx";
import PlanetButtons from "./PlanetButtons.jsx";
import PlanetImage from "./PlanetImage.jsx";
import PlanetSubInfo from "./PlanetSubInfo/PlanetSubInfo.jsx";
import data from "../../assets/data/data.json";
import styles from "./PlanetInfo.module.scss";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

export const planetLoader = (obj) => {
  const planetAr = data.filter((planet) => planet.name === obj.params.planetName);
  return planetAr[0];
};

const PlanetInfo = () => {
  const planet = useLoaderData();
  const [articleData, updateArticleData] = useState(planet.overview);
  const [showGeo, updateShowGeo] = useState(false);
  const [showInternal, updateShowInternal] = useState(false);

  const setOverview = () => {
    updateArticleData(planet.overview);
    updateShowGeo(false);
    updateShowInternal(false);
  };
  const setStructure = () => {
    updateArticleData(planet.structure);
    updateShowGeo(false);
    updateShowInternal(true);
  };
  const setGeology = () => {
    updateArticleData(planet.geology);
    updateShowGeo(true);
    updateShowInternal(false);
  };

  return (
    <section className={styles.planetInfoSection}>
      <div className={styles.planetInfoImageSection}>
        <PlanetImage showGeo={showGeo} showInternal={showInternal} fileSub={planet.images.geology.split("/").pop().split(".").slice(0, -1).join(".")} fileInt={planet.images.internal.split("/").pop().split(".").slice(0, -1).join(".")} fileMain={planet.images.planet.split("/").pop().split(".").slice(0, -1).join(".")} />
        <div className={styles.planetInfo}>
          <PlanetArticle name={planet.name} content={articleData} />
          <PlanetButtons setOverview={setOverview} setStructure={setStructure} setGeology={setGeology} />
        </div>
      </div>
      <PlanetSubInfo radius={planet.radius} revolution={planet.revolution} rotation={planet.rotation} temperature={planet.temperature} />
    </section>
  );
};

export default PlanetInfo;
