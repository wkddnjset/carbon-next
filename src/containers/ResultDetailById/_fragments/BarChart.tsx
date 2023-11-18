import { Bar } from 'react-chartjs-2';

import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip,
} from 'chart.js';

ChartJS.register(CategoryScale, ArcElement, LinearScale, BarElement, Tooltip);

function BarChart({ id, ...basisProps }: any) {
  const options = {
    indexAxis: 'y' as const,
    elements: {
      bar: {
        borderWidth: 100,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  const data = {
    labels: ['목표', '결과'],
    datasets: [
      {
        data: [65, 59],
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(255, 159, 64, 0.2)'],
        borderColor: ['rgb(255, 99, 132)', 'rgb(255, 159, 64)'],
        borderWidth: 1,
      },
    ],
  };
  return <Bar data={data} options={options} />;
}

export default BarChart;
