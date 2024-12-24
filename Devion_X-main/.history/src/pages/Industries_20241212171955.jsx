// import React from "react";
// import Contact from "../components/contacts/Contact";
// import Navbar from "../components/navbar/Navbar";
import PageHeader from "../components/pageHeader/PageHeader";
import EvolutionOfCyber from "../components/evolution of cyber/EvolutionOfCyber";
import Footer from "../components/footer/Footer";

const Industries = () => {
  return (
    <div>
      <PageHeader
        name={"Industries Served"}
        bgText={"Industries"}
        arrayOfLink={[
          { name: "Home", path: "/" },
          { name: "Industries", path: "#" },
        ]}
      />
      <EvolutionOfCyber />
 
    </div>
  );
};

export default Industries;
