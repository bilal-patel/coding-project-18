//Components - LineChart.jsx
import React from 'react';
import ChartComponent from './ChartComponent';

const LineChart = ({ data }) => {
  const chartData = {
    labels: data.months,
    datasets: [
      {
        label: 'Profits',
        data: data.profits,
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        fill: true,
      },
    ],
  };

  const options = {
    plugins: { title: { display: true, text: 'Monthly Profits' }, legend: { display: false } },
    responsive: true,
  };

  return <ChartComponent type="line" data={chartData} options={options} />;
};

export default LineChart;
