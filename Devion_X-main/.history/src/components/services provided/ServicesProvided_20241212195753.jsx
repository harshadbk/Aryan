import PropTypes from "prop-types";
import "./servicesProvided.css";

const ServicesProvided = ({ title, data }) => {
  return (
    <div className="services-container">
      <h2 className="services-title">{title}</h2>
      <ul className="services-list">
        {data.map((item, index) => (
          <li key={index} className="service-item">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

// PropTypes validation
ServicesProvided.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ServicesProvided;
