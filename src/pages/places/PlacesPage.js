import React from "react";
import "./placespage.css";

const PlacesPage = () => {
  return (
    <div class="places-container">
      <div class="card">
        <img src={require("../../assets/images/tajmahal.jpg")} />
        <h2>Taj Mahal</h2>
      </div>
      <div class="card">
        <img src={require("../../assets/images/goldenTemple.jpg")} />
        <h2>Golden Temple</h2>
      </div>
    </div>
  );
};

export default PlacesPage;
