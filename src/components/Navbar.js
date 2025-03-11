import React, { useState } from 'react';
import '../styles/Navbar.css';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo on the Left */}
      <div className="navbar-logo">
        <img src="/Logo-1.jpg" alt="Granite Store Logo" className="logo" />
      </div>

      {/* Navigation Links (Center on Large Screens, Hidden on Small Screens) */}
      <ul className={`navbar-links ${menuOpen ? "show" : ""}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#about">About</a></li>
      </ul>

      {/* Contact Us Button (Right-Aligned) */}
      <button className="contact-button">
        Contact Us <span className="arrow">→</span>
      </button>

      {/* Menu Icon (Only on Small Screens) */}
      <div className="menu-icon" onClick={() => setMenuOpen(true)}>
        ☰
      </div>

      {/* Mobile Menu (Only Visible When Open) */}
      {menuOpen && (
        <div className="mobile-menu">
          <span className="close-icon" onClick={() => setMenuOpen(false)}>×</span>
          <ul>
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#products" onClick={() => setMenuOpen(false)}>Products</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
