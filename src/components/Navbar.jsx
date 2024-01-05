import React, { useState } from "react";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { useEffect } from "react";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
            to="/contact"
            className="button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            Contact
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
            to="/partners"
            className="button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            Partners
          </NavLink>
        </li>
        {/* <li>
          <img
            src="https://devfolio.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F055de5cb-e9de-43cf-a87e-c2c43bd5a671%2F_Dark.png?table=block&id=001376d2-c0f1-4312-971e-a6d3588181a2&spaceId=5bc094c8-987c-4274-938f-8a9d3fad1a04&width=870&userId=&cache=v2"
            alt="DEVFOLIO LOGO"
            srcset=""
            className="h-[2.6rem] mr-2 mb-2"
          />
        </li> */}

      </ul>
    </nav>
  );
};

// .button {
//     padding: 0.3rem 1rem;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     border: 2px solid #ffffffd5;
//     border-radius: 6px;
//     font-size: 2rem;
//     height: 2.5rem;
// }
