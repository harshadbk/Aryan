import "./nav.css";
import { useState, useEffect } from "react";
import Logo from "../../assets/Logo.png";
import "./navbar2.css";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import Cancel from "../../assets/multiply.png";
import MyCustomButton from "../button/CommonButton";
import { Link } from "react-router-dom";
import { IoIosCall } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";

const NavbarContact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showServices, setShowServices] = useState(false);

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

  const handleServices = () => {
    setShowServices(!showServices);
  };

  return (
    <div className="nav-con">
      <div className="contact">
        <div className="contact-container">
          <div className="left2">
            <p className="contact-heading">Follow On:</p>
            <ul>
              <Link
                to={
                  "https://www.facebook.com/profile.php?id=100092671180596&mibextid=ZbWKwL"
                }
              >
                <li className="contact-item">
                  <FaFacebookF className="contact-icon" />
                </li>
              </Link>
              <Link
                to={
                  "https://www.instagram.com/pwnpilot?igsh=MTk0NDI4NGl5b2xyaQ=="
                }
              >
                <li className="contact-item">
                  <FaInstagram className="contact-icon" />
                </li>
              </Link>
              <Link to={"https://www.linkedin.com/company/pwnpilot/"}>
                <li className="contact-item">
                  <FaLinkedin className="contact-icon" />
                </li>
              </Link>
              <Link to={"https://discord.com/invite/JeyxxTtY"}>
                <li className="contact-item">
                  <FaDiscord className="contact-icon" />
                </li>
              </Link>
            </ul>
          </div>

          <div className="r">
            <ul>
              <li>
                <IoIosCall className="contact-icon" />
                <p>For Sales</p>
                <p>+91 90158 11818</p>
              </li>
              <li>
                <AiOutlineMail className="contact-icon" />
                <p>info@pwnpilot.com</p>
              </li>
              <li>
                <IoIosCall className="contact-icon" />
                <p>For Enquiry</p>
                <p>+91 6389770755</p>
              </li>
              <li>
                <AiOutlineMail className="contact-icon" />
                <p>pwnpilot@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="nav">
        <div
          className={`navbar-container ${scrolled ? "scrolled-navbar" : ""} ${
            isMobile ? "scrolled-navbar" : ""
          }
           ${showServices ? "dark-navbar" : ""}  
          `}
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
                  onMouseEnter={handleServices}
                  onMouseLeave={handleServices}
                >
                  <p>Services</p>
                  {showServices && (
                    <div className="services-container">
                      <div className="services-grid">
                        <div className="services-card">
                          <h3 className="card-header">
                            Vulnerability Assessment &amp; Penetration Testing
                            <ul className="inner-ul">
                              <Link to={"/net-pen-test"}>
                                <li>Network Penetration Testing</li>
                              </Link>
                              <Link to={"/web-app-sec"}>
                                <li>Web Application Security Testing</li>
                              </Link>
                              <Link to={"/mob-app-pen"}>
                                <li>Mobile Application Penetration Testing</li>
                              </Link>
                              <Link to={"/api-sec"}>
                                <li>API Security Testing</li>
                              </Link>
                              <Link to={"/wire-pen-test"}>
                                <li>Wireless Penetration Testing</li>
                              </Link>
                              <Link to={"/ot-iot"}>
                                <li>OT And IOT Penetration Testing</li>
                              </Link>
                              <Link to={"/cloud-pen"}>
                                <li>Cloud Penetration Testing</li>
                              </Link>
                            </ul>
                          </h3>
                        </div>
                        <div className="services-card">
                          <h3 className="card-header">Advanced Services</h3>
                          <ul className="outer-ul">
                            <Link to={"/red-team"} className="inner-div">
                              <Link to={"/red-team"}>
                                <li>Red Teaming</li>
                              </Link>

                              <ul className="inner-ul">
                                <Link to={"/int-red-team"}>
                                  <li>Internal Red Teaming</li>
                                </Link>
                                <Link to={"/ext-red-team"}>
                                  <li>External Red Teaming</li>
                                </Link>
                              </ul>
                            </Link>
                            <Link to={"/dev-sec-ops"} className="inner-div">
                              <Link to={"/blue-team"}>
                                <li>Blue Teaming</li>
                              </Link>
                              <ul className="inner-ul">
                                <Link to={"/soc"}>
                                  <li>Soc (Security Operation Center)</li>
                                </Link>
                                <Link to={"/dig-foren"}>
                                  <li>Digital Forensic</li>
                                </Link>
                              </ul>
                            </Link>
                          </ul>
                        </div>
                      </div>
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
                        <Link to={"/bfsi"}>
                          <li>BFSI</li>
                        </Link>
                        <Link to={"/manufacturing"}>
                          <li>Manufacturing</li>
                        </Link>
                        <Link to={"/pharmaceutical"}>
                          <li>Pharmaceutical</li>
                        </Link>
                        <Link to={"/technology"}>
                          <li>Technology</li>
                        </Link>
                        <Link to={"/government"}>
                          <li>Government</li>
                        </Link>
                        <Link to={"/education"}>
                          <li>Education</li>
                        </Link>
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
                        <Link to={"/about"}>
                          <li>About Us</li>
                        </Link>
                        <Link to={"/leadership"}>
                          <li>Leadership</li>
                        </Link>
                        <Link to={"cert-in"}>
                          <li>Cert-IN</li>
                        </Link>
                        <Link to={"/career"}>
                          <li>Careers</li>
                        </Link>
                        <Link to={"/contact"}>
                          <li>Contact Us</li>
                        </Link>
                      </ul>
                    </div>
                  )}
                </div>
              </Link>

              {!isOpen && (
                <Link to={"/get-a-qoute"}>
                  <MyCustomButton
                    name={"Get A Qoute"}
                    backgroundColor="black"
                    color="white"
                  />
                </Link>
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
      </div>
    </div>
  );
};

export default NavbarContact;
