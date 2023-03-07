import React from "react";
import "./aboutpage.css";

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="map">
        <img
          src={require("../../assets/images/map.png")}
          width="450px"
          alt=""
          srcset=""
        />
      </div>
      <div className="about-video">
        <iframe
          className="abt-vid"
          width="450"
          height="412"
          src="https://www.youtube.com/embed/F599PQZUyf8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default AboutPage;
