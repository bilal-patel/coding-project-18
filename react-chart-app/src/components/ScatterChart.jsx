import React from 'react';
import ChartComponent from './ChartComponent';

const ScatterChart = ({ data }) => {
  const scatterData = data.expenses.map((expense, index) => ({
    x: expense,
    y: data.profits[index],
  }));

  const chartData = {
    datasets: [
      {
        label: 'Expenses vs. Profits',
        data: scatterData,
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  };

  const options = {
    plugins: { title: { display: true, text: 'Expenses vs. Profits' }, legend: { display: false } },
    responsive: true,
    scales: {
      x: { title: { display: true, text: 'Expenses' } },
      y: { title: { display: true, text: 'Profits' } },
    },
  };

  return <ChartComponent type="scatter" data={chartData} options={options} />;
};

export default ScatterChart;