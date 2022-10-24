import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
} from "chart.js";

ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title);

export default function AdminDashboardChart() {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Lorem",
        data: [20, 25, 0, 30, 75, 40, 90, 60, 85, 75, 90, 75],
        borderColor: "#CE2A96",
      },
      {
        label: "Ipsum",
        data: [27, 30, 25, 40, 45, 20, 60, 55, 95, 80, 95, 100],
        borderColor: "#6C60FF",
      },
    ],
  };

  const options = {
    responsive: true,
    elements: {
      line: {
        tension: 0.2,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          color: "#fff",
        },
      },
      y: {
        ticks: {
          stepSize: 10,
          color: "#141522",
          font: {
            weight: "bold",
          },
        },
        grid: {
          display: false,
          color: "#fff",
        },
      },
    },
  };
  return <Line data={data} options={options} className='tw-w-full tw-object-contain' />;
}
