import { useState } from "react";
import "./evolution-of-cyber.css";
import backgroundImage from "../../assets/can-help-background.png";
import CallIcon from "../../assets/phone.png";
import MessageIcon from "../../assets/message.png";
import emailjs from "emailjs-com";

const EvolutionOfCyber = () => {
  const [formData, setFormData] = useState({
    name: "",
    lname: "",
    email: "",
    pno: "",
    development: "",
    product: "",
    company: "",
    office: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_37krz59", // Service ID
        "template_6d0xamp", // Template ID
        formData, // Form data to be sent
        "rjLdKMEoEpqhYRpVw"
      )
      .then(
        (response) => {
          console.log("Success!", response.status, response.text);
          alert("Message sent successfully!");
          setFormData({
            name: "",
            lname: "",
            email: "",
            pno: "",
            development: "",
            product: "",
            company: "",
            office: "",
            description: "",
          });
        },
        (error) => {
          console.error("Failed...", error);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  const title = "Get Started with Devion-X";

  return (
    <div
      className="evolution-container"
      data-aos="fade-up"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="evolution-overlay">
        <div className="evolution-content">
          {/* Left Content */}
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

          {/* Right Content */}
          <div className="evolution-right">
            <form className="form" onSubmit={handleSubmit}>
              <div className="form-title">{title}</div>
              <div className="form-inputs">
                {/* Name Fields */}
                <div className="two-items">
                  <input
                    type="text"
                    className="input"
                    placeholder="First Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    className="input"
                    placeholder="Last Name"
                    name="lname"
                    value={formData.lname}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Email and Phone */}
                <div className="two-items">
                  <input
                    type="email"
                    className="input"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="number"
                    className="input"
                    placeholder="Mobile No."
                    name="pno"
                    value={formData.pno}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Services */}
                <div className="two-items">
                  <div className="w-full">
                    <p>Choose Development Services</p>
                    <select
                      id="developmentService"
                      value={formData.development}
                      onChange={handleChange}
                      className="border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white"
                      name="development"
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
                      id="productService"
                      value={formData.product}
                      onChange={handleChange}
                      className="border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white"
                      name="product"
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

                {/* Company and Address */}
                <input
                  type="text"
                  className="input"
                  placeholder="Company Name"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  className="input"
                  placeholder="Office Address"
                  name="office"
                  value={formData.office}
                  onChange={handleChange}
                />

                {/* Description */}
                <input
                  type="text"
                  className="input"
                  placeholder="Description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />

                {/* Submit Button */}
                <button type="submit" className="mybutton">
                  Get A Quote
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EvolutionOfCyber;
