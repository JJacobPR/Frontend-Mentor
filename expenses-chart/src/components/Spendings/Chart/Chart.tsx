import chartStyles from "./Chart.module.scss";

const Chart = () => {
  return (
    <div className={chartStyles["chart"]}>
      <div className={chartStyles["bar-wrapper"]}>
        <div className={chartStyles["bar-1"]} />
        <p>mon</p>
      </div>
      <div className={chartStyles["bar-wrapper"]}>
        <div className={chartStyles["bar-2"]} />
        <p>tue</p>
      </div>
      <div className={chartStyles["bar-wrapper"]}>
        <div className={chartStyles["bar-3"]} />
        <p>wed</p>
      </div>
      <div className={chartStyles["bar-wrapper"]}>
        <div className={chartStyles["bar-4"]} />
        <p>thu</p>
      </div>
      <div className={chartStyles["bar-wrapper"]}>
        <div className={chartStyles["bar-5"]} />
        <p>fri</p>
      </div>
      <div className={chartStyles["bar-wrapper"]}>
        <div className={chartStyles["bar-6"]} />
        <p>sat</p>
      </div>
      <div className={chartStyles["bar-wrapper"]}>
        <div className={chartStyles["bar-7"]} />
        <p>sun</p>
      </div>
    </div>
  );
};

export default Chart;
