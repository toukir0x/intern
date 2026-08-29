import { useState } from 'react';
import { services } from '../data/services'
import CTA from './CTA'

export default function Services() {
  const [Category, setCategory] = useState("All");
  const totalData = services.length;

  const filterProduct = services.filter((product) => {

    const matchCategory = Category === 'All' || product.category === Category;

    return matchCategory;
  })
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
      <section className="service">
        <div className="container">
          <div className="services-heading ">
            <div>
              <p className="eyebrow">EXPLORE</p>
              <h2>Find the right service</h2>
            </div>
            <span>{totalData} services</span>
          </div>
          <div className="service-filter">
            <div className="filter">
              <div className="search-box box">
                <span>⌕</span>
                <input type="text" placeholder="Search service" />
              </div>
              <select
                className="select-box"
                onClick={(e) => setCategory(e.target.value)}
              ><option value={'All'}>All</option>
                {services.map((service) => (
                  <option key={service.id}>{service.category}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="service-cartt">
            {filterProduct.map((e) => (
              <article className="service-cart">
                <div className="cart">
                  <div className="cart-icon">{e.icon}</div>
                  <div className="cart-header">
                    <span>{e.category}</span>
                    <span>{e.popular}</span>
                  </div>
                  <h3>{e.title}</h3>
                  <p>{e.description}</p>
                </div>
                <div className="cart-footer">
                  <span> {e.price}</span>
                  <span>
                    <a href="#">View Details</a>
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTA/>
    </>
    // <section id="services" className="section">
    //   <div className="container">
    //     <div className="section-heading">
    //       <p className="eyebrow">WHAT WE DO</p>
    //       <h2>
    //         Services designed for <span>real growth.</span>
    //       </h2>
    //       <p>
    //         Flexible digital solutions you can reuse and scale for different
    //         client projects.
    //       </p>
    //     </div>

    //     <div className="service-grid">
    //       <article className="service-card">
    //         <div className="icon">✦</div>
    //         <h3>Web Development</h3>
    //         <p>
    //           Responsive, fast and conversion-focused websites built with modern
    //           technologies.
    //         </p>
    //         <a href="#contact">Learn more →</a>
    //       </article>
    //       <article className="service-card">
    //         <div className="icon">✦</div>
    //         <h3>UI/UX Design</h3>
    //         <p>
    //           Clean interfaces and thoughtful user journeys that make digital
    //           products easier to use.
    //         </p>
    //         <a href="#contact">Learn more →</a>
    //       </article>
    //       <article className="service-card">
    //         <div className="icon">✦</div>
    //         <h3>Digital Marketing</h3>
    //         <p>
    //           Campaigns, content and performance strategies that help brands
    //           reach the right audience.
    //         </p>
    //         <a href="#contact">Learn more →</a>
    //       </article>
    //       <article className="service-card">
    //         <div className="icon">✦</div>
    //         <h3>Web Development</h3>
    //         <p>
    //           Responsive, fast and conversion-focused websites built with modern
    //           technologies.
    //         </p>
    //         <a href="#contact">Learn more →</a>
    //       </article>
    //       <article className="service-card">
    //         <div className="icon">✦</div>
    //         <h3>Web Development</h3>
    //         <p>
    //           Responsive, fast and conversion-focused websites built with modern
    //           technologies.
    //         </p>
    //         <a href="#contact">Learn more →</a>
    //       </article>
    //     </div>
    //   </div>
    // </section>
  );
}