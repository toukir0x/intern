export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <p className="eyebrow">DIGITAL AGENCY • CREATIVE • RESULTS</p>
          <h1>We build digital experiences that <span>grow businesses.</span></h1>
          <p className="hero-text">
            From strategy and branding to websites and digital marketing,
            we help ambitious brands turn ideas into measurable results.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">Start a Project</a>
            <a href="#portfolio" className="btn btn-secondary">View Our Work</a>
          </div>

          <div className="stats">
            <div><strong>50+</strong><small>Projects</small></div>
            <div><strong>30+</strong><small>Happy Clients</small></div>
            <div><strong>4.9/5</strong><small>Client Rating</small></div>
          </div>
        </div>

        
      </div>
    </section>
  );
}