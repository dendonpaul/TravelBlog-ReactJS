import React from "react";
import { NavLink } from "react-router-dom";
import "../../App.css";
import "./header.css";

const Header = () => {
  return (
    <div className="navbar">
      <NavLink className="logo">TravelBlog</NavLink>

      <ul>
        <li>
          <NavLink to="index.html">Home</NavLink>
        </li>
        <li>
          <NavLink to="services.html">Services</NavLink>
        </li>
        <li>
          <NavLink to="places.html">Places</NavLink>
        </li>
        <li>
          <NavLink to="about.html">About</NavLink>
        </li>
        <li>
          <NavLink to="contact.html">Contact</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
