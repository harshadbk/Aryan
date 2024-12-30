import "./nav.css";
import { useState, useEffect } from "react";
import Logo from "../../assets/devon.png";
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
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1200);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setActiveDropdown(null);
    }
    document.body.style.overflow = !isOpen ? 'hidden' : '';
  };

  // Handle dropdown toggle
  const handleDropdownToggle = (item) => {
    if (isMobile) {
      // For mobile: toggle dropdown
      setActiveDropdown(activeDropdown === item ? null : item);
    } else {
      // For desktop: show on hover
      setActiveDropdown(item);
    }
  };

  // Handle link click
  const handleLinkClick = (e, hasDropdown) => {
    if (isMobile && hasDropdown) {
      e.preventDefault(); // Prevent navigation if has dropdown
    } else {
      setIsOpen(false); // Close menu on link click
      document.body.style.overflow = '';
    }
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
                <p>+91 7666675306</p>
              </li>
              <li>
                <AiOutlineMail className="contact-icon" />
                <p>info@devionx.com</p>
              </li>
              <li>
                <IoIosCall className="contact-icon" />
                <p>For Enquiry</p>
                <p>+91 9370613157</p>
              </li>
              <li>
                <AiOutlineMail className="contact-icon" />
                <p>devionx.tech@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="nav">
        <div
          className={`navbar-container ${scrolled ? "scrolled-navbar" : ""} ${isMobile ? "scrolled-navbar" : ""
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
              <Link to="/" onClick={(e) => handleLinkClick(e, false)}>
                <div className="item">
                  <p>Home</p>
                </div>
              </Link>

              <div 
                className={`item ${activeDropdown === 'services' ? 'active' : ''}`}
                onClick={() => isMobile && handleDropdownToggle('services')}
                onMouseEnter={() => !isMobile && handleDropdownToggle('services')}
                onMouseLeave={() => !isMobile && setActiveDropdown(null)}
              >
                <p>Services</p>
                <div className="dropdown">
                  <ul>
                    <Link to="/service1" onClick={(e) => handleLinkClick(e, false)}>
                      <li>Service 1</li>
                    </Link>
                    {/* ... other service links ... */}
                  </ul>
                </div>
              </div>

              <div 
                className={`item ${activeDropdown === 'products' ? 'active' : ''}`}
                onClick={() => isMobile && handleDropdownToggle('products')}
                onMouseEnter={() => !isMobile && handleDropdownToggle('products')}
                onMouseLeave={() => !isMobile && setActiveDropdown(null)}
              >
                <p>Products</p>
                <div className="dropdown">
                  <h3 className="card-header">
                    <h3 style={{ fontWeight: 'bold', textAlign: 'center' , color:'black'}}>Our Products</h3>
                    <ul className="inner-ul">
                      <Link to={"/product-1"}>
                        <li>LMS(Learning Management System)</li>
                      </Link>
                      <Link to={"/product-2"}>
                        <li>ERS(Enterprise Resource Planning System)</li>
                      </Link>
                      <Link to={"/product-3"}>
                        <li>CRM(Customer Relationship Management)</li>
                      </Link>
                      <Link to={"/product-4"}>
                        <li>E-Commerce</li>
                      </Link>
                    </ul>
                  </h3>
                </div>
              </div>

              <Link to={"/my-portfolio"}>
                <div
                  className="item"
                  onMouseEnter={() => handleDropdownToggle("portfolio")}
                  onMouseLeave={() => handleDropdownToggle(null)}
                >
                  <p>Portfolio</p>
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
                      <h3 className="card-header" style={{ fontWeight: 'bold', textAlign: 'left' , color:'black'}}>
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
                      </h3>
                    </div>
                  )}
                 
                </div>
              </Link>
              <Link to={"/blogs"}>
              <div
                  className="item"
                  onMouseEnter={() => handleDropdownToggle("Company")}
                  onMouseLeave={handleMouseLeaveItem}
                >

                  <p>Blogs</p>
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
                        <Link to={"/testimonials"}>
                          <li>Testimonials</li>
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
