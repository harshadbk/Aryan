import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import "./faq.css";
import Faq2 from "./Faq2";

const data = [
  {
    title:
      "What are the phases of Vulnerability Assessment & Penetration Testing (VAPT)?",
    content:
      "Phases include planning, scanning, vulnerability assessment, penetration testing, analysis, reporting, and remediation.",
  },
  {
    title: "Why do you need VAPT?",
    content:
      "VAPT identifies security vulnerabilities, ensures compliance, and enhances the overall security posture of an organization.",
  },
  {
    title: "Why should you pursue a career in VAPT?",
    content:
      "A career in VAPT offers high demand, lucrative salaries, and opportunities for continuous learning in cybersecurity.",
  },
  {
    title:
      "What is the difference between vulnerability assessment and penetration testing?",
    content:
      "Vulnerability assessment identifies potential vulnerabilities; penetration testing exploits them to assess impact and risk.",
  },
  {
    title: "What are the best practices for VAPT?",
    content:
      "Best practices include regular testing, comprehensive reporting, continuous monitoring, and prompt remediation of identified vulnerabilities.",
  },
  {
    title: "How can VAPT be used to improve overall security posture?",
    content:
      "VAPT improves security posture by identifying and addressing vulnerabilities, ensuring compliance, and enhancing awareness of potential threats.",
  },
  {
    title: "What tools are commonly used in VAPT?",
    content:
      "Common VAPT tools include Nessus, Metasploit, Burp Suite, Nmap, and OWASP ZAP.",
  },
};

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
    <div className="faq-container">
      <div className="faq">
        <div className="faq-head"> FREQUENTLY ASKED QUESTIONS</div>
        {data.map((item, index) => (
          <Faq2 key={index} question={item.title} answer={item.content} />
        ))}
      </div>
    </div>
  );
};

export default FaqComp;
