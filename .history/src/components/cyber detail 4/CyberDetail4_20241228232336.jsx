import "./cyberdetail4.css";
import RedTeam from "../../assets/red-team.png";
import BlueTeam from "../../assets/blue-team.png";
import SocialEngi from "../../assets/social.png";
import AttackSImu from "../../assets/ddo.png";

const CyberDetail4 = () => {
  return (
    <div className="cyber-detail-container" data-aos="fade-up">
      {/* Centered Animated Heading */}
      <div className="cyber-detail-heading" data-aos="fade-up">
        <h1>Our Core Services</h1>
      </div>

      {/* Tabular Layout for Cards */}
      <div className="cyber-detail-grid" style={{ display: 'flex', }}>
        <div className="cyber-detail-card" data-aos="fade-up">
          <div className="cyber-detail-head">Responsive Design</div>
          <div className="cyber-detail-txt">
            Ensuring your website looks stunning and functions perfectly across
            all devices, delivering a seamless user experience whether on
            desktop, tablet, or mobile.
          </div>
          <div className="cyber-detail-icon">
            <img src={RedTeam} className="ico" alt="Responsive Design" />
          </div>
        </div>

        <div className="cyber-detail-card" data-aos="fade-up">
          <div className="cyber-detail-head">Backend Development</div>
          <div className="cyber-detail-txt">
            Building robust, secure, and scalable server-side functionalities
            that power your web applications with efficiency and reliability.
          </div>
          <div className="cyber-detail-icon">
            <img src={BlueTeam} className="ico" alt="Backend Development" />
          </div>
        </div>

        <div className="cyber-detail-card" data-aos="fade-up">
          <div className="cyber-detail-head">UX/UI Prototyping</div>
          <div className="cyber-detail-txt">
            Crafting intuitive and user-centered designs through detailed
            prototypes to enhance user engagement and satisfaction.
          </div>
          <div className="cyber-detail-icon">
            <img src={SocialEngi} className="ico" alt="UX/UI Prototyping" />
          </div>
        </div>

        <div className="cyber-detail-card" data-aos="fade-up">
          <div className="cyber-detail-head">Performance Optimization</div>
          <div className="cyber-detail-txt">
            Improving website speed, scalability, and responsiveness to provide
            users with a flawless browsing experience.
          </div>
          <div className="cyber-detail-icon">
            <img src={AttackSImu} className="ico" alt="Performance Optimization" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CyberDetail4;
