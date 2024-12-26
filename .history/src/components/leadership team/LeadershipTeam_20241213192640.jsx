// import React from "react";
import "./leadership-team.css";
import Founder1 from "../../assets/owner.png";
import Founder3 from "../../assets/manager.png";
import Linkedin from "../../assets/linkedin.png";
import { Link } from "react-router-dom";

const LeadershipTeam = () => {
  return (
    <div className="leader-container" data-aos="fade-up">
      <div className="leader-inner" data-aos="fade-up">
        <div className="leader-title">Leadership Team</div>

        <div className="leader-grid" data-aos="fade-up">
          <div className="leader-leader-card" data-aos="fade-up">
            <div className="leader-card-up">
              <img src={Founder1} alt="Founder Image" ="" />
              <div className="leader-card-overlay"></div>
            </div>
            <div className="leader-card-down">
              <p className="name">Sonu Kumar Thakur</p>
              <p className="role">
                5+ year Experience, (CEH, AZ900) Certified{" "}
              </p>
              <p className="role">Contact No : +91 90158 11818</p>

              <p className="card-icon">
                <Link
                  to={
                    "https://www.linkedin.com/in/sonu-kumar-thakur-50835479?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
                  }
                >
                  <img src={Linkedin} alt="LinkedIn" ="" />
                </Link>
              </p>
            </div>
          </div>

          <div className="leader-leader-card" data-aos="fade-up">
            <div className="leader-card-up">
              <img src={Founder3} alt="Founder Image" ="" />
              <div className="leader-card-overlay"></div>
            </div>
            <div className="leader-card-down">
              <p className="name">Abhishek Kumar Singh </p>
              <p className="role">
                2+ year Experience, CEH, Penetration Tester(VAPT), Soc Analyst
              </p>
              <p className="role">Contact No : +91 73982 43449</p>
              <p className="card-icon">
                <Link
                  to={
                    "https://www.linkedin.com/in/abhishek-kumar-singh-142129241?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
                  }
                >
                  <img src={Linkedin} alt="LinkedIn" ="" />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadershipTeam;
