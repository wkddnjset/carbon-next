import { useMemo } from 'react';

import { Doughnut } from 'react-chartjs-2';

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
      tooltip: {
        filter: function (tooltipItem: any) {
          return tooltipItem.dataIndex !== 1;
        },
      },
    },
  };

  const dataset = useMemo(() => {
    if (goal > result) {
      return [
        [(goal / goal) * 100, 0],
        [(result / goal) * 100, ((goal - result) / goal) * 100],
      ];
    } else {
      return [
        [(goal / result) * 100, ((result - goal) / result) * 100],
        [(result / result) * 100, 0],
      ];
    }
  }, [result, goal]);

  const data = {
    datasets: [
      {
        label: '목표',
        data: dataset[0],
        backgroundColor: ['rgba(75, 192, 192, 0.2)', '#F8F8F8'],
        hoverOffset: 4,
      },
      {
        label: '예상 감축량',
        data: dataset[1],
        backgroundColor: ['rgba(54, 162, 235, 0.2)', '#F8F8F8'],
        hoverOffset: 4,
      },
    ],
  };
  return <Doughnut options={options} data={data} />;
}

export default DoughnutChart;
