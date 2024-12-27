import React from 'react';
import PageHeader from "../../components/pageHeader/PageHeader";
import Liner_app from "../../assets/hazir_tur.webp";
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
                name={"Hazir Tur"}
                bgText={"Portfolio"}
                arrayOfLink={[
                    { name: "Home", path: "/" },
                    { name: "Portfolio", path: "/portfolio" },
                ]}
            />
            <div className="project-description">
                <p>
                A strong backend system designed and developed for tours management company.Platform can be used by multiple users with multiple roles, Functionalities in the platform is restricted based on the roles and type of the user.It is designed to be used in multiple languages.                </p>
                <button className="read-more-button" onClick={handleReadMoreClick}>
                    Read More
                </button>
            </div>
        </div>
    );
};

export default Project2;
