import "./whoweserve.css";
import { Link } from "react-router-dom";

const WhoWeServe = () => {
  return (
    <div className="who-container" data-aos="fade-up">
      <div className="who-inner">
        <div className="who-head">OUR WORK INDUSTRIES</div>
        <div className="who-title">Who we Serve</div>

        <div className="who-grid">
          <Link to={"/bfsi"}>
            <div className="who-card" data-aos="fade-up">
              <div className="card-left">
                <div className="card-title">
                  Banking, Financial Services and Insurance
                </div>
                <div className="txt">
									Our experts design secure and scalable web applications to handle sensitive financial data, ensuring seamless customer interactions and robust online services.
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
									Our web development team delivers innovative solutions for streamlining production workflows, integrating industrial systems, and ensuring data accessibility with security.
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
									Our services include creating reliable and user-friendly web platforms that enhance customer experience and ensure secure handling of critical pharmaceutical information.
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
									We specialize in developing cutting-edge web solutions that drive innovation, enhance user experiences, and support the growth of technology-driven businesses.
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
									Our web development solutions empower governments with modern, efficient, and secure platforms that improve public engagement and service delivery.
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
                  Our service offerings enhance customer experience throughout
                  secure & highly functional.
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
