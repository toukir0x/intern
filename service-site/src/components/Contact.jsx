import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("Thanks! Your message has been received. Connect a backend/API here to send it.");
    e.currentTarget.reset();
  }

  return (
    <section id="contact" className="section contact">
      <div className="container contact-grid">
        <div>
          <p className="eyebrow">LET'S WORK TOGETHER</p>
          <h2>Have an idea? <span>Let's make it happen.</span></h2>
          <p>Tell us about your project and we'll get back to you with the next steps.</p>

          <div className="contact-details">
            <p>✉ hello@nexadigital.example</p>
            <p>☎ +880 1XXX-XXXXXX</p>
            <p>⌖ Dhaka, Bangladesh</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Name<input name="name" placeholder="Your name" required /></label>
          <label>Email<input type="email" name="email" placeholder="you@example.com" required /></label>

          <label>Service
            <select name="service">
              <option>Web Development</option>
              <option>UI/UX Design</option>
              <option>Digital Marketing</option>
              <option>Brand Strategy</option>
              <option>Other</option>
            </select>
          </label>

          <label>Message
            <textarea name="message" rows="5" placeholder="Tell us about your project..." required />
          </label>

          <button className="btn btn-primary" type="submit">Send Message</button>
          <p className="form-status" role="status">{status}</p>
        </form>
      </div>
    </section>
  );
}