import "./services-prov.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ServicesProvided = ({ title, data }) => {
  return (
    <div className="ser-pro-container" data-aos="fade-up">
      <h1 className="ser-title">{title}</h1>

      <div className="ser-grid" data-aos="fade-up">
        {data.map((da) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <Link to={da.link} className="ser-card" data-aos="fade-up">
              <img src={da.img} className="ser-img" alt="Image" srcSet="" />
              <h4 className="ser-name">{da.name}</h4>
              <p className="ser-rev">{da.review}</p>

              <button className="ser-btn">Know More</button>
            </Link>
          );
        })}
      </div>
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
