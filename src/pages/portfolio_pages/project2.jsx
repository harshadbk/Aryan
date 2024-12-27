import React from 'react';
import PageHeader from "../../components/pageHeader/PageHeader";
import Liner_app from "../../assets/scrapji.webp";
import './project1.css';

const Project2 = () => {
    const handleReadMoreClick = () => {
        window.location.href = "https://www.scrapji.com/";
    };

    return (
        <div className="project-container">
            <div className="image-container">
                <img src={Liner_app} alt="Linear App" className="project-image" />
            </div>
            <PageHeader
                name={"Scrap Ji"}
                bgText={"Portfolio"}
                arrayOfLink={[
                    { name: "Home", path: "/" },
                    { name: "Portfolio", path: "/portfolio" },
                ]}
            />
            <div className="project-description">
                <p>
                To make India trash free by 2030 Everyone has to do their part in joining hands with circular economy of india.where we promote recycling, waste management practices and clean habits to make India the cleanest country of the world Because, today recycling is not just an option but also a necessity</p>
                <button className="read-more-button" onClick={handleReadMoreClick}>
                    Read More
                </button>
            </div>
        </div>
    );
};

export default Project2;
