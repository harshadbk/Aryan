// import React from "react";
import "./row4ele.css";
import CountUp from "react-countup";
import Coffee from "../../assets/coffee-cup.png";
import People from "../../assets/people.png";
import Woman from "../../assets/business-woman.png";
import Project from "../../assets/briefing.png";

const Row4Elements = () => {
  return (
    <div className="row" data-aos="fade-up">
      {/* Header for the section */}
      <div className="header">
        <h1>Our Success From Customers</h1>
      </div>

      <div className="row-item" data-aos="fade-up">
        <div className="row-icon">
          <img src={Project} alt="Image" />
        </div>
        <div className="row-col">
				<span className="row-no mobile-inline">50</span>
				<span className="row-plus mobile-inline">+</span>
          <p>Successful Projects</p>
        </div>
      </div>
      <div className="row-item" data-aos="fade-up">
        <div className="row-icon">
          <img src={Woman} alt="Image" />
        </div>
        <div className="row-col">
          <span className="row-no mobile-inline">30</span>
          <span className="row-plus mobile-inline">+</span>
          <p>Software Development Experts</p>
        </div>
      </div>
      <div className="row-item" data-aos="fade-up">
        <div className="row-icon">
          <img src={Coffee} alt="Image" />
        </div>
        <div className="row-col">
				<span className="row-no mobile-inline">50</span>
				<span className="row-plus mobile-inline">+</span>
          <p>Loyal Customers</p>
        </div>
      </div>
      <div className="row-item" data-aos="fade-up">
        <div className="row-icon">
          <img src={People} alt="Image" />
        </div>
        <div className="row-col">
          
          <p>Success Guarantees</p>
        </div>
      </div>
    </div>
  );
};

export default Row4Elements;
