
// Task 3 -scatter

import React from 'react';
import ChartComponent from './ChartComponent';

function ScatterChart({ expenses, profits }) {
  // Transforms into scatter points
  const scatterData = expenses.map((exp, i) => {
    return { x: exp, y: profits[i] };
  });

  const data = {
    datasets: [
      {
        label: 'Expenses vs Profits',
        data: scatterData,
        backgroundColor: 'rgba(255,99,132,0.5)'
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Scatter Chart - Expenses vs Profits'
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Expenses'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Profits'
        }
      }
    }
  };

  return <ChartComponent type="scatter" data={data} options={options} />;
}

export default ScatterChart;