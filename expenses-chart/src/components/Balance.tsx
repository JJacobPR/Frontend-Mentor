import balanceStyles from "./Balance.module.scss";
import circlesSVG from "../assets/circles.svg";

const Balance = () => {
  return (
    <div className={balanceStyles["balance-section"]}>
      <div className={balanceStyles["balance-text"]}>
        <h4>My Balance</h4>
        <h2>921.48$</h2>
      </div>
      <div>
        <img src={circlesSVG} />
      </div>
    </div>
  );
};

export default Balance;
