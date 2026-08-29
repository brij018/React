import React from "react";
import { Link } from "react-router-dom";
import "./Pages.css";

const Home = () => {
  return (
    <div className="page-container home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <span className="badge">Simple & Thoughtful Routing</span>
          <h1 className="hero-title">
            Navigating the Web with <br /> Minimalist Design
          </h1>
          <p className="hero-description">
            A clean multi-page React application designed for clarity, performance, and effortless user experience across all devices.
          </p>
          <div className="hero-buttons">
            <Link to="/services" className="btn btn-primary">
              Explore Services &rarr;
            </Link>
            <Link to="/about" className="btn btn-secondary">
              Read Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="features-section">
        <div className="section-header">
          <h2>Core Highlights</h2>
          <p>Thoughtfully crafted details built for real human interaction</p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <span className="feature-number">01</span>
            <h3>Instant Transitions</h3>
            <p>Seamless client-side routing that switches views fluidly without reloading.</p>
          </div>
          <div className="feature-card">
            <span className="feature-number">02</span>
            <h3>Responsive Layout</h3>
            <p>Designed with warm, natural proportions that adapt to desktop and mobile screens.</p>
          </div>
          <div className="feature-card">
            <span className="feature-number">03</span>
            <h3>Clean Typography</h3>
            <p>Readable serif-inspired structure and generous spacing for comfortable reading.</p>
          </div>
          <div className="feature-card">
            <span className="feature-number">04</span>
            <h3>Interactive FAQs</h3>
            <p>Searchable and collapsible answers to address common queries effortlessly.</p>
          </div>
        </div>
      </section>

      {/* Quick Call-to-Action */}
      <section className="cta-banner">
        <div className="cta-content">
          <h2>Ready to explore further?</h2>
          <p>Browse through our services or check our FAQ page for answers.</p>
          <div className="cta-actions">
            <Link to="/faqs" className="btn btn-light">
              View FAQs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
