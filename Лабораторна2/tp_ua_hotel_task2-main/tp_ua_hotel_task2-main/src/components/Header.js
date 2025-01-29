import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">UA Hotels</div>
        <ul className="nav-links">
          <li>
            <Link to="/">Головна</Link>
          </li>
          <li>
            <Link to="/about">Про нас</Link>
          </li>
          <li>
            <Link to="/contact">Контакти</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
