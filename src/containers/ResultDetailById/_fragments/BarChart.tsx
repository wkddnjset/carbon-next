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

function BarChart({ id, result, goal, ...basisProps }: any) {
  const options = {
    // indexAxis: 'y' as const,
    elements: {
      bar: {
        borderWidth: 50,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: '탄소중립 기여율',
        fontSize: 40,
        fontStyle: 'bold',
      },
    },
  };
  const data = {
    labels: ['예상 감축량', '목표'],
    datasets: [
      {
        backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(255, 99, 132, 0.2)'],
        data: [result, goal],
        borderWidth: 1,
      },
    ],
  };
  return <Bar height="400px" data={data} options={options} />;
}

export default BarChart;
