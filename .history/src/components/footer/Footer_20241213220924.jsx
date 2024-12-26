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
          Schedule A Consultation And Take <br /> Proactive Steps To Elevate Your <br /> Digital Presence.
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
              We specialize in web development, delivering expert solutions, innovative designs, and scalable applications. Our dedicated team evaluates your digital infrastructure, identifies growth opportunities, and crafts tailored solutions to enhance your online presence and engagement.
            </p>
          </div>
          <div className="footer-first-right">
            <div className="right-item">
              <p className="footer-title">Our Mission</p>
              <p className="footer-txt">
                To provide exceptional web development services and foster an innovative work environment.
              </p>
            </div>
            <div className="right-item">
              <p className="footer-title">Our Vision</p>
              <p className="footer-txt">
                To become synonymous with cutting-edge web development solutions.
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
                  <li>Web Development</li>
                </Link>
                <Link to={"/web-app-sec"}>
                  <li>Web Application Security Testing</li>
                </Link>
                <Link to={"/mob-app-pen"}>
                  <li>Customized Software Development</li>
                </Link>
                <Link to={"/api-sec"}>
                  <li>CRM Software</li>
                </Link>
                <Link to={"/wire-pen-test"}>
                  <li>ERP Systems</li>
                </Link>
                <Link to={"/ot-iot"}>
                  <li>API Development</li>
                </Link>
                <Link to={"/cloud-pen"}>
                  <li>App Development</li>
                </Link>
              </ul>
            </div>
            {/* <div className="footer-section" data-aos="fade-up">
              <h3>Advanced Services</h3>
              <ul>
                <Link to={"/red-team"}>
                  <li>Red Teaming</li>
                </Link>
                <Link to={"/blue-team"}>
                  <li>Blue Teaming</li>
                </Link>
              </ul>
            </div> */}

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
          <p className="company-name">Devion-X</p>
        </div>

        <Link to={"http://www.codersortify.tech"} target="_blank">
          <div className="bottom-right">
            Made by Devio Technologies
            <img src={Coders} className="coders-logo" alt="Logo" />
          </div>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
