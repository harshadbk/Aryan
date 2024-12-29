// import React from "react";
import { Link } from "react-router-dom";
import "./cybersecurity.css";
import { FaStar } from "react-icons/fa6";
import CountUp from "react-countup";
import TopLeft from "../../assets/top-left2.jpg";
import TopRight from "../../assets/top-right3.jpg";
import DownRed from "../../assets/down-red2.jpg";

const CyberSecuritySImplify = () => {
  return (
    <div className="cyber-container">
      <div className="cyber-left">
        <div className="cyber-left-container">
          <div className="left-up">
            <img className="animated-img" src={TopLeft} alt="Company" />
          </div>
          <div className="left-down-img">
            <img className="animated-img" src={TopRight} alt="Hacker" />
          </div>
					<div className="left-right">
            <img className="animated-img" src={DownRed} alt="Company" />
          </div>
        </div>
      </div>
      <div className="cyber-right">
        <div className="head">Know Our Company</div>
        <h3 className="animated-text">Web-Development Simplified</h3>
        <p className="txt fade-in">
          Devion-X is your trusted partner for simplified software development solutions, committed to delivering innovative, high-quality products that empower your business. At Devion-X, we believe that software development should not be complex or overwhelming. With a strong focus on simplicity, our team of experienced developers and designers work closely with you to create intuitive, user-friendly applications tailored to your unique needs.
        </p>
        <p className="txt fade-in">
          At Devion-X, we prioritize building long-term relationships with our clients, offering ongoing support and maintenance to ensure that your systems continue to evolve with the ever-changing digital landscape. From small startups to large enterprises, we are dedicated to helping businesses navigate the complexities of technology and achieve their strategic objectives.
        </p>
        
        <div className="btns">
          <Link to="/portfolio">
            <div className="cyber-btn btn-animation">Successful Projects</div>
          </Link>

          <Link to="/testimonials">
            <div className="cyber-btn btn-animation">Satisfied Customers</div>
          </Link>
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
                Boost your web development success with our proven track record of delivering exceptional digital solutions.
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
                Our satisfied clients are a testament to our dedication to crafting impactful and innovative web experiences.
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
