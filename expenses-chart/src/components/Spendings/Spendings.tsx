import Chart from "./Chart/Chart";
import spendingStyles from "./Spendings.module.scss";
import data from "../../assets/data.json";

const Spendings = () => {
  const sum: number = data.reduce((accumulator, day) => accumulator + day.amount, 0);

  return (
    <section className={spendingStyles["spendings-section"]}>
      <h2>Spending - Last 7 days</h2>
      <Chart />
      <div></div>
      <hr></hr>
      <div className={spendingStyles["spendings-footer"]}>
        <div className={spendingStyles["spendings-footer-left"]}>
          <p>Total this week</p>
          <h1>${sum}</h1>
        </div>
        <div className={spendingStyles["spendings-footer-right"]}>
          <h4>+2.4%</h4>
          <p>From Last month</p>
        </div>
      </div>
    </section>
  );
};

export default Spendings;
