import React from "react";
import { Link, useParams } from "react-router-dom";
import { getServiceBySlug } from "../data/services";
export default function ServiceDetails() {
  const { slug } = useParams();
  const s = getServiceBySlug(slug);
  if (!s)
    return (
      <section className="not-found container">
        <h1>Service not found</h1>
        <Link className="btn btn-primary" to="/services">
          Back to Services
        </Link>
      </section>
    );
  return (
    <section className="details-section">
      <div className="container details-grid">
        <div>
          <Link to="/services" className="back-link">
            ← All Services
          </Link>
          <div className="large-icon">{s.icon}</div>
          <span className="category">{s.category}</span>
          <h1>{s.title}</h1>
          <p className="details-description">{s.description}</p>
          <div className="details-actions">
            <a href="#contact" className="btn btn-primary">
              Get Started →
            </a>
            <a
              href="mailto:hello@nexaservices.example"
              className="btn btn-secondary"
            >
              Ask a Question
            </a>
          </div>
        </div>
        <aside className="details-card">
          <span className="popular-label">
            {s.popular ? "POPULAR SERVICE" : "SERVICE PACKAGE"}
          </span>
          <h2>{s.price}</h2>
          <h3>What's included</h3>
          <ul>
            {s.features.map((f) => (
              <li key={f}>✓ {f}</li>
            ))}
          </ul>
        </aside>
      </div>
      <div className="container">
        <div className="mini-cta" id="contact">
          <div>
            <p className="eyebrow">LET'S TALK</p>
            <h2>Need {s.title}?</h2>
            <p>
              Contact our team to discuss your requirements and receive a custom
              proposal.
            </p>
          </div>
          <a
            className="btn btn-primary"
            href="mailto:hello@nexaservices.example"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  );
}
