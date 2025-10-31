import "./team.css";

const Team = () => {
  const teamData = [
    {
    name: "Sumanshi S. Shende",
    role: "Backend Developer",
    description: "Skilled in Node.js and database management.",
    image: "/team/sumanshi.jpg",
  },
  {
    name: "Mansi N. Potwar",
    role: "Full Stack Developer",
    description: "Expert in UI/UX design Loves bridging frontend and backend seamlessly.",
    image: "/team/mansi.jpg",
  },
  {
    name: "Nikita P. Mandle",
    role: "Frontend Developer",
    description: "Expert in React.",
    image: "/team/nikita.jpg",
  },
  {
    name: "Vaishnavi R. Dhatrak",
    role: "Project Manager",
    description: "Keeps the team aligned and projects on track.",
    image: "/team/vaishnavi.jpg",
  },
];

return (
    <section className="team-section">
      <h2>Meet the Developers</h2>
      <div className="team-cards">
        {teamData.map((member, index) => (
          <div key={index} className="team-card">
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;