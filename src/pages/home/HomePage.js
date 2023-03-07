import React from "react";
import { NavLink } from "react-router-dom";
import "./homepage.css";

const HomePage = () => {
  return (
    <div class="showcase-content">
      <h1> Photography | Videography </h1>
      <p>Traveling to different places </p>

      <div>
        <NavLink to="#" className="btn">
          Watch More
        </NavLink>
        <NavLink to="#" className="btn">
          Subscribe
        </NavLink>
      </div>
    </div>
  );
};

export default HomePage;
