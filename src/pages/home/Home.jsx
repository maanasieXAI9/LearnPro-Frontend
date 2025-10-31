import { useNavigate } from "react-router-dom";
import NewSection from "../../components/newsection/NewSection";
import Testimonials from "../../components/testimonials/Testimonials";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <main className="home">
      {/* 🔹 Background Video */}
      <video
        className="background-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/bg-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔹 Hero Section */}
      <section className="home-content glass-card">
        <h1>Welcome to LearnPro</h1>
        <p>Learn, Grow, Excel</p>
        <button onClick={() => navigate("/courses")} className="common-btn">
          Get Started
        </button>
      </section>

      <NewSection />
      <Testimonials />
    </main>
  );
};

export default Home;
