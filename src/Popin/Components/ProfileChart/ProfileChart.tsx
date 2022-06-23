import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import { ChartInterface } from "../../../types/chart.interface";

import "./ProfileChart.scss";
import useProfileChart from "./useProfileChart";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export default function ProfileChart({
  title,
  description,
  rgb,
  datas,
}: ChartInterface) {
  const { getDatas, getOptions } = useProfileChart(rgb);
  const data = getDatas(datas);

  const options = getOptions();

  return (
    <div className="profileChart">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="chartContainer">
        <Radar className="chart" data={data} options={options} />
      </div>
    </div>
  );
}
