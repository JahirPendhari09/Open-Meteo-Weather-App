import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import type { GraphDataType } from '../static/types';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);


const Graph: React.FC<GraphDataType> = ({ data }) => {
  const labels = data.time;

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Max Temp (°C)',
        data: data.temperature_2m_max,
        borderColor: 'rgb(255, 99, 132)',
        fill: false,
      },
      {
        label: 'Min Temp (°C)',
        data: data.temperature_2m_min,
        borderColor: 'rgb(54, 162, 235)',
        fill: false,
      },
      {
        label: 'Mean Temp (°C)',
        data: data.temperature_2m_mean,
        borderColor: 'rgb(75, 192, 192)',
        fill: false,
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded shadow mb-6">
      <h2 className="text-xl font-semibold mb-4">Temperature Trends</h2>
      <Line data={chartData} />
    </div>
  );
};

export default Graph;
