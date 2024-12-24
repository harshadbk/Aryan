// import React, { useEffect, useState } from "react";
// import Faq from "react-faq-component";
import "./faq.css";
import Faq2 from "./Faq2";

;

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
