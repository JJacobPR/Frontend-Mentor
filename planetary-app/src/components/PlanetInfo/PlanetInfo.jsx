import PlanetArticle from "./PlanetArticle.jsx";
import PlanetButtons from "./PlanetButtons/PlanetButtons.jsx";
import PlanetImage from "./PlanetImage.jsx";
import PlanetSubInfo from "./PlanetSubInfo/PlanetSubInfo.jsx";
import PlanetButtonsTop from "./PlanetButtons/PlanetButtonsTop.jsx";
import styles from "./PlanetInfo.module.scss";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

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
        <PlanetButtonsTop name={planet.name} className={styles.planetInfo} setOverview={setOverview} setStructure={setStructure} setGeology={setGeology} />
        <PlanetImage name={planet.name} showGeo={showGeo} showInternal={showInternal} fileSub={planet.images.geology.split("/").pop().split(".").slice(0, -1).join(".")} fileInt={planet.images.internal.split("/").pop().split(".").slice(0, -1).join(".")} fileMain={planet.images.planet.split("/").pop().split(".").slice(0, -1).join(".")} />
        <div className={styles.planetInfo}>
          <PlanetArticle name={planet.name} content={articleData} />
          <PlanetButtons name={planet.name} className={styles.planetInfo} setOverview={setOverview} setStructure={setStructure} setGeology={setGeology} />
        </div>
      </div>
      <PlanetSubInfo radius={planet.radius} revolution={planet.revolution} rotation={planet.rotation} temperature={planet.temperature} />
    </section>
  );
};

export default PlanetInfo;
