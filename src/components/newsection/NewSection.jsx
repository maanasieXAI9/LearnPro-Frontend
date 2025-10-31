import { FaBrain, FaCode, FaCogs, FaComments } from "react-icons/fa";
import "./newsection.css";

const features = [
  {
    id: 1,
    title: "Master Programming Skills",
    description:
      "Gain hands-on experience in coding and software development essential for engineering careers.",
    icon: <FaCode size={40} color="#1e3a8a" />,
  },
  {
    id: 2,
    title: "Enhance Analytical Thinking",
    description:
      "Develop strong problem-solving and logical reasoning skills through challenging projects.",
    icon: <FaBrain size={40} color="#2563eb" />,
  },
  {
    id: 3,
    title: "Improve Technical Communication",
    description:
      "Boost your ability to articulate complex ideas clearly in English, essential for collaboration.",
    icon: <FaComments size={40} color="#3b82f6" />,
  },
  {
    id: 4,
    title: "Excel in Engineering Courses",
    description:
      "Apply coding and logic skills to excel in core engineering subjects and real-world applications.",
    icon: <FaCogs size={40} color="#60a5fa" />,
  },
];

const NewSection = () => {
  return (
    <section className="new-section">
      <div className="background-shapes">
        <span className="shape shape-1"></span>
        <span className="shape shape-2"></span>
        <span className="shape shape-3"></span>
      </div>

      <h2 className="section-title">
        Develop Your Engineering Skills <br />
        From Multiple Perspectives
      </h2>

      <div className="features-grid">
        {features.map(({ id, title, description, icon }) => (
          <article key={id} className="feature-card">
            <div className="icon-wrapper">{icon}</div>
            <h3 className="feature-title">{title}</h3>
            <p className="feature-description">{description}</p>
          </article>
        ))}
      </div>

      <div className="career-highlight">
        <strong>Prepare for a successful engineering career.</strong> Programming
        is a vital skill in today’s tech-driven industry. Build your expertise now
        to become a future-ready engineer.
      </div>
    </section>
  );
};

export default NewSection;
