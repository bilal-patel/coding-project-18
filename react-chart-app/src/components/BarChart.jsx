
// barchart - components
import React from 'react';
import ChartComponent from './ChartComponent';

const BarChart = ({ data }) => {
  const chartData = {
    labels: data.months,
    datasets: [
      {
        label: 'Sales',
        data: data.sales,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const options = {
    plugins: { title: { display: true, text: 'Monthly Sales' }, legend: { display: false } },
    responsive: true,
  };

  return <ChartComponent type="bar" data={chartData} options={options} />;
};

export default BarChart;