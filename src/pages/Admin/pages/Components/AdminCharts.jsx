import React from "react";
import { Doughnut, Line } from "react-chartjs-2";

const AdminCharts = () => {
  const lineChartOptions = {
    plugins: {
      legend: {
        labels: {
          color: "white",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "white",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
      },
      y: {
        ticks: {
          color: "white",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
      },
    },
  };

  const doughnutChartOptions = {
    plugins: {
      legend: {
        labels: {
          color: "white",
        },
      },
    },
  };

  const lineChartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Article Views",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: origin,
        borderColor: "rgb(229, 140, 2)",
        backgroundColor: "rgba(229, 140, 2, 0.2)",
        tension: 0.1,
      },
    ],
  };

  const doughnutChartData = {
    labels: ["Technology", "Science", "History", "Art", "Business"],
    datasets: [
      {
        label: "Categories",
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const userDemographicsData = {
    labels: ["18-24", "25-34", "35-44", "45-54", "55+"],
    datasets: [
      {
        label: "User Demographics",
        data: [20, 30, 25, 15, 10],
        backgroundColor: [
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="p-4 sm:p-6 lg:p-8 mb-8">
      <div className="grid grid-cols-1 gap-8 mb-8">
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="text-2xl font-bold mb-4 text-white">
            Article Views Over Time
          </div>
          <Line data={lineChartData} options={lineChartOptions} />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-white">
            Article Categories Distribution
          </h2>
          <Doughnut data={doughnutChartData} options={doughnutChartOptions} />
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-white">
            User Demographics
          </h2>
          <Doughnut
            data={userDemographicsData}
            options={doughnutChartOptions}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminCharts;
