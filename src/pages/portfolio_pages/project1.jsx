import React from 'react';
import PageHeader from "../../components/pageHeader/PageHeader";
import Liner_app from "../../assets/linear_app.webp";
import './project1.css';

const Project1 = () => {
    const handleReadMoreClick = () => {
        window.location.href = "https://linear-omega.vercel.app/";
    };

    return (
        <div className="project-container">
            <div className="image-container">
                <img src={Liner_app} alt="Linear App" className="project-image" />
            </div>
            <PageHeader
                name={"Linear.app"}
                bgText={"Portfolio"}
                arrayOfLink={[
                    { name: "Home", path: "/" },
                    { name: "Portfolio", path: "/portfolio" },
                ]}
            />
            <div className="project-description">
                <p>
                    Linear is shaped by the practices and principles that distinguish world-class product teams from the rest:
                    relentless focus, fast execution, and a commitment to the quality of craft.
                </p>
                <button className="read-more-button" onClick={handleReadMoreClick}>
                    Read More
                </button>
            </div>
        </div>
    );
};

export default Project1;
