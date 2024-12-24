import { useState, useEffect } from "react";
import Logo from "../../assets/Logo.png";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Cancel from "../../assets/cancel.png";
import MyCustomButton from "../button/CommonButton";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1200) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  //... rest of your code

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownToggle = (item) => {
    if (activeDropdown === item) {
      setShowDropdown(!showDropdown);
    } else {
      setActiveDropdown(item);
      setShowDropdown(true);
    }
  };

  const handleDropdownClose = () => {
    setShowDropdown(false);
    setActiveDropdown(null);
  };

  const handleMouseLeaveItem = () => {
    handleDropdownClose();
  };

  return (
    <div
      className={`navbar-container ${scrolled ? "scrolled-navbar" : ""} ${
        isMobile ? "scrolled-navbar" : ""
      }`}
    >
      <div className="navbar">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>

        {!isOpen && (
          <div className="btn-ham">
            <MyCustomButton
              name={"Get A Qoute"}
              backgroundColor="black"
              color="white"
            />
          </div>
        )}
        {!isOpen && (
          <button className="hamburger-button" onClick={toggleMenu}>
            &#9776; {/* This is the "☰" character for the hamburger icon */}
          </button>
        )}
        <div className={`items ${isOpen ? "open" : ""}`}>
          {isOpen && (
            <button className="cancel-button" onClick={toggleMenu}>
              <img src={Cancel} alt="Cancel img" />
            </button>
          )}
          <Link to={"/"}>
            <div className="item">
              <p>Home</p>
            </div>
          </Link>
          <Link to={"/services"}>
            <div
              className="item"
              onMouseEnter={() => handleDropdownToggle("Services")}
              onMouseLeave={handleMouseLeaveItem}
            >
              <p>Services</p>
              {showDropdown && activeDropdown === "Services" && (
                <div className="dropdown">
                  <ul>
                    <li>Service 1</li>
                    <li>Service 2</li>
                    <li>Service 3</li>
                  </ul>
                </div>
              )}
            </div>
          </Link>
          <Link to={"/products"}>
            <div
              className="item"
              onMouseEnter={() => handleDropdownToggle("Products")}
              onMouseLeave={handleMouseLeaveItem}
            >
              <p>Products</p>
              {showDropdown && activeDropdown === "Products" && (
                <div className="dropdown">
                  <ul>
                    <li>Squad1</li>
                  </ul>
                </div>
              )}
            </div>
          </Link>

          <Link to={"/industries"}>
            <div
              className="item"
              onMouseEnter={() => handleDropdownToggle("Industries")}
              onMouseLeave={handleMouseLeaveItem}
            >
              <p>Industries</p>
              {showDropdown && activeDropdown === "Industries" && (
                <div className="dropdown">
                  <ul>
                    <li>BFSI</li>
                    <li>Manufacturing</li>
                    <li>Pharmaceutical</li>
                    <li>Technology</li>
                    <li>Government</li>
                    <li>Education</li>
                  </ul>
                </div>
              )}
            </div>
          </Link>

          <Link to={"/company"}>
            <div
              className="item"
              onMouseEnter={() => handleDropdownToggle("Company")}
              onMouseLeave={handleMouseLeaveItem}
            >
              <p>Company</p>
              {showDropdown && activeDropdown === "Company" && (
                <div className="dropdown">
                  <ul>
                    <li>About Us</li>
                    <li>Leadership</li>
                    <li>Cert-IN</li>
                    <li>Key-25sec</li>
                    <li>Careers</li>
                    <li>Contact Us</li>
                  </ul>
                </div>
              )}
            </div>
          </Link>

          {!isOpen && (
            <MyCustomButton
              name={"Get A Qoute"}
              backgroundColor="black"
              color="white"
            />
          )}

          {isOpen && (
            <div className="container">
              <div className="contact">
                <h4>Contact Info</h4>

                <ul>
                  <li>For Sales</li>
                  <li>For HR</li>
                  <li>sales@gmail.com</li>
                  <li>career@gmail.com</li>
                </ul>
              </div>

              <div className="follow">
                <h4>Follow On</h4>

                <ul>
                  <li>
                    <FaFacebookF />
                  </li>
                  <li>
                    <FaInstagram />
                  </li>
                  <li>
                    <FaLinkedin />
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

