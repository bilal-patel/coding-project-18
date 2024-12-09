//TASK 3 

import React from 'react';
import ChartComponent from './ChartComponent';

function BarChart({ months, sales }) {
  // Setup the data in the format Chart.js expects
  const data = {
    labels: months,
    datasets: [
      {
        label: 'Monthly Sales',
        data: sales,
        backgroundColor: 'rgba(75,192,192,0.5)'
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Bar Chart - Sales Over Time'
      }
    }
  };

  return <ChartComponent type="bar" data={data} options={options} />;
}

export default BarChart;