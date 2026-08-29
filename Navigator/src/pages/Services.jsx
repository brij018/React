import React from "react";
import { Link } from "react-router-dom";
import "./Pages.css";

const Services = () => {
  const servicesList = [
    {
      id: "01",
      title: "Web Navigation Systems",
      description: "Custom single-page and multi-page routing solutions built for ultra-fast, seamless user experiences.",
      tags: ["React Router", "SPA", "UX Design"]
    },
    {
      id: "02",
      title: "UI/UX Interface Design",
      description: "Crafting beautiful, accessible, and intuitive front-end layouts tuned for clear human interaction.",
      tags: ["Responsive", "Figma", "CSS3"]
    },
    {
      id: "03",
      title: "Performance Optimization",
      description: "Optimizing web application bundle size, asset loading, and rendering speeds for desktop & mobile.",
      tags: ["Vite", "Code Splitting", "SEO"]
    },
    {
      id: "04",
      title: "Component Architecture",
      description: "Designing modular, reusable React component systems that make maintenance and expansion simple.",
      tags: ["React 19", "Clean Code", "Modules"]
    },
    {
      id: "05",
      title: "Route Guarding & Security",
      description: "Implementing state protection, authenticated route redirects, and user session handling.",
      tags: ["Auth", "Security", "State"]
    },
    {
      id: "06",
      title: "Analytics & Insights",
      description: "Tracking user navigation paths and page interaction metrics to continuously improve site flow.",
      tags: ["Metrics", "User Flow", "Optimization"]
    }
  ];

  return (
    <div className="page-container services-page">
      <header className="page-header">
        <span className="badge">Services & Capabilities</span>
        <h1>What We Craft</h1>
        <p>Focused engineering and design capabilities to guide your digital products forward.</p>
      </header>

      <div className="services-grid">
        {servicesList.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-header">
              <span className="service-code">{service.id}</span>
              <h3>{service.title}</h3>
            </div>
            <p className="service-desc">{service.description}</p>
            <div className="service-tags">
              {service.tags.map((tag, idx) => (
                <span key={idx} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="services-cta">
        <h3>Questions about custom requirements?</h3>
        <p>Head over to our FAQ section or read more about our background.</p>
        <div className="services-cta-buttons">
          <Link to="/faqs" className="btn btn-primary">Read FAQs</Link>
          <Link to="/about" className="btn btn-secondary">About Us</Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
