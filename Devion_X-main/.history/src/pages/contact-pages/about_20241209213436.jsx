import PageHeader from "../../components/pageHeader/PageHeader";
import Footer from "../../components/footer/Footer";
import React from "react";
import CyberSecuritySImplify from "../../components/cyber security simplified/CyberSecuritySImplify";
import LeadershipTeam from "../../components/leadership team/LeadershipTeam";

const About = () => {
  return (
    <div>
      <PageHeader
        name={"About Us"}
        bgText={"About Us"}
        arrayOfLink={[
          { name: "Home", path: "/" },
          { name: "Company", path: "#" },
        ]}
      />
      <CyberSecuritySImplify />
 
    </div>
  );
};

export default About;
