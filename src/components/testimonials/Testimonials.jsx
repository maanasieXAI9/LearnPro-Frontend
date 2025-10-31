import "./testimonials.css";

const testimonials = [
  {
    name: "Sana Ahmed",
    role: "Student",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    feedback:
      "LearnPro helped me improve my coding skills dramatically. The courses are easy to follow and the instructors are fantastic!",
  },
  {
    name: "Rohan Sharma",
    role: "Instructor",
    photo: "https://randomuser.me/api/portraits/men/36.jpg",
    feedback:
      "Creating courses on LearnPro is seamless. The platform is intuitive and supports various content formats.",
  },
  {
    name: "Meera Patel",
    role: "Student",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    feedback:
      "I loved the interactive quizzes and the flexible learning schedule. Highly recommended for busy professionals!",
  },
];

const Testimonials = () => (
  <section className="testimonials-section">
    <h2 className="section-title">What Our Learners Say</h2>
    <div className="testimonial-cards">
      {testimonials.map(({ name, role, photo, feedback }, i) => (
        <article key={i} className="testimonial-card" tabIndex={0}>
          <div className="testimonial-photo" style={{backgroundImage: `url(${photo})`}}></div>
          <div className="testimonial-content">
            <p className="feedback">"{feedback}"</p>
            <h4 className="name">{name}</h4>
            <span className="role">{role}</span>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Testimonials;
