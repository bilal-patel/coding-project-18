// The x-axis is expenses, y-axis is profits, and the bubble size represents sales.

import React from 'react';
import ChartComponent from './ChartComponent';

function BubbleChart({ expenses, profits, sales }) {
  // Transform arrays into bubble data points by r
  
  const bubbleData = expenses.map((exp, i) => {
    // 
    return { x: exp, y: profits[i], r: sales[i] / 10 };
  });

  const data = {
    datasets: [
      {
        label: 'Bubble Chart (Expenses vs Profits, Bubble=Sales)',
        data: bubbleData,
        backgroundColor: 'rgba(54,162,235,0.5)'
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Bubble Chart - Sales, Profits, Expenses Combined'
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
  }; return <ChartComponent type="bubble" data={data} options={options} />;
}

export default BubbleChart;