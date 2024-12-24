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
          Specialized Cyber Security Solutions Offered
        </p>
      </div>
      <div className="solution-right" data-aos="fade-up">
        <div className="solution-txt">
          Our specialized cyber security solutions are crafted to tackle the
          distinct challenges businesses encounter in securing their digital
          assets. From thorough risk assessments to proactive threat detection
          and incident response, we offer a range of services covering network
          security, endpoint protection, cloud security, and data privacy. With
          a focus on innovation and compliance, we deliver cutting-edge
          solutions that align with industry standards, ensuring robust
          protection for our clients' critical infrastructure and sensitive
          data.
        </div>
        <Link to={"/services"}>
          <MyCustomButton name={"View All Services"} />
        </Link>
      </div>
    </div>
  );
};

export default SolutionOffer;
