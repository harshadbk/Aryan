import "./cyberdetail4.css";
import RedTeam from "../../assets/red-team.png";
import BlueTeam from "../../assets/blue-team.png";
import SocialEngi from "../../assets/social.png";
import AttackSImu from "../../assets/ddo.png";

const CyberDetail4 = () => {
  return (
    <div className="cyber-detail-container" data-aos="fade-up">
      <div className="cyber-detail-grid">
        <div className="cyber-detail-card" data-aos="fade-up">
          <div className="cyber-detail-head">Responsive Design</div>
          <div className="cyber-detail-txt">
            Ensuring your website looks stunning and functions perfectly across all devices, delivering a seamless user experience whether on desktop, tablet, or mobile.
          </div>
          <div className="cyber-detail-icon">
            <img src={RedTeam} className="ico" />
          </div>
        </div>
        <div className="cyber-detail-card" data-aos="fade-up">
          <div className="cyber-detail-head">Backend Development</div>
          <div className="cyber-detail-txt">
            Building robust, secure, and scalable server-side functionalities that power your web applications with efficiency and reliability.
          </div>
          <div className="cyber-detail-icon">
            <img src={BlueTeam} className="ico" />
          </div>
        </div>
        <div className="cyber-detail-card" data-aos="fade-up">
          <div className="cyber-detail-head">UX/UI Prototyping</div>
          <div className="cyber-detail-txt">
            Manipulative tactics exploiting human psychology to deceive
            individuals or gain unauthorized access to sensitive information
            within organizations.
          </div>
          <div className="cyber-detail-icon">
            <img src={SocialEngi} className="ico" />
          </div>
        </div>
        <div className="cyber-detail-card" data-aos="fade-up">
          <div className="cyber-detail-head">DDoS Attack Simulation</div>
          <div className="cyber-detail-txt">
            Assessing organizational resilience against large-scale network
            disruptions through simulated Distributed Denial of Service (DDoS)
            attacks for cybersecurity preparedness.
          </div>
          <div className="cyber-detail-icon">
            <img src={AttackSImu} className="ico" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CyberDetail4;
