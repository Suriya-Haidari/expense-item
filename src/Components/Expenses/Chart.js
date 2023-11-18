import "./Chart.css";
import ChartBar from "./ChartBar";
export default function Chart(props) {
  const dataPointsValues = props.chartDataPoirts.map(
    (dataPoint) => dataPoint.value
  );
  const totalMax = Math.max(...dataPointsValues);
  return (
    <div className="chart">
      {props.chartDataPoirts.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          label={dataPoint.label}
          value={dataPoint.value}
          totalMax={totalMax}
        ></ChartBar>
      ))}
    </div>
  );
}
