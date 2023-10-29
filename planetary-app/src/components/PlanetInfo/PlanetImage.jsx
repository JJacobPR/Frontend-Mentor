import useImageSvg from "../hooks/useImageSvg.jsx";
import useImagePng from "../hooks/useImagePng.jsx";
import styles from "./PlanetImage.module.scss";

const PlanetImage = (props) => {
  let image;
  if (props.showInternal) {
    image = useImageSvg(props.fileInt);
  } else {
    image = useImageSvg(props.fileMain);
  }
  const subImage = useImagePng(props.fileSub);

  return (
    <div className={styles.planetPhotoWrapper}>
      <img src={image.image} alt="Planet Photo" />
      {props.showGeo && <img className={styles.subImage} src={subImage.image} alt="Planet Photo" />}
    </div>
  );
};

export default PlanetImage;
