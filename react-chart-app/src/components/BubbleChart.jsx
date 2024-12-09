import React from 'react';
import ChartComponent from './ChartComponent';

const BubbleChart = ({ data }) => {
  const bubbleData = data.expenses.map((expense, index) => ({
    x: expense,
    y: data.profits[index],
    r: data.sales[index] / 100, // Adjusts bubble size
  }));

  const chartData = {
    datasets: [
      {
        label: 'Sales, Expenses & Profits',
        data: bubbleData,
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
    ],
  };

  const options = {
    plugins: { title: { display: true, text: 'Sales, Expenses & Profits' }, legend: { display: false } },
    responsive: true,
    scales: {
      x: { title: { display: true, text: 'Expenses' } },
      y: { title: { display: true, text: 'Profits' } },
    },
  };

  return <ChartComponent type="bubble" data={chartData} options={options} />;
};

export default BubbleChart;