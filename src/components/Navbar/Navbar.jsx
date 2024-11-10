// src/components/Navbar.js

import React from "react";
import Mainpage from "../Card/Card";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">MyLogo</div>
        <ul className="navbar-menu">
          <li className="navbar-item">Home</li>
          <li className="navbar-item">About</li>
          <li className="navbar-item">Contact</li>
          <li className="navbar-item">Services</li>
          <li className="navbar-item">Portfolio</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
