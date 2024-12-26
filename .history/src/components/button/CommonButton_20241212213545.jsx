import { useRef, useState } from "react";
import "./commonbtn.css";

function MyCustomButton({
  name,
  backgroundColor = "red",
  color = "white",
  onClicked = () => {},
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
      style={{ backgroundColor: backgroundColor, color: color }}
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

export default MyCustomButton;
