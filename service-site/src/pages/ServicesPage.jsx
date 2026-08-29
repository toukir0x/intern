// import React from "react";
import { useMemo, useState } from "react";
import ServiceCard from "../components/ServiceCard";
import SearchFilter from "../components/SearchFilter";
import CTA from "../components/CTA";
import { categories, services } from "../data/services";
export default function ServicesPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return services.filter(
      (s) =>
        (category === "All" || s.category === category) &&
        `${s.title} ${s.category} ${s.shortDescription}`
          .toLowerCase()
          .includes(q),
    );
  }, [search, category]);
  return (
    <>
      <section className="hero">
        <div className="container">
          <p className="eyebrow">OUR SERVICES</p>
          <h1>
            Digital services built for <span>business growth.</span>
          </h1>
          <p className="hero-copy">
            Explore our services, filter what you need and open any service for
            its complete details.
          </p>
        </div>
      </section>
      <section className="services-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">EXPLORE</p>
              <h2>Find the right service</h2>
            </div>
            <p>
              {filtered.length} service{filtered.length !== 1 ? "s" : ""} found
            </p>
          </div>
          <SearchFilter
            {...{ search, setSearch, category, setCategory, categories }}
          />
          {filtered.length ? (
            <div className="service-grid">
              {filtered.map((s) => (
                <ServiceCard service={s} key={s.id} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <h3>No services found</h3>
              <p>Try another keyword or select a different category.</p>
              <button
                className="btn btn-primary"
                onClick={() => {
                  setSearch("");
                  setCategory("All");
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
      <div className="container">
        <CTA />
      </div>
    </>
  );
}
