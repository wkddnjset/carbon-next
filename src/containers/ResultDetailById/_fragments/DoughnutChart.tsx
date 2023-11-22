import { Doughnut } from 'react-chartjs-2';

import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutChart({ id, result, goal }: any) {
  const options = {
    plugins: {
      legend: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'NDC 기여율',
          fontSize: 40,
          fontStyle: 'bold',
        },
      },
    },
  };
  const data = {
    labels: [
      '목표 값',
      '결과 값',
      // 'Yellow'
    ],
    datasets: [
      {
        data: [goal, result],
        backgroundColor: [
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          // 'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          // 'rgb(153, 102, 255)',
        ],
        hoverOffset: 4,
      },
    ],
  };
  return <Doughnut options={options} data={data} />;
}

export default DoughnutChart;
