import { useState } from "react";
import PropTypes from "prop-types";
import emailjs from "emailjs-com";
import "./form.css";
import Video from "../../assets/1.mp4";

const Form = ({ title }) => {
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

  return (
    <div className="f-container">
      <video className="video" muted autoPlay loop src={Video}></video>
      <div className="form-form-right">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-title">{title}</div>
          <div className="form-inputs">
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
            <div className="two-items">
              <div className="w-full">
                <p>Choose Development Services</p>
                <select
                  id="devService"
                  value={formData.development}
                  onChange={handleChange}
                  className="border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white"
                  name="development"
                >
                  <option value="">Select a Service</option>
                  <option value="None">None</option>
                  <option value="Web Application Security Testing">
                    Web Application Security Testing
                  </option>
                  <option value="Customized Software Development">
                    Customized Software Development
                  </option>
                  <option value="CRM Software">CRM Software</option>
                  <option value="ERP Systems">ERP Systems</option>
                  <option value="API Development">API Development</option>
                  <option value="App Development">App Development</option>
                </select>
                <p>Choose Product Services</p>
                <select
                  id="prodService"
                  value={formData.product}
                  onChange={handleChange}
                  className="border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white"
                  name="product"
                >
                  <option value="">Select a Product</option>
                  <option value="None">None</option>
                  <option value="ERP Systems">ERP Systems</option>
                  <option value="API Development">API Development</option>
                  <option value="E-commerce">E-commerce</option>
                </select>
              </div>
            </div>
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
            <input
              type="text"
              className="input"
              placeholder="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
            <button className="mybutton">Get A Quote</button>
          </div>
        </form>
      </div>
    </div>
  );
};

Form.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Form;
