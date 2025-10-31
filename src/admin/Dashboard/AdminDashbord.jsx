import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { server } from "../../main";
import Layout from "../Utils/Layout";
import "./dashboard.css";

const AdminDashboard = ({ user }) => {
  const navigate = useNavigate();

  const [stats, setStats] = useState({
    totalCourses: 0,
    totalLectures: 0,
    totalUsers: 0,
  });

  useEffect(() => {
    if (!user || user.role !== "admin") {
      navigate("/");
    }
  }, [user, navigate]);

  useEffect(() => {
    async function fetchStats() {
      try {
        const { data } = await axios.get(`${server}/api/stats`, {
          headers: {
            "Content-Type": "application/json",
            token: localStorage.getItem("token"),
          },
        });

        setStats({
          totalCourses: data.stats.totalCourses || 0,
          totalLectures: data.stats.totalLectures || 0,
          totalUsers: data.stats.totalUsers || 0,
        });
      } catch (error) {
        console.error("Failed to fetch stats:", error);
      }
    }

    fetchStats();
  }, []);

  return (
    <Layout>
      <div className="admin-dashboard-container">
        <video autoPlay muted loop className="dashboard-bg-video">
          <source src="/videos/bg-``video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      <div className="main-content">
        <div className="box">
          <p>Total Courses</p>
          <p>{stats.totalCourses}</p>
        </div>
        <div className="box">
          <p>Total Lectures</p>
          <p>{stats.totalLectures}</p>
        </div>
        <div className="box">
          <p>Total Users</p>
          <p>{stats.totalUsers}</p>
        </div>
      </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
