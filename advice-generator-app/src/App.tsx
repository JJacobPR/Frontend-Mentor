import { useState } from "react";
import styles from "./App.module.css";
import iconDice from "./assets/images/icon-dice.svg";
import patternDivider from "./assets/images/pattern-divider-desktop.svg";

const randomNumber = (): number => {
  return Math.floor(Math.random() * 224) + 1;
};

function App() {
  const [hint, updateHint] = useState("Press the button for a hint");
  const [hintId, updateHintId] = useState("#00");

  const getHint = async (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    event.preventDefault();

    try {
      const response = await fetch(`https://api.adviceslip.com/advice/${randomNumber()}`);

      if (!response.ok) throw new Error("Response came with an error");

      const data = await response.json();

      updateHint(data.slip.advice);
      updateHintId(`#${data.slip.id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles["advice-box"]}>
      <h4>ADVICE {hintId}</h4>
      <p>{hint}</p>
      <img src={patternDivider} />
      <div className={styles["dice"]}>
        <img onClick={getHint} src={iconDice} />
      </div>
    </div>
  );
}

export default App;
