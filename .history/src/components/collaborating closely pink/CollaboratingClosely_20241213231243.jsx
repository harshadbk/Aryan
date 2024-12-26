// import React from "react";
import "./collaborating.css";
import Checkmark from "../../assets/checkmarx-logo-2.webp";
import IBM from "../../assets/ibm-logo.png";
import Micro from "../../assets/micro-foc.png";
import IzoLogic from "../../assets/izoologic_logo.png";

const CollaboratingClosely = () => {
  return (
    <div className="collab-container" data-aos="fade-up">
      <div className="collab-parent">
        <div data-aos="fade-up">WEB-DEVELOPMENT SOLUTION PARTNERS</div>
        <div className="collab-head" data-aos="fade-up">
          <p className="collab-head-left">
            Collaborating Closely on Cutting-Edge
          </p>
          <p className="collab-head-right">w Solutions</p>
        </div>

        <div className="collab-card" data-aos="fade-right">
          <div className="card">
            <img src={Checkmark} alt="Checkmark" />
          </div>
          <div className="card">
            <img src={IBM} alt="Checkmark" />
          </div>
          <div className="card">
            <img src={Micro} alt="Checkmark" />
          </div>
          <div className="card">
            <img src={IzoLogic} alt="Checkmark" />
          </div>
          <div className="card">
            <img src={IBM} alt="Checkmark" />
          </div>
          <div className="card">
            <img src={Checkmark} alt="Checkmark" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollaboratingClosely;
