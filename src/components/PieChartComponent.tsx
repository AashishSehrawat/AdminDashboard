import { Pie } from 'react-chartjs-2';
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

interface PieProps {
    labels: string[];
    data: number[];
    background: string[];
    offset?: number[];
  }
  
const PieChartComponent = ({
    labels,
    data,
    background,
    offset,
  }: PieProps) => {
    const pieChartData: ChartData<"pie", number[], string> = {
      labels,
      datasets: [
        {
          data,
          backgroundColor: background,
          borderWidth: 1, // Border around slices
          offset,
        },
      ],
    };
  
    const PieChartOptions: ChartOptions<"pie"> = {
      responsive: true,
      plugins: {
        legend: {
          display: false,  
        },
      },
    };
  
    return <Pie data={pieChartData} options={PieChartOptions} />;
  };

  export default PieChartComponent;
  