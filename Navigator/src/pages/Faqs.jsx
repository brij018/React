import React, { useState } from "react";
import "./Pages.css";

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const faqData = [
    {
      question: "How does navigation work in this application?",
      answer: "The Navbar uses React Router DOM's `NavLink` component to trigger client-side navigation without refreshing the browser. The active link highlights automatically based on the current URL path."
    },
    {
      question: "Is this navigation compatible with mobile screens?",
      answer: "Yes. The Navbar features a minimal responsive drawer toggle menu that adapts seamlessly on screens smaller than 768px wide."
    },
    {
      question: "What pages are available in this Navigator project?",
      answer: "This project features 4 primary pages: Home (overview), Services (our offerings), About (background & principles), and FAQs (frequently asked questions)."
    },
    {
      question: "Does switching pages trigger a browser reload?",
      answer: "No, client-side routing handles view transitions dynamically, making page switches instant and lightweight."
    },
    {
      question: "How can I add new pages to this navigator?",
      answer: "Create a new page component in the `pages` folder, register a new `<Route>` entry in `App.jsx`, and add a `<NavLink>` item to `Navbar.jsx`."
    },
    {
      question: "What tech stack powers this project?",
      answer: "It is built with React 19, Vite, clean CSS styling with warm minimalist aesthetics, modular components, and React Router DOM."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = faqData.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="page-container faqs-page">
      <header className="page-header">
        <span className="badge">Questions & Answers</span>
        <h1>Frequently Asked Questions</h1>
        <p>Find clear answers regarding our minimalist navigation structure and features.</p>
      </header>

      {/* Search Input */}
      <div className="faq-search-box">
        <svg className="search-icon-svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          placeholder="Search questions or keywords..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="faq-search-input"
        />
        {searchTerm && (
          <button className="clear-search" onClick={() => setSearchTerm("")} aria-label="Clear search">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        )}
      </div>

      {/* FAQ Accordion List */}
      <div className="faq-accordion-list">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`faq-item ${isOpen ? "open" : ""}`}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-q-text">{faq.question}</span>
                  <span className="faq-toggle-icon">
                    <svg className={`chevron ${isOpen ? "open" : ""}`} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="no-faqs">
            <p>No questions matching "{searchTerm}". Try a different keyword.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Faqs;
