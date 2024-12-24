import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { FiPlus } from "react-icons/fi";
import "./styles.css";

export default function Faq2({ question, answer }) {
  const [active, setActive] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = active
        ? `${contentRef.current.scrollHeight}px`
        : "0px";
    }
  }, [active]);

  const toggleAccordion = () => {
    setActive(!active);
  };

  return (
    <div className="App">
      <div>
        <button
          className={`question-section ${active ? "active" : ""}`}
          onClick={toggleAccordion}
        >
          <div>
            <div className="question-align">
              <h4 className="question-style">{question}</h4>
              <FiPlus
                className={active ? "question-icon rotate" : "question-icon"}
              />
            </div>
            <div
              ref={contentRef}
              className={active ? "answer answer-divider" : "answer"}
            >
              <p>{answer}</p>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}

// PropTypes validation
Faq2.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};
