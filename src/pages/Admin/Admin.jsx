import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Line, Doughnut } from "react-chartjs-2";
import AdminCards from "./pages/Components/AdminCards";
import AdminComments from "./pages/Components/AdminComments";
import AdminCharts from "./pages/Components/AdminCharts";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
);

const AdminDashboard = () => {
  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-3xl font-bold mb-6 text-white">Admin Dashboard</h1>
      {/* Cards */}
      <AdminCards />
      {/* Charts */}
      <AdminCharts />
      {/* Recent Comments */}
      <AdminComments />
    </div>
  );
};

export default AdminDashboard;
