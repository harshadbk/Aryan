import React from "react";
import Contact from "../../components/contacts/Contact";
import Navbar from "../../components/navbar/Navbar";
import PageHeader from "../../components/pageHeader/PageHeader";
import Footer from "../../components/footer/Footer";

const Tech = () => {
  return (
    <div>
      <PageHeader
        name={"Technology"}
        bgText={"Industries"}
        arrayOfLink={[
          { name: "Home", path: "/" },
          { name: "Indsutries", path: "/industries" },
          { name: "Technology", path: "#" },
        ]}
      />
 
    </div>
  );
};

export default Tech;
