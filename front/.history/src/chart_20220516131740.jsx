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
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://192.168.1.103:5000";

const Charts = () => {

  useEffect(() => {
    setTimeout(() => {
      const ctx = document.getElementById(`myChart`).getContext('2d');
       new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['teste', ''],
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
      var graph = Chart.getChart(`myChart`);
      console.log(graph)

      const socket = socketIOClient(ENDPOINT);

      socket.on("teste", (data) => {
        // console.log(data)
  
        graph.data.datasets[0].data.push(1)
            graph.data.datasets[0].label.push(1)
            graph.update()
      })
    }, 1000)


    

  }, []);

  return (
    <div>

      <canvas id="myChart" ></canvas>
    </div>
  )
}

export { Charts }