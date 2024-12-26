import { useState } from "react";
import PropTypes from "prop-types";
import MyCustomButton from "../button/CommonButton";
import "./form.css";
import Video from "../../assets/1.mp4";

const Form = ({ title }) => {
  const [dropdown1Open, setDropdown1Open] = useState(false);

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
                  Select VAPT Services
                </label>
                <select
                  id="countries"
                  onClick={() => setDropdown1Open(!dropdown1Open)}
                  className="border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="">Web Development</option>
                  <option value="">Web Application Security Testing</option>
                  <option value="">Mobile Application Penetration Testing</option>
                  <option value="">API Security Testing</option>
                  <option value="">Wifiless Penetration Testing</option>
                  <option value="">OT And IOT Penetration Testing</option>
                  <option value="">Cloud Penetration Testing</option>
                </select>
              </div>
              <div className="w-full">
                <label
                  htmlFor="countries-2"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Select Advanced Services
                </label>
                <select
                  id="countries-2"
                  className="border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="">Red Teaming</option>
                  <option value="">Blue Teaming</option>
                </select>
              </div>
            </div>
            <input type="text" className="input" placeholder="Company Name" />
            <input type="text" className="input" placeholder="Address" />
            <input type="text" className="input" placeholder="Subject" />
            <MyCustomButton name={title} />
          </div>
        </div>
      </div>
    </div>
  );
};

// PropTypes validation
Form.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Form;
