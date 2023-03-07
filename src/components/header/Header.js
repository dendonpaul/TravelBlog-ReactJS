import React from "react";
import { NavLink } from "react-router-dom";
import "../../App.css";
import "./header.css";

const Header = () => {
  return (
    <div className="navbar">
      <NavLink className="logo">Travel Blog</NavLink>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/places">Places</NavLink>
        </li>
        <li>
          <NavLink to="/about">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
