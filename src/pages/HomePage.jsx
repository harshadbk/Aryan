// import React, { useEffect } from "react";
// import Contact from "../components/contacts/Contact";
// import Navbar from "../components/navbar/Navbar";
// import Hero from "../components/hero/Hero";
// import Footer from "../components/footer/Footer";
import Assesments from "../components/assesments/Assesments";
import CyberSecuritySImplify from "../components/cyber security simplified/CyberSecuritySImplify";
import CyberDetail4 from "../components/cyber detail 4/CyberDetail4";
import TrustedCyber from "../components/trusted cyber/TrustedCyber";
import SolutionOffer from "../components/solution offer/SolutionOffer";
import Row4Elements from "../components/row4elements/Row4Elements";
import WhoWeServe from "../components/who we serve/WhoWeServe";
// import LeadershipTeam from "../components/leadership team/LeadershipTeam";
import EvolutionOfCyber from "../components/evolution of cyber/EvolutionOfCyber";
import ServicesCard from "../components/servicesCard/ServicesCard";
// import Form from "../components/form/Form";
import Hero2 from "../components/hero2/Hero2";

const HomePage = () => {
  return (
    <div data-aos="fade-up">
      <Hero2 />
      <ServicesCard />
      <Assesments />
      <CyberSecuritySImplify />
      <Row4Elements />
      <TrustedCyber />
      <SolutionOffer />
      <CyberDetail4 />
      <WhoWeServe />
      <EvolutionOfCyber />
    </div>
  );
};

export default HomePage;
