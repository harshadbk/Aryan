import { useRef, useState } from "react";
import PropTypes from "prop-types";
import "./commonbtn.css";

function MyCustomButton({
  name,
  backgroundColor = "red",
  color = "white",
  onClicked = () => {
    console.log("Button clicked!");
  },
}) {
  const buttonRef = useRef(null);
  const rippleRef = useRef(null);
  const [hover, setHover] = useState(false);

  function handleMouseEnter() {
    setHover(true);
  }

  function handleMouseLeave() {
    setHover(false);
  }

  return (
    <div
      ref={buttonRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="myButton"
      style={{ backgroundColor, color }}
      onClick={onClicked}
    >
      {name}
      <span
        ref={rippleRef}
        className={`rippleEffect ${hover ? "active" : ""}`}
      ></span>
    </div>
  );
}

MyCustomButton.propTypes = {
  name: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  onClicked: PropTypes.func,
};

export default MyCustomButton;
