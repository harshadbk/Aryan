// import React from "react";
import "./trustedcyber.css";
import backgroundImage from "../../assets/planning-success-bg.png"; // Update the path accordingly
import MyCustomButton from "../button/CommonButton";
import { Link } from "react-router-dom";

const TrustedCyber = () => {
  return (
    <div
      className="trusted-container"
      data-aos="fade-up"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="overlay">
        <div className="trusted-content" data-aos="fade-up">
          <div className="trusted-left">
            <p className="trusted-head">
              Trusted IT development <br /> experts delivering <br /> robust solutions.
            </p>
            <p className="trusted-txt">
            Empower your business with cutting-edge IT solutions. Our skilled team specializes in creating robust, scalable, and tailor-made technology services designed to streamline your operations and drive innovation. From concept to deployment, we ensure seamless functionality and unmatched performance, keeping your business ahead in the digital era            </p>
          </div>
          <div className="trusted-right">
            <Link to={"/services"}>
              <MyCustomButton name={"View All Services"} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedCyber;
