import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement);

const clickHandler = (index) => {
  switch (index) {
    case 0:
      return 5;
    case 1:
      return 4;
    case 2:
      return 3;
    case 3:
      return 2;
    case 4:
      return 1;
    default:
      return null;
  }
};

const Chart = ({ data, filter }) => {
  const labels = ["5 Stars", "4 Stars", "3 Stars", "2 Stars", "1 Star"];
  const options = {
    onClick: (event, element) => {
      const index = clickHandler(element[0]?.index);
      filter(index);
    },
    onHover: (event, element) => {
      event.native.target.style.cursor = element[0] ? "pointer" : "default";
    },
    scales: {
      x: {
        ticks: {
          display: false,
        },
        display: false,
      },
      y: {
        ticks: {
          color: "white",
        },
      },
    },
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  };

  const dataSet = {
    labels,
    datasets: [
      {
        label: "Ratings",
        data: data ? data : [0, 0, 0, 0, 0],
        borderColor: "f5961d",
        backgroundColor: "#FFA41C",
        hoverBackgroundColor: "#de7921",
      },
    ],
  };

  return <Bar options={options} data={dataSet} />;
};
export default Chart;
