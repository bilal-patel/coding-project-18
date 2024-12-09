// Task 2: Create a Reusable ChartComponent
import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';



const ChartComponent = ({ chartType, chartData, chartOptions }) => {
  const canvasRef = useRef(null);       
  const currentChart = useRef(null);     

  // NOTES: useRef Creates a reference to canvas element

  useEffect(() => {
    const context = canvasRef.current.getContext('2d');

    // If a chart exists, destroy before creating a new one
    if (currentChart.current) {
      currentChart.current.destroy();
    }

    // creatinga new chart :)
    currentChart.current = new Chart(context, {
      type: chartType,
      data: chartData,
      options: chartOptions,
    });

    // Cleanup function to destroy the chart when the componen updates
    return () => {
      if (currentChart.current) {
        currentChart.current.destroy();
        currentChart.current = null;
      }
    };
  }, [chartType, chartData, chartOptions]); 

  return <canvas ref={canvasRef}></canvas>; 
};

export default ChartComponent;
