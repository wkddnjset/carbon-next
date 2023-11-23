import { useMemo } from 'react';

import { Pie } from 'react-chartjs-2';

import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutChart({ id, result, goal }: any) {
  const options = {
    plugins: {
      legend: {
        legend: {
          position: 'top',
          display: false,
        },
        title: {
          display: false,
        },
      },
    },
  };

  const type = useMemo(() => {
    return goal > result;
  }, [result, goal]);

  const dataset = useMemo(() => {
    if (goal > result) {
      return [
        [goal, 0],
        [goal - result, result],
      ];
    } else {
      return [
        [0, result],
        [result - goal, goal],
      ];
    }
  }, [result, goal]);

  const data = {
    labels: ['목표', '예상 감축량'],
    datasets: [
      {
        data: dataset[0],
        backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)'],
        borderColor: ['rgb(75, 192, 192)', 'rgb(54, 162, 235)'],
        hoverOffset: 4,
      },
      {
        data: dataset[1],
        backgroundColor: [
          'white',
          type ? 'rgba(54, 162, 235, 0.2)' : 'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'white',
          type ? 'rgb(54, 162, 235)' : 'rgb(75, 192, 192)',
        ],
        hoverOffset: 4,
      },
    ],
  };
  return <Pie options={options} data={data} />;
}

export default DoughnutChart;
