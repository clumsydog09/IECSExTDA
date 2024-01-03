import React, { useState } from "react";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative flex justify-center items-center sticky top-0 h-32 sm:justify-between">
      <Link
        to="/"
        className="relative text-white font-bold tracking-wider title"
      >
        IECSE x TDA
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/Register" className="register button">
            Register
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="contact button">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
