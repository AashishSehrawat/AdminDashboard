import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement, 
  PointElement, 
  Title,
  Tooltip,
  Legend,
  ChartData,
  Filler,
  ChartOptions,
} from "chart.js";

// Register necessary chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement, 
  Title,
  Tooltip,
  Legend,
  Filler
);


const months = ["January", "Febuary", "March", "April", "May", "June", "july"];

interface LineChartProps {
  data: number[];
  label: string;
  backgroundColor: string;
  labels?: string[];
  borderColor: string;
}

const LineChartComponent = ({
  data,
  label,
  backgroundColor,
  labels = months,
  borderColor,
} : LineChartProps) => {
  const lineData : ChartData<"line", number[], string> = {
    labels,
    datasets: [
      {
        fill: true,
        label,
        data,
        backgroundColor,
        borderColor,
      },
    ]
  }

  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },

    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    }
  }
  return (
    <Line data={lineData} options={options} />
  )
}

export default LineChartComponent
