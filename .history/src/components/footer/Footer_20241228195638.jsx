// import React from "react";
import "./Footer.css";
import MyCustomButton from "../button/CommonButton";
// import Coders from "../../assets/coders.png";
import Footer_side from "../../assets/footer_side.jpg"
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
            Our Expertise in IT Solutions
            We specialize in providing IT solutions, delivering expert services, innovative technologies, and scalable systems. Our dedicated team evaluates your digital infrastructure, identifies growth opportunities, and crafts customized solutions designed to enhance your business operations, security, and overall efficiency. With a focus on innovation and performance, we help organizations optimize their IT strategies and achieve long-term success.            </p>
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
                <p className="card-txt"> 9am : 9pm IST</p>
                <p className="card-txt">monday to saturday</p>
                <p className="card-txt">12 Hours Monitoring</p>
              </div>
            </div>
            <div className="footer-section" data-aos="fade-up">
              <h3>Product Services</h3>
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

            <div className="footer-section" data-aos="fade-up">
              <h3>Advance Services</h3>
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
                koperkhairne new mumbai
                <br />
                new mumbai, 110091
              </p>
            </div>
            <div className="footer-section-lower" data-aos="fade-up">
              <h3>Call Us Toll Free:</h3>
              <p>For Sales: +91 7666675306 </p>
              <p>For Enquiry: +91 9370613157 </p>
            </div>
            <div className="footer-section-lower" data-aos="fade-up">
              <h3>Email Us:</h3>
              <p>info@devionx.com </p>
              <p>devionx.tech@gmail.com </p>
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
            Made by Devion-X Technologies
            <img src={Footer_side} className="coders-logo" alt="Logo" />
          </div>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
