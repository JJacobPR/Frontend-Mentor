import { useEffect, useRef, useState } from "react";
import playButtonIcon from "../../assets/images/icon-play.svg";
import styles from "./SearchItemHeader.module.css";

const SearchItemHeader = (props) => {
  const soundRef = useRef(null);
  const [soundFile, updateSoundFile] = useState({});

  useEffect(() => {
    let flag = false;
    props.sound.forEach((element) => {
      if (Object.keys(element).includes("audio") && element.audio !== "") {
        updateSoundFile(element.audio);
        flag = true;
      }
    });
    if (flag === false) updateSoundFile({});
  }, [props.sound]);
  const playSound = () => {
    soundRef.current.play();
  };

  return (
    <header className={styles.itemHeader}>
      <div>
        <h1>{props.word.word}</h1>
        <h3>{props.word.phonetic ? props.word.phonetic : "No phonetic notation"}</h3>
      </div>
      {Object.keys(soundFile).length !== 0 && (
        <div>
          <audio ref={soundRef} src={soundFile} />
          <svg onClick={playSound} xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75">
            <g fill="#A445ED" fillRule="evenodd">
              <circle cx="37.5" cy="37.5" r="37.5" opacity=".25" />
              <path d="M29 27v21l21-10.5z" />
            </g>
          </svg>
        </div>
      )}
    </header>
  );
};

export default SearchItemHeader;
