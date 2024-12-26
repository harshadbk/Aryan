import React from "react";
import "./assesments.css";

import { ReactSVG } from "react-svg";

import G from "../../assets/growth.svg";
import Inter from "../../assets/international.svg";
import Threat from "../../assets/threat-detection.png";

const Assesments = () => {
  return (
    <div className="container2" data-aos="fade-up">
      <div className="box" data-aos="fade-up">
        <div className="icon">
          <ReactSVG src={G} className="ico" />
        </div>
        <div className="txt">
          <p className="head">Code Review and Optimization</p>
          <p>
            We evaluate an applications code quality, identifying potential bugs, security vulnerabilities, and performance bottlenecks in its source code.
          </p>
        </div>
      </div>
      <div className="box" data-aos="fade-up">
        <div className="icon">
          <img src={Threat} className="ico" />
        </div>
        <div className="txt">
          <p className="head">Performance Monitoring</p>
          <p>
            We provide expert guidance on implementing efficient web performance strategies, optimizing load times, and enhancing user experience.
          </p>
        </div>
      </div>
      <div className="box" data-aos="fade-up">
        <div className="icon">
          <ReactSVG src={Inter} className="ico" />
        </div>
        <div className="txt">
          <p className="head">Compliance and Accessibility Auditing</p>
          <p>
            We assess an organization's website or application for adherence to regulatory requirements, web standards, and accessibility guidelines to ensure inclusivity and legal compliance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Assesments;
