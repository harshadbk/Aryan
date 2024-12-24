import React from "react";
import Contact from "../components/contacts/Contact";
import Navbar from "../components/navbar/Navbar";
import PageHeader from "../components/pageHeader/PageHeader";
import EvolutionOfCyber from "../components/evolution of cyber/EvolutionOfCyber";
import Footer from "../components/footer/Footer";

const Products = () => {
  return (
    <div>
      <PageHeader
        bgText={"Products"}
        name={"Squad1"}
        arrayOfLink={[
          { name: "Home", path: "/" },
          { name: "Products", path: "#" },
          { name: "Squad1", path: "#" },
        ]}
      />
      <EvolutionOfCyber />
 
    </div>
  );
};

export default Products;
