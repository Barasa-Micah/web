import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import engineer from '../assets/engineer.jpg'
import './LandingPage.css'

const Landing = () => {
  const [showWelcome, setShowWelcome] = useState(false);

  // Adding a simple animation when the component mounts
  useEffect(() => {
    setTimeout(() => {
      setShowWelcome(true);
    }, 500);
  }, []);

  return (
    <div className="landing-container">
      <nav className="navbar">
        <Link to="/" className="nav-logo">
          Micah Barasa
        </Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/services" className="nav-link">
            My Services
          </Link>
          <Link to="/hire" className="nav-link">
            Hire Me
          </Link>
        </div>
      </nav>
      <div className="landing-content">
        <h1 className={`welcome-message ${showWelcome ? 'show' : ''}`}>
          Welcome to My Portfolio
        </h1>
        <p>
          Hi, I'm Micah Barasa, a passionate Fullstack Software Engineer with a love
          for building robust and scalable applications.
        </p>
        <div className="call-to-action">
          <p>Explore my work and skills below.</p>
          <div className="action-buttons">
            <Link to="/projects" className="explore-button">
              Explore Projects
            </Link>
            <Link to="/about" className="learn-more-button">
              Learn More About Me
            </Link>
          </div>
        </div>
      </div>
      <div className="profile-image">
        <img src={engineer} alt="Micah Barasa" />
      </div>
    </div>
  );
};

export default Landing;
