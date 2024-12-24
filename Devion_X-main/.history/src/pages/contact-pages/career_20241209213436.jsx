import PageHeader from "../../components/pageHeader/PageHeader";
import Footer from "../../components/footer/Footer";
import React from "react";
import LeadershipTeam from "../../components/leadership team/LeadershipTeam";

const Career = () => {
  return (
    <div>
      <PageHeader
        name={"Cyber Security Professionals"}
        bgText={"Cyber Security Careers"}
        arrayOfLink={[
          { name: "Home", path: "/" },
          { name: "Cyber Security Careers", path: "#" },
        ]}
      />
 
    </div>
  );
};

export default Career;
