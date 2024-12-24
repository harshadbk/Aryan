import React from "react";
import BannerHome from "../../assets/banner-home.png";
import PatternHome from "../../assets/pattern.svg";
import StartHome from "../../assets/banner-start.svg";
import { ReactSVG } from "react-svg";

import "./hero.css";
import MyCustomButton from "../button/CommonButton";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="left">
        <span className="name">
          Welcome To <span>PwnPilot Security </span>
        </span>
        <h2 className="heading">Cybersecurity Simplified</h2>
        <p className="txt">
          Enhance your security posture through strategic cybersecurity
          planning.
        </p>
        <MyCustomButton
          backgroundColor="black"
          name={"Read More"}
          color="white"
        />
      </div>
      <div className="right">
        <img src={BannerHome} alt="Image" />
      </div>

      <ReactSVG src={PatternHome} className="pattern" />
    </div>
  );
  // <ReactSVG src={StartHome} className="start" />
};

export default Hero;
