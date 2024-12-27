import "./whoweserve.css";
import { Link } from "react-router-dom";

const WhoWeServe = () => {
  return (
    <div className="who-container" data-aos="fade-up">
      <div className="who-inner">
      <div className="who-head" data-aos="fade-up">OUR WORK INDUSTRIES</div>
      <div className="who-title" data-aos="fade-up">Who We Serve</div>

        <div className="who-grid">
          <Link to={"/bfsi"}>
            <div className="who-card" data-aos="fade-up">
              <div className="card-left">
                <div className="card-title">Banking, Financial Services and Insurance</div>
                <div className="txt">
                  Our experts craft secure and scalable IT solutions tailored to manage sensitive data, enabling seamless operations, efficient workflows, and robust online services for enhanced customer satisfaction.
                </div>
              </div>
              <div className="card-right">01</div>
            </div>
          </Link>
          
          <Link to={"/manu"}>
            <div className="who-card" data-aos="fade-up">
              <div className="card-left">
                <div className="card-title">Manufacturing</div>
                <div className="txt">
                  Our IT solutions team delivers innovative services for streamlining production workflows, integrating industrial systems, and ensuring secure and accessible data management.
                </div>
              </div>
              <div className="card-right">02</div>
            </div>
          </Link>
          
          <Link to={"/pharma"}>
            <div className="who-card" data-aos="fade-up">
              <div className="card-left">
                <div className="card-title">Pharmaceutical</div>
                <div className="txt">
                  Our IT solutions encompass the creation of reliable and user-friendly platforms designed to enhance customer experience, streamline pharmaceutical operations, and ensure the secure handling of critical medical and patient information.
                </div>
              </div>
              <div className="card-right">03</div>
            </div>
          </Link>

          <Link to={"/tech"}>
            <div className="who-card" data-aos="fade-up">
              <div className="card-left">
                <div className="card-title">Technology</div>
                <div className="txt">
                  We specialize in crafting cutting-edge IT solutions that foster innovation, elevate user experiences, and empower technology-driven businesses to achieve sustainable growth.
                </div>
              </div>
              <div className="card-right">04</div>
            </div>
          </Link>

          <Link to={"/gov"}>
            <div className="who-card" data-aos="fade-up">
              <div className="card-left">
                <div className="card-title">Government</div>
                <div className="txt">
                  Our IT solutions empower governments with modern, efficient, and secure platforms, enhancing public engagement, streamlining service delivery, and fostering transparency in governance.
                </div>
              </div>
              <div className="card-right">05</div>
            </div>
          </Link>

          <Link to={"/edu"}>
            <div className="who-card" data-aos="fade-up">
              <div className="card-left">
                <div className="card-title">Education</div>
                <div className="txt">
                  Our team builds interactive and scalable IT platforms to revolutionize the learning experience, making education accessible and engaging for all.
                </div>
              </div>
              <div className="card-right">06</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhoWeServe;
