// import React from "react";
import "./cybersecurity.css";

import { FaStar } from "react-icons/fa6";
import CountUp from "react-countup";
import TopLeft from "../../assets/top-left.png";
import TopRight from "../../assets/top-right.png";
import DownRed from "../../assets/down-red.png";

const CyberSecuritySImplify = () => {
  return (
    <div className="cyber-container">
      <div className="cyber-left">
        <div className="cyber-left-container">
          <div className="left-up">
            <img src={TopLeft} alt="Company" />
          </div>
          <div className="left-down-img">
            <img src={DownRed} alt="Hacker" srcSet="" />
          </div>
        </div>
        <div className="left-right">
          <img src={TopRight} alt="Company" />
        </div>
      </div>
      <div className="cyber-right">
        <div className="head">Know Our Company</div>
        <h3>Cyber Security Simplified</h3>
        <p className="txt">
          PwnPilot Networks is your trusted partner for simplified cybersecurity
          solutions. With a focus on clarity and effectiveness, we streamline
          complex security measures to protect your digital assets. Our team of
          experts offers comprehensive services, from risk assessments to
          incident response, ensuring your organization stays resilient in the
          face of evolving threats. At PwnPilot, we prioritize simplicity
          without compromising on security, empowering you to navigate the
          digital landscape with confidence and peace of mind.
        </p>

        <div className="btns">
          <div className="cyber-btn">Successful Project</div>
          <div className="cyber-btn">Satisfied Customers</div>
        </div>

        <div className="detail">
          <div className="det">
            <div className="info">
              <p className="per">
                <CountUp
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                  start={0}
                  end={99}
                  duration={1}
                  className="count-no"
                />
                %
              </p>
              <p>
                Boost your cybersecurity success with our established history of
                delivering top-tier projects.
              </p>
              <p className="star-icons">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </p>
            </div>
          </div>
          <div className="det">
            <div className="info">
              <p className="per">
                <CountUp
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                  start={0}
                  end={100}
                  duration={1}
                  className="count-no"
                />
                %
              </p>
              <p>
                Our satisfied customers stand as a testament to our commitment
                to fortifying cybersecurity.
              </p>
              <p className="star-icons">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CyberSecuritySImplify;
