// TASK 2 

import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

// Register Chart.js components
Chart.register(...registerables);

const ChartComponent = ({ type, data, options }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => { // UseEffect per notes***
    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      // If a chart instance exists, destroy it before creating a new one
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      // Create new chart instance
      chartInstance.current = new Chart(ctx, {
        type,
        data,
        options,
      });
    }
    // Cleanup function to destroy the chart 
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [type, data, options]); // Re-run 

  return <canvas ref={chartRef}></canvas>;
};

export default ChartComponent;