import { useState } from "react";
import "./evolution-of-cyber.css";
import backgroundImage from "../../assets/can-help-background.png";
import CallIcon from "../../assets/phone.png";
import MessageIcon from "../../assets/message.png";
import MyCustomButton from "../button/CommonButton.jsx";

const EvolutionOfCyber = () => {
  // State to manage the selected services
  const [devService, setDevService] = useState(""); 
  const [prodService, setProdService] = useState("");


  // Optional title variable, set it to your preferred title or use it dynamically
  const title = "Get Started with Devion-X"; 

  return (
    <div
      className="evolution-container"
      data-aos="fade-up"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="evolution-overlay">
        <div className="evolution-content">
          {/* Left Section */}
          <div className="evolution-left" data-aos="fade-up">
            <p className="evolution-head">
              Experience the Evolution of Your IT Presence
            </p>
            <p className="evolution-txt">
              Transform your business with cutting-edge IT development solutions from Devion-X. Contact us today to learn more about our services and schedule a consultation with our web development experts.
            </p>
            <div className="evolution-btns">
              <div className="evolution-btn">
                <div className="evolution-icon">
                  <img src={CallIcon} alt="Call Icon" />
                </div>
                <div className="evolution-call">
                  Call Us Today <br /> +917666675306
                </div>
              </div>
              <div className="evolution-btn">
                <div className="evolution-icon">
                  <img src={MessageIcon} alt="Message Icon" />
                </div>
                <div className="evolution-call">
                  Email Us <br /> devionx.tech@gmail.com
                </div>
              </div>
            </div>
          </div>

          {/* Right Section (Form Section) */}
          <div className="evolution-right" >
            <div className="form">
              <div className="form-form-right">
                <div className="form">
                  <div className="form-title">{title}</div>
                  <div className="form-inputs">
                    {/* Input Fields */}
                    <div className="two-items">
                      <input type="text" className="input" placeholder="First Name" />
                      <input type="text" className="input" placeholder="Last Name" />
                    </div>
                    <div className="two-items">
                      <input type="email" className="input" placeholder="Email" />
                      <input type="number" className="input" placeholder="Mobile No." />
                    </div>
                    <div className="two-items">
                      <div className="w-full">
                        <p>Choose Development Services</p>
                        <select
                          id="devService"
                          value={devService}
                          onChange={handleDevServiceChange}
                          className="border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white"
                        >
                          <option value="">Select Service</option>
                          <option value="None">None</option>
                          <option value="Web Application Security Testing">Web Application Security Testing</option>
                          <option value="Customized Software Development">Customized Software Development</option>
                          <option value="CRM Software">CRM Software</option>
                          <option value="ERP Systems">ERP Systems</option>
                          <option value="API Development">API Development</option>
                          <option value="App Development">App Development</option>
                        </select>

                        <p>Choose Product Services</p>
                        <select
                          id="prodService"
                          value={prodService}
                          onChange={handleProdServiceChange}
                          className="border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white"
                          disabled={devService === "None"}
                        >
                          <option value="">Select Product Service</option>
                          <option value="None">None</option>
                          <option value="CRM Software">CRM Software</option>
                          <option value="ERP Systems">ERP Systems</option>
                          <option value="API Development">API Development</option>
                          <option value="E-commerce">E-commerce</option>
                        </select>
                      </div>
                    </div>

                    <input type="text" className="input" placeholder="Company Name" />
                    <input type="text" className="input" placeholder="Office Address" />
                    <input type="text" className="input" placeholder="Description" />
                    
                    {/* Custom Button */}
                    <MyCustomButton name={title} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EvolutionOfCyber;
