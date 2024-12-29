import { useState, useEffect } from "react";
import Logo from "../../assets/devon.png";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Cancel from "../../assets/cancel.png";
import MyCustomButton from "../button/CommonButton";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`navbar-container ${scrolled ? "scrolled-navbar" : ""}`}>
      <div className="navbar">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>

        <button className="hamburger-button" onClick={toggleMenu}>
          {isOpen ? '✖' : '☰'}
        </button>

        <div className={`items ${isOpen ? "open" : ""}`}>
          <div className="menu">
            <Link to={"/tools"}>Tools</Link>
            <Link to={"/pricing"}>Pricing</Link>
            <Link to={"/showcase"}>Showcase</Link>
            <Link to={"/community"}>Community</Link>
            <Link to={"/learn"}>Learn GSAP</Link>
            <Link to={"/docs"}>Docs</Link>
            <div className="login">
              <Link to={"/login"}>Login/Create Account</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
