import React from "react";
import { Link } from "react-router-dom";
import "./Pages.css";

const About = () => {
  return (
    <div className="page-container about-page">
      <header className="page-header">
        <span className="badge">Background & Philosophy</span>
        <h1>About Navigator</h1>
        <p>Empowering developers and users with intuitive, minimal web navigation structures.</p>
      </header>

      <section className="about-grid">
        <div className="about-text-card">
          <h2>Our Purpose</h2>
          <p>
            At Navigator, our focus is on refining web interaction down to its essentials. We craft responsive, single-page routing structures that transition seamlessly, preserving application state and giving users complete control.
          </p>
        </div>

        <div className="about-text-card">
          <h2>Our Vision</h2>
          <p>
            We envision digital experiences built with restraint—where typography, spacing, and subtle interactions replace noisy embellishments. Simple routing makes complex platforms feel accessible and light.
          </p>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="stats-section">
        <div className="stat-card">
          <span className="stat-number">99.9%</span>
          <span className="stat-label">System Uptime</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">&lt; 50ms</span>
          <span className="stat-label">Route Transition</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">100%</span>
          <span className="stat-label">Responsive Fluidity</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">4</span>
          <span className="stat-label">Core Pages</span>
        </div>
      </section>

      {/* Core Values */}
      <section className="values-section">
        <h2>Core Principles</h2>
        <div className="values-grid">
          <div className="value-item">
            <span className="value-index">01</span>
            <h4>Responsiveness</h4>
            <p>Page switches happen instantaneously without blocking UI threads or reloads.</p>
          </div>
          <div className="value-item">
            <span className="value-index">02</span>
            <h4>Clarity & Intent</h4>
            <p>Layouts and navigation menus are clear, uncluttered, and predictable.</p>
          </div>
          <div className="value-item">
            <span className="value-index">03</span>
            <h4>Human Design</h4>
            <p>Warm subtle tones and high contrast typography crafted for easy reading.</p>
          </div>
        </div>
      </section>

      <div className="about-cta">
        <p>Want to see our full list of offerings?</p>
        <Link to="/services" className="btn btn-primary">Discover Services</Link>
      </div>
    </div>
  );
};

export default About;
