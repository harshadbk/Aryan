import React from "react";
import "./services-prov.css";
import { Link } from "react-router-dom";

const ServicesProvided = ({ title, data }) => {
  return (
    <div className="ser-pro-container" data-aos="fade-up">
      <h1 className="ser-title">{title}</h1>

      <div className="ser-grid" data-aos="fade-up">
        {data.map((da) => {
          return (
            <Link to={da.link} className="ser-card" data-aos="fade-up">
              <img src={da.img} className="ser-img" alt="Image" srcSet="" />
              <h4 className="ser-name">{da.name}</h4>
              <p className="ser-rev">{da.review}</p>

              <button className="ser-btn">Know More</button>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesProvided;
