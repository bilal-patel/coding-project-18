
// TASk 3 - line charts
import React from 'react';
import ChartComponent from './ChartComponent';

function LineChart({ months, profits }) { // setting up line chart
  const data = {
    labels: months,
    datasets: [
      {
        label: 'Monthly Profits',
        data: profits,
        borderColor: 'rgba(153,102,255,1)',
        backgroundColor: 'rgba(153,102,255,0.2)',
        fill: true
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {title: { display: true, text: 'Line Chart - Profit Over Time'
      }
    }
  };

  return <ChartComponent type="line" data={data} options={options} />;
}

export default LineChart;