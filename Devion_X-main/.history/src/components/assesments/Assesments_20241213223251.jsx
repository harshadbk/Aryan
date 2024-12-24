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
          <p className="head">Security Assesments</p>
          <p>
            We evaluate an organization's security posture by identifying
            vulnerabilities and potential threats in its infrastructure,
            policies, and procedures.
          </p>
        </div>
      </div>
      <div className="box" data-aos="fade-up">
        <div className="icon">
          <img src={Threat} className="ico" />
        </div>
        <div className="txt">
          <p className="head">Threat Monitoring</p>
          <p>
            We provide expert guidance on implementing effective security
            measures to mitigate risks and protect assets from cyber threats.
          </p>
        </div>
      </div>
      <div className="box" data-aos="fade-up">
        <div className="icon">
          <ReactSVG src={Inter} className="ico" />
        </div>
        <div className="txt">
          <p className="head">SOC Service</p>
          <p>
					SOC Service
          </p>
        </div>
      </div>
    </div>
  );
};

export default Assesments;
