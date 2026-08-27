const process = [
  ["01", "Strategy"],
  ["02", "Design"],
  ["03", "Development"],
  ["04", "Growth"]
];

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about-grid">
        <div className="about-visual">
          {process.map(([number, label], i) => (
            <div className={`about-box ${i === 1 ? "active" : ""}`} key={number}>
              <strong>{number}</strong><span>{label}</span>
            </div>
          ))}
        </div>

        <div>
          <p className="eyebrow">ABOUT NEXA DIGITAL</p>
          <h2>A small team with a <span>big digital mindset.</span></h2>
          <p>We combine creative thinking, technology and business strategy to build digital products that are beautiful, useful and effective.</p>
          <p>Our workflow is simple: understand the problem, plan the solution, build carefully, test thoroughly and keep improving after launch.</p>

          <ul className="check-list">
            <li>✓ Client-first communication</li>
            <li>✓ Modern responsive development</li>
            <li>✓ Transparent project workflow</li>
            <li>✓ Scalable and reusable solutions</li>
          </ul>
        </div>
      </div>
    </section>
  );
}