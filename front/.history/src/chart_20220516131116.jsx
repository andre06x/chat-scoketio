import React, { useEffect } from 'react';

import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
} from 'chart.js';

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);


const Charts = () => {

  useEffect(() => {
    setTimeout(() => {
      const ctx = document.getElementById(`myChart`).getContext('2d');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['teste'],
          datasets: [{
  
            label: "carregando ...",
            data: [123, 180],
            pointRadius: 0,
            pointHitRadius: 0,
  
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
            fill: true
  
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            },
            x: {
              display: true
            }
          },
          interaction: {
            mode: 'index',
            intersect: false
          },
        }
  
      });
    }, 1000)
    

  }, []);

  return (
    <div>

      <canvas id="myChart" ></canvas>
    </div>
  )
}

export { Charts }