// import React, { useEffect, useState } from "react";
// import Faq from "react-faq-component";
import "./faq.css";
import Faq2 from "./Faq2";

const data = [
  {
    title: "What are the key phases of web development?",
    content: "The phases include planning, design, development, testing, deployment, and maintenance.",
  },
  {
    title: "Why do you need web development?",
    content: "Web development creates websites and applications that provide essential services, improve user engagement, and contribute to business growth.",
  },
  {
    title: "Why should you pursue a career in web development?",
    content: "A career in web development offers high demand, creative challenges, and opportunities to work with evolving technologies.",
  },
  {
    title: "What is the difference between front-end and back-end development?",
    content: "Front-end development focuses on the user interface and experience; back-end development deals with server-side logic, databases, and application functionality.",
  },
  {
    title: "What are the best practices for web development?",
    content: "Best practices include responsive design, clean code, performance optimization, SEO best practices, and ensuring cross-browser compatibility.",
  },
  {
    title: "How can web development improve user experience?",
    content: "Good web development enhances user experience by ensuring fast load times, intuitive navigation, accessibility, and mobile responsiveness.",
  },
  {
    title: "What tools are commonly used in web development?",
    content: "Common tools include Visual Studio Code, Git, Chrome Developer Tools, React, Angular, Node.js, and frameworks like Bootstrap.",
  },
];

const styles = {
  bgColor: "var(--primary-color)",
  titleTextColor: "white",
  rowTitleColor: "white",
  rowContentColor: "white",
  arrowColor: "white",
  arrowIcon: "-",
  rowContentPadding: "10px",
  rowContentPaddingTop: "10px",
  rowContentPaddingLeft: "10px",
};

const config = {
  animate: true,
  arrowIcon: "▼",
  tabFocus: true,
};

const FaqComp = () => {
  return (
    <div className="faq-container" style={{ backgroundColor: styles.bgColor }}>
      <div className="faq">
        <div className="faq-head" style={{ color: styles.titleTextColor }}>
          FREQUENTLY ASKED QUESTIONS
        </div>
        {data.map((item, index) => (
          <Faq2
            key={index}
            question={item.title}
            answer={item.content}
            config={config}
            styles={styles}
          />
        ))}
      </div>
    </div>
  );
};

export default FaqComp;
