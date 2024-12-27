import React, { useState } from "react";
import "./faq.css"; // Import the CSS

const data = [
  {
    title: "What are the stages of software development?",
    content: "The stages include planning, designing, development, testing, deployment, and maintenance. Each phase is crucial for ensuring the software meets user needs and performs well.",
  },
  {
    title: "Why is version control important in development?",
    content: "Version control systems like Git allow developers to track changes, collaborate with teams, and manage code versions efficiently, preventing conflicts and lost work.",
  },
  {
    title: "What is the difference between Agile and Waterfall methodologies?",
    content: "Agile is an iterative, flexible methodology where development is done in small increments, while Waterfall is a linear, sequential approach where each phase must be completed before moving to the next.",
  },
  {
    title: "What is continuous integration and continuous delivery (CI/CD)?",
    content: "CI/CD refers to practices that automate code integration, testing, and delivery. Continuous integration involves merging code changes frequently, while continuous delivery ensures that code is always production-ready.",
  },
  {
    title: "What is the role of testing in software development?",
    content: "Testing ensures the quality of software by identifying bugs, verifying functionalities, and ensuring the application meets user requirements. It involves unit testing, integration testing, and acceptance testing.",
  },
  {
    title: "What is the difference between front-end and back-end development?",
    content: "Front-end development focuses on the user interface and experience, while back-end development handles server-side logic, databases, and the functionality that powers the app.",
  },
  {
    title: "What are the best practices for writing clean code?",
    content: "Best practices include writing meaningful variable and function names, keeping functions short and focused, avoiding repetition (DRY principle), and properly documenting code.",
  },
  {
    title: "How can you ensure software scalability?",
    content: "Software scalability can be achieved by writing efficient code, using proper architecture patterns like microservices, and ensuring the infrastructure can handle increased load, such as through load balancing and database sharding.",
  },
  {
    title: "What tools are commonly used in software development?",
    content: "Common tools include Visual Studio Code, Git, Jira, Docker, Jenkins, GitHub, React, Angular, Node.js, and various testing frameworks like Jest and Mocha.",
  },
  {
    title: "What is the role of a software architect?",
    content: "A software architect designs the high-level structure of a system, making decisions on technologies, tools, and frameworks, and ensuring that the system is scalable, reliable, and meets user needs.",
  },
];

const styles = {
  bgColor: "var(--primary-color)",
  titleTextColor: "white",
  rowTitleColor: "white",
  rowContentColor: "white",
  arrowColor: "white",
  arrowIcon: "▼",
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
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container" style={{ backgroundColor: styles.bgColor }}>
      <div className="faq">
        <div className="faq-head" style={{ color: styles.titleTextColor }}>
          FREQUENTLY ASKED QUESTIONS
        </div>
        {data.map((item, index) => (
          <div key={index} className="faq-item">
            <div
              className="faq-question"
              style={{ color: styles.rowTitleColor }}
              onClick={() => toggleAnswer(index)}
            >
              <span>{item.title}</span>
              <span className={`faq-arrow ${activeIndex === index ? "active" : ""}`}>▼</span>
            </div>
            <div
              className={`faq-answer ${activeIndex === index ? "active" : ""}`}
              style={{
                padding: styles.rowContentPadding,
                paddingTop: styles.rowContentPaddingTop,
                paddingLeft: styles.rowContentPaddingLeft,
                color: styles.rowContentColor,
              }}
            >
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqComp;
