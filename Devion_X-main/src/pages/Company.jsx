import React from "react";
import Contact from "../components/contacts/Contact";
import Navbar from "../components/navbar/Navbar";
import PageHeader from "../components/pageHeader/PageHeader";
import EvolutionOfCyber from "../components/evolution of cyber/EvolutionOfCyber";
import Footer from "../components/footer/Footer";
import LeadershipTeam from "../components/leadership team/LeadershipTeam";
import CyberSecuritySImplify from "../components/cyber security simplified/CyberSecuritySImplify";
import CyberDetail4 from "../components/cyber detail 4/CyberDetail4";
import Row4Elements from "../components/row4elements/Row4Elements";

const Company = () => {
  return (
    <div>
      <PageHeader
        name={"About Us"}
        arrayOfLink={[
          { name: "Home", path: "/" },
          { name: "Company", path: "#" },
        ]}
      />
      <CyberSecuritySImplify />
      <Row4Elements />
    </div>
  );
};

export default Company;
