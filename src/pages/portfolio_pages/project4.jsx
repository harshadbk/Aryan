import React from 'react';
import PageHeader from "../../components/pageHeader/PageHeader";
import Liner_app from "../../assets/loyal.webp";
import './project1.css';

const Project2 = () => {
    const handleReadMoreClick = () => {
        window.location.href = "https://www.codersfortify.com/";
    };

    return (
        <div className="project-container">
            <div className="image-container">
                <img src={Liner_app} alt="Linear App" className="project-image" />
            </div>
            <PageHeader
                name={"Loyalty & Competition System - PIMCore"}
                bgText={"Portfolio"}
                arrayOfLink={[
                    { name: "Home", path: "/" },
                    { name: "Portfolio", path: "/portfolio" },
                ]}
            />
            <div className="project-description">
                <p>
                The platform is built on Pimcore to serve as a Collaborative performance analysis tool for dealers and their sales team. Where administrators can bring dealers and salespeople together and analyze performance based on sales data and motivate them with points via timely competitions.                            </p>
                <button className="read-more-button" onClick={handleReadMoreClick}>
                    Read More
                </button>
            </div>
        </div>
    );
};

export default Project2;
