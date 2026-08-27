// const projects = [
//   ["E-COMMERCE", "Urban Store", "Conversion-focused online shop", "project-a"],
//   ["FINTECH", "Nova Finance", "Modern financial dashboard", "project-b"],
//   ["HEALTHCARE", "CarePlus", "Patient-focused digital platform", "project-c"],
//   ["BRANDING", "Forma Studio", "Complete brand identity system", "project-d"]
// ];
import img1 from '../assets/images.jpeg'
import img2 from '../assets/images1.jpeg'

export default function Portfolio() {
  return (
    <section id="portfolio" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">SELECTED WORK</p>
          <h2>
            Projects that make an <span>impact.</span>
          </h2>
        </div>

        <div className="portfolio-grid">
          <article className={`project `}>
            <div className="imagee ">
              <img src={img1} style={{ height: "auto", width: "100%" }} />
            </div>
            <div>
              <small>E-COMMERCE</small>
              <h3>Urban Store</h3>
              <p>Conversion-focused online shop</p>
            </div>
          </article>
          <article className={`project `}>
            <div className="imagee ">
              <img src={img2} style={{ height: "auto", width: "100%" }} />
            </div>
            <div>
              <small>FINTECH</small>
              <h3>Nova Finance</h3>
              <p>Modern financial dashboard</p>
            </div>
          </article>
          <article className={`project `}>
            <div className="imagee ">
              <img src={img1} style={{ height: "auto", width: "100%" }} />
            </div>
            <div>
              <small>E-COMMERCE</small>
              <h3>Urban Store</h3>
              <p>Conversion-focused online shop</p>
            </div>
          </article>
          <article className={`project `}>
            <div className="imagee ">
              <img src={img2} style={{ height: "auto", width: "100%" }} />
            </div>
            <div>
              <small>E-COMMERCE</small>
              <h3>Urban Store</h3>
              <p>Conversion-focused online shop</p>
            </div>
          </article>
          <article className={`project `}>
            <div className="imagee ">
              <img src={img1} style={{ height: "auto", width: "100%" }} />
            </div>
            <div>
              <small>E-COMMERCE</small>
              <h3>Urban Store</h3>
              <p>Conversion-focused online shop</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}