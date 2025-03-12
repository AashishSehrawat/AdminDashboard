import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from "chart.js";

// Register necessary components
ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutProps {
  labels: string[];
  data: number[];
  background: string[];
  cutout?: number;
  legends?: boolean;
  offset?: number[];
}

const DoughnutChart = ({
  labels,
  data,
  background,
  cutout,
  legends = true,
  offset,
}: DoughnutProps) => {
  const doughnutData: ChartData<"doughnut", number[], string> = {
    labels,
    datasets: [
      {
        data,
        backgroundColor: background,
        borderWidth: 0, // Border around slices
        offset,
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    plugins: {
      legend: {
        display: legends,
        position: "bottom", // Adjust legend position
        labels: {
            padding: 40,            
        },
      },
    },
    cutout,
  };

  return <Doughnut data={doughnutData} options={options} />;
};

export default DoughnutChart;