import Chart from "./Chart/Chart";
import spendingStyles from "./Spendings.module.scss";

const Spendings = () => {
  return (
    <section className={spendingStyles["spendings-section"]}>
      <h2>Spending - Last 7 days</h2>
      <Chart />
      <div></div>
      <hr></hr>
      <div className={spendingStyles["spendings-footer"]}>
        <div className={spendingStyles["spendings-footer-left"]}>
          <p>Total this week</p>
          <h1>$478</h1>
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
