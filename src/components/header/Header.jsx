import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = ({ isAuth }) => {
  const [darkMode, setDarkMode] = useState(() => {
    // Load saved mode or system preference
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) return JSON.parse(saved);
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <header className="glass-header">
      <div className="logo">LearnPro</div>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/about">About</Link>
        {isAuth ? (
          <Link to="/account">Account</Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
        <button
          aria-label="Toggle light/dark mode"
          onClick={() => setDarkMode((prev) => !prev)}
          className="toggle-btn"
          title="Toggle Light/Dark Mode"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </nav>
    </header>
  );
};

export default Header;
