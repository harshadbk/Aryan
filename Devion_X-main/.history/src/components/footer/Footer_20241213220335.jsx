import React from "react";
import "./Footer.css";
import MyCustomButton from "../button/CommonButton";
import Coders from "../../assets/coders.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <p className="top-txt">
          Schedule A Consultation And Take <br />
          Proactive Steps To Protect Your
          <br />
          Digital Assets.
        </p>
        <Link to={"/lets-work-tog"}>
          <MyCustomButton name={"Lets Work Together"} backgroundColor="black" />
        </Link>
      </div>
      <div className="divider"></div>
      <div className="footer-container">
        <div className="footer-first">
          <div className="footer-first-left">
            <p className="txt">
              We excel in information security, delivering expert services,
              deploying solutions, and providing training. Our dedicated team
              // eslint-disable-next-line react/no-unescaped-entities
              evaluates your IT infrastructure's well-being, addresses high-risk
              areas, and protects your vital data from exploitation.
            </p>
          </div>
          <div className="footer-first-right">
            <div className="right-item">
              <p className="footer-title">Our Mission</p>
              <p className="footer-txt">
                To provide quality information security services and build great
                work environment
              </p>
            </div>
            <div className="right-item">
              <p className="footer-title">Our Vision</p>
              <p className="footer-txt">
                To be synonm of Cyber Security Services
              </p>
            </div>
          </div>
        </div>
        <div className="divider"></div>

        <div className="footer-middle">
          <div className="middle-grid" data-aos="fade-up">
            <div className="footer-section" data-aos="fade-up">
              <h3>Working Time</h3>
              <div className="working-card">
                <p className="card-txt"> 10am : 10pm IST</p>
                <p className="card-txt">All 7 days</p>
                <p className="card-txt">24 Hours Monitoring</p>
              </div>
            </div>
            <div className="footer-section" data-aos="fade-up">
              <h3>Our Services</h3>
              <ul>
                <Link to={"/net-pen-test"}>
                  <li>Network Penetration Testing</li>
                </Link>
                <Link to={"/web-app-sec"}>
                  <li>Web Application Security Testing</li>
                </Link>
                <Link to={"/mob-app-pen"}>
                  <li>Mobile Application Penetration Testing</li>
                </Link>
                <Link to={"/api-sec"}>
                  <li>API Security Testing</li>
                </Link>
                <Link to={"/wire-pen-test"}>
                  <li>Wifiless Penetration Testing</li>
                </Link>
                <Link to={"/ot-iot"}>
                  <li>OT And IOT Penetration Testing</li>
                </Link>
                <Link to={"/cloud-pen"}>
                  <li>Cloud Penetration Testing</li>
                </Link>
              </ul>
            </div>
            <div className="footer-section" data-aos="fade-up">
              <h3>Advanced Services</h3>
              <ul>
                <Link to={"/red-team"}>
                  <li>Red Teaming</li>
                </Link>
                <Link to={"/blue-team"}>
                  <li>Blue Teaming</li>
                </Link>
              </ul>
            </div>

            <div className="footer-section" data-aos="fade-up">
              <h3>Industries We Serve</h3>
              <ul>
                <Link to={"/bfsi"}>
                  <li>BFSI</li>
                </Link>
                <Link to={"/manufacturing"}>
                  <li>Manufacturing</li>
                </Link>
                <Link to={"/pharmaceutical"}>
                  <li>Pharmaceutical</li>
                </Link>
                <Link to={"/technology"}>
                  <li>Technology</li>
                </Link>
                <Link to={"/government"}>
                  <li>Government</li>
                </Link>
                <Link to={"/education"}>
                  <li>Education</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="divider"></div>

        <div className="footer-lower">
          <div className="lower-grid" data-aos="fade-up">
            <div className="footer-section-lower" data-aos="fade-up">
              <h3>Official Address:</h3>
              <p>
                Mayur Vihar, New Delhi
                <br />
                Delhi, 110091
              </p>
            </div>
            <div className="footer-section-lower" data-aos="fade-up">
              <h3>Call Us Toll Free:</h3>
              <p>For Sales: +91 90158 11818 </p>
              <p>For Enquiry: +91 63897 70755 </p>
            </div>
            <div className="footer-section-lower" data-aos="fade-up">
              <h3>Email Us:</h3>
              <p>info@pwnpilot.com </p>
              <p>pwnpilot@gmail.com </p>
            </div>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="footer-bottom">
        <div className="bottom-left">
          <p>© 2024 | All Rights Reserved by</p>
          <p className="company-name">PwnPilot Security </p>
        </div>

        <Link to={"http://www.codersortify.tech"} target="_blank">
          <div className="bottom-right">
            Made by CodersFortify Technologies
            <img src={Coders} className="coders-logo" alt="Logo" />
          </div>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
