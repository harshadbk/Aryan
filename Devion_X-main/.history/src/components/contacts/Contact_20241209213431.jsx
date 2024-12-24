import React from "react";
import "./contact.css";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

import { IoIosCall } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="left2">
        <p className="contact-heading">Follow On:</p>
        <ul>
          <li className="contact-item">
            <FaFacebookF className="contact-icon" />
          </li>
          <li className="contact-item">
            <FaInstagram className="contact-icon" />
          </li>
          <li className="contact-item">
            <FaLinkedin className="contact-icon" />
          </li>
        </ul>
      </div>

      <div className="r">
        <ul>
          <li>
            <IoIosCall className="contact-icon" />
            <p>For Sales</p>
            <p>+99999999</p>
          </li>
          <li>
            <AiOutlineMail className="contact-icon" />
            <p>sales@gmail.com</p>
          </li>
          <li>
            <IoIosCall className="contact-icon" />
            <p>For HR</p>
            <p>+99999999</p>
          </li>
          <li>
            <AiOutlineMail className="contact-icon" />
            <p>career@gmail.com</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
