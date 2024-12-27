import React from "react";
import "./solution.css";
import MyCustomButton from "../button/CommonButton";
import { Link } from "react-router-dom";

const SolutionOffer = () => {
  return (
    <div className="solution-container" data-aos="fade-up">
      <div className="solution-left" data-aos="fade-up">
        <p className="solution-title">Advanced Services</p>
        <p className="solution-head">
          Specialized IT Development Solutions Offered
        </p>
      </div>
      <div className="solution-right" data-aos="fade-up">
        <div className="solution-txt">
        Our specialized IT solutions are designed to address the unique needs businesses face in creating and maintaining dynamic digital experiences. From custom software applications to responsive design, performance optimization, and seamless user interfaces, we offer a wide range of services, including front-end and back-end development, API integration, and progressive web apps (PWAs). Focused on innovation and industry best practices, we deliver cutting-edge IT solutions that ensure scalability, security, and top-notch user experiences for our clients' digital platforms        </div>
        <Link to={"/services"}>
          <MyCustomButton name={"View All Services"} />
        </Link>
      </div>
    </div>
  );
};

export default SolutionOffer;
