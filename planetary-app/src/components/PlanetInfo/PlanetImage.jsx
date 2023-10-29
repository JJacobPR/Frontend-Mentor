import useImageSvg from "../hooks/useImageSvg.jsx";
import useImagePng from "../hooks/useImagePng.jsx";
import styles from "./PlanetImage.module.scss";
import { useEffect } from "react";

const PlanetImage = (props) => {
  let planetStyle;
  let image;

  if (props.showInternal) {
    image = useImageSvg(props.fileInt);
  } else {
    image = useImageSvg(props.fileMain);
  }
  const subImage = useImagePng(props.fileSub);
  return (
    <div className={styles.planetPhotoWrapper}>
      <img className={styles[props.name.toLowerCase()]} src={image.image} alt="Planet Photo" />
      {props.showGeo && <img className={styles.subImage} src={subImage.image} alt="Planet Photo" />}
    </div>
  );
};

export default PlanetImage;
