import React, { useState } from "react";
import "./navbar.css"; // You can create a separate CSS file for styling

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleToggle = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <div className="logo">Portfolio</div>
      <div className={`menu ${isMobile ? "mobile" : ""}`}>
        <ul>
          <a href="#about" onClick={handleToggle}>
            <li>About</li>
          </a>
          <a href="#techstack" onClick={handleToggle}>
            <li>TechStack</li>
          </a>
          <a href="#about" onClick={handleToggle}>
            <li>Project</li>
          </a>
          <a href="#competitive" onClick={handleToggle}>
            <li> Competitive Programming </li>
          </a>
          <a href="#articles" onClick={handleToggle}>
            <li> Articles </li>
          </a>
        </ul>
      </div>
      <div className="hamburger" onClick={handleToggle}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
};

export default Navbar;
