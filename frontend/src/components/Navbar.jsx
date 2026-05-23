import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo-section" onClick={closeMenu}>
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="GitHub Logo"
          />
          <h3>CodeVerse</h3>
        </Link>
      </div>

      <div className={`hamburger ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <div className={`navbar-right ${isMenuOpen ? "active" : ""}`}>
        <Link to="/create" className="nav-btn-green outline" onClick={closeMenu}>
          Create Repository
        </Link>
        <Link to="/profile" className="nav-btn-green solid" onClick={closeMenu}>
          Profile
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;



