import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../styles/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">JobPortal</Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
      </div>

      {/* Navigation Links */}
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/jobs" onClick={() => setIsOpen(false)}>Jobs</Link></li>
        <li><Link to="/dashboard" onClick={() => setIsOpen(false)}>Dashboard</Link></li>
        <li><Link to="/post-job" onClick={() => setIsOpen(false)}>Post Job</Link></li>
        <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

