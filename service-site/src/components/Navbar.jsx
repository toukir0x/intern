import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="#home" className="logo" onClick={closeMenu}>Nexa<span>Digital</span></a>

        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#services" onClick={closeMenu}>Services</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#portfolio" onClick={closeMenu}>Portfolio</a></li>
          <li><a href="#contact" className="nav-cta" onClick={closeMenu}>Let's Talk</a></li>
        </ul>
      </nav>
    </header>
  );
}