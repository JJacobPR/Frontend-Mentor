import { useEffect, useState } from "react";
import chartStyles from "./Chart.module.scss";
import data from "../../../assets/data.json";

const MAX_HEIGHT = 150;

const Chart = () => {
  const [bar1Height, updateBar1Height] = useState("0px");
  const [bar2Height, updateBar2Height] = useState("0px");
  const [bar3Height, updateBar3Height] = useState("0px");
  const [bar4Height, updateBar4Height] = useState("0px");
  const [bar5Height, updateBar5Height] = useState("0px");
  const [bar6Height, updateBar6Height] = useState("0px");
  const [bar7Height, updateBar7Height] = useState("0px");

  useEffect(() => {
    const values: number[] = data.map((day) => day.amount);
    const max = Math.max(...values);

    updateBar1Height(`${(data[0].amount / max) * MAX_HEIGHT}px`);
    updateBar2Height(`${(data[1].amount / max) * MAX_HEIGHT}px`);
    updateBar3Height(`${(data[2].amount / max) * MAX_HEIGHT}px`);
    updateBar4Height(`${(data[3].amount / max) * MAX_HEIGHT}px`);
    updateBar5Height(`${(data[4].amount / max) * MAX_HEIGHT}px`);
    updateBar6Height(`${(data[5].amount / max) * MAX_HEIGHT}px`);
    updateBar7Height(`${(data[6].amount / max) * MAX_HEIGHT}px`);
  });

  return (
    <div className={chartStyles["chart"]}>
      <div className={chartStyles["bar-wrapper"]}>
        <div style={{ height: bar1Height, background: `${Number(bar1Height.slice(0, -2)) == 150 ? "hsl(186, 49%, 80%)" : ""}` }} data-amount={`$${data[0].amount}`} />
        <p>mon</p>
      </div>
      <div className={chartStyles["bar-wrapper"]}>
        <div style={{ height: bar2Height, background: `${Number(bar2Height.slice(0, -2)) == 150 ? "hsl(186, 49%, 80%)" : ""}` }} data-amount={`$${data[1].amount}`} />
        <p>tue</p>
      </div>
      <div className={chartStyles["bar-wrapper"]}>
        <div style={{ height: bar3Height, background: `${Number(bar3Height.slice(0, -2)) == 150 ? "hsl(186, 49%, 80%)" : ""}` }} data-amount={`$${data[2].amount}`} />
        <p>wed</p>
      </div>
      <div className={chartStyles["bar-wrapper"]}>
        <div style={{ height: bar4Height, background: `${Number(bar1Height.slice(0, -2)) == 150 ? "hsl(186, 49%, 80%)" : ""}` }} data-amount={`$${data[3].amount}`} />
        <p>thu</p>
      </div>
      <div className={chartStyles["bar-wrapper"]}>
        <div style={{ height: bar5Height, background: `${Number(bar1Height.slice(0, -2)) == 150 ? "hsl(186, 49%, 80%)" : ""}` }} data-amount={`$${data[4].amount}`} />
        <p>fri</p>
      </div>
      <div className={chartStyles["bar-wrapper"]}>
        <div style={{ height: bar6Height, background: `${Number(bar1Height.slice(0, -2)) == 150 ? "hsl(186, 49%, 80%)" : ""}` }} data-amount={`$${data[5].amount}`} />
        <p>sat</p>
      </div>
      <div className={chartStyles["bar-wrapper"]}>
        <div style={{ height: bar7Height, background: `${Number(bar1Height.slice(0, -2)) == 150 ? "hsl(186, 49%, 80%)" : ""}` }} data-amount={`$${data[6].amount}`} />
        <p>sun</p>
      </div>
    </div>
  );
};

export default Chart;
