import React from "react";
import "./pageheader.css";
import { ReactSVG } from "react-svg";
import PatternHome from "../../assets/pattern.svg";
import StartHome from "../../assets/banner-start.svg";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const PageHeader = ({ name, bgText = name, arrayOfLink }) => {

  return (
    <div className="header-container">
      <div className="header-pattern">
        <ReactSVG src={PatternHome} />
      </div>
      <div className="header-content">
        <div className="header-background-text">{bgText}</div>
        <div className="header-text">
          <h1>{name}</h1>
          <nav>
            {arrayOfLink.map((link, index) => (
              <React.Fragment key={index}>
                {link.path == "#" ? (
                  <span
                    style={
                      index === arrayOfLink.length - 1
                        ? { color: "red", fontSize: "20px" }
                        : {}
                    }
                  >
                    {link.name}
                  </span>
                ) : (
                  <Link to={link.path} className="header-link">
                    <span
                      style={
                        index === arrayOfLink.length - 1 ? { color: "red" } : {}
                      }
                    >
                      {link.name}
                    </span>
                  </Link>
                )}
                {index < arrayOfLink.length - 1 && (
                  <span className="separator">| &nbsp;</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        </div>
        <div className="header-icon">
          <ReactSVG src={StartHome} />
        </div>
      </div>
    </div>
  );
};



export default PageHeader;
