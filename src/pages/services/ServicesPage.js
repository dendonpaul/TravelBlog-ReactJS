import React from "react";
import { NavLink } from "react-router-dom";
import "./servicespage.css";

const ServicesPage = () => {
  return (
    <div className="services-container">
      <div className="photography">
        <h2>Photography</h2>
        <p className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          eveniet maxime neque, at necessitatibus totam voluptas asperiores
          sapiente, repudiandae officia odit consequatur, non odio iusto
          suscipit sunt magnam laudantium optio! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Tempore sed rerum quod. Ratione culpa
          reiciendis odio. Deleniti, possimus quod, dolor aut distinctio
          obcaecati eveniet quis nihil minima maiores consequuntur neque.
          <NavLink className="read" href="#">
            <span>Read More...</span>
          </NavLink>
        </p>
      </div>
      <div className="video">
        <h2>Videography</h2>
        <p className="desc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
          incidunt voluptatum distinctio quo fugiat sed deserunt, architecto
          officiis aliquid minus mollitia sit obcaecati reprehenderit sapiente
          et libero quisquam numquam debitis. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Blanditiis cum quidem quasi possimus
          enim dolorem tempora eius expedita tenetur, minima odio asperiores
          maiores fugiat quos sed voluptas. Aspernatur, quo temporibus.
          <NavLink className="read" href="#">
            <span>Read More...</span>
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default ServicesPage;
