// import React from "react";
import Video from "../../assets/1.mp4";
import "./hero2.css";
import MyCustomButton from "../button/CommonButton";
import { Link } from "react-router-dom";

const Hero2 = () => {
  return (
    <div className="hero-container">
      <video
        className="video"
        src={Video}
        autoPlay
        muted
        loop
        disablePictureInPicture
      />

      <div className="hero-left">
        <div className="hero-head">
          Welcome To <span className="span">Devion-X Technologies</span>
        </div>
        <div className="hero-title">
          Simplified IT<br />Development Solutions
        </div>
        <div className="hero-txt">
          Transform your online presence with innovative
          <br /> and scalable IT Development solutions.
        </div>

        <Link to={"/services"}>
          <MyCustomButton
            name={"Read More"}
            backgroundColor="var(--primary-color)"
            color="white"
            onClicked={() => {}}
          />
        </Link>
      </div>
    </div>
  );
};

export default Hero2;
