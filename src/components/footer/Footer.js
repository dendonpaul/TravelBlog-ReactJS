import React from "react";
import { NavLink } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <div class="social">
      <ul>
        <li>
          <NavLink to="#">
            <i class="fa fa-facebook"></i>
          </NavLink>
        </li>
        <li>
          <NavLink to="#">
            <i class="fa fa-twitter"></i>
          </NavLink>
        </li>
        <li>
          <NavLink to="#">
            <i class="fa fa-instagram"></i>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
