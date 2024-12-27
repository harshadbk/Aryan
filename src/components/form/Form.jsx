import { useState } from "react";
import PropTypes from "prop-types";
import MyCustomButton from "../button/CommonButton";
import "./form.css";
import Video from "../../assets/1.mp4";

const Form = ({ title }) => {
  const [devService, setDevService] = useState("");
  const [prodService, setProdService] = useState("");

  const handleDevServiceChange = (e) => {
    setDevService(e.target.value);
    if (e.target.value === "None") {
      setProdService("");
    }
  };

  const handleProdServiceChange = (e) => {
    setProdService(e.target.value);
    if (e.target.value === "None") {
      setDevService("");
    }
  };

  return (
    <div className="f-container">
      <video className="video" muted autoPlay loop src={Video}></video>
      <div className="form-form-right">
        <div className="form">
          <div className="form-title">{title}</div>
          <div className="form-inputs">
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
                <label
                  htmlFor="countries"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  
                </label>
                <p>Choose Development Services</p>
                <select
                  id="devService"
                  value={devService}
                  onChange={handleDevServiceChange}
                  className="border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white"
                >
                  <option value="">Web Development</option>
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
                  <option value="">CRM Software</option>
                  <option value="None">None</option>
                  <option value="ERP Systems">ERP Systems</option>
                  <option value="API Development">API Development</option>
                  <option value="E-commerce">E-commerce</option>
                </select>
              </div>
            </div>
            <input type="text" className="input" placeholder="Company Name" />
            <input type="text" className="input" placeholder="Office Address" />
            <input type="text" className="input" placeholder="Description" />
            <MyCustomButton name={title} />
          </div>
        </div>
      </div>
    </div>
  );
};

Form.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Form;
