import { useEffect, useState } from "react";
import Team from "../../components/team/Team";
import "./about.css";

function Typewriter({ text, speed = 50 }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      index++;
      if (index === text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <p className="about-intro">{displayedText}</p>;
}

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section with Video */}
      <div className="about-hero">
        <video
          className="about-video-bg"
          autoPlay
          muted
          loop
          playsInline
          src="/videos/bg-video.mp4"
        />

        <div className="about-overlay" />

        <div className="about-container glass-merged">
          <h1 className="about-heading">About Us</h1>
          <h2 className="about-subheading">Welcome to LearnPro</h2>

          {/* Typewriter Effect Here */}
          <Typewriter text="LearnPro is where curiosity meets career. We provide future-ready courses designed by experts to help you grow, anytime, anywhere." />

          <div className="about-body">
            <h3>Our Mission</h3>
            <p>
              To make quality education accessible, practical, and inspiring — so you
              can turn your ambition into achievement.
            </p>

            <h3>What We Offer</h3>
            <div className="about-offers">
              <div className="offer-item">
                <h4>🎓 Expert Mentors</h4>
                <p>Industry-led guidance to keep you ahead.</p>
              </div>
              <div className="offer-item">
                <h4>📱 Learn Anywhere</h4>
                <p>Flexible content on your schedule, your way.</p>
              </div>
              <div className="offer-item">
                <h4>🚀 Career Focus</h4>
                <p>Real skills. Real progress. Real impact.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section (below hero) */}
      <Team />
    </div>
  );
};

export default About;
