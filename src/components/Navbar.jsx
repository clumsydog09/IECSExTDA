import React, { useState } from "react";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-center items-center sticky top-0 h-32 sm:justify-between relative">
      <Link to="/" className="m-4 text-6xl font-bold tracking-wider title">
        IECSE
        <span className="bg-gradient-to-t from-red-900 to-red-500 text-transparent bg-clip-text">
          {" "}
          x{" "}
        </span>
        TDA
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink
            to="/"
            className="button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Register"
            className="button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            Register
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className="button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
