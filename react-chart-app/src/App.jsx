import React, { useState, useEffect } from 'react';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import ScatterChart from './components/ScatterChart';
import BubbleChart from './components/BubbleChart';

function App() {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch data from our public/data.json file
  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        // Store the data in state
        setChartData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  // If still loading
  if (loading) {
    return <div>Loading data...</div>;
  }

  // If not there, show an error
  if (!chartData) {
    return <div>Error loading data</div>;
  }

  // 
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Financial Data Dashboard</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <BarChart months={chartData.months} sales={chartData.sales} />
        <LineChart months={chartData.months} profits={chartData.profits} />
        <ScatterChart expenses={chartData.expenses} profits={chartData.profits} />
        <BubbleChart expenses={chartData.expenses} profits={chartData.profits} sales={chartData.sales} />
      </div>
    </div>
  );
}

export default App;