// import React from "react";
// import Contact from "../../components/contacts/Contact";
// import Navbar from "../../components/navbar/Navbar";
import PageHeader from "../../components/pageHeader/PageHeader";
// import Footer from "../../components/footer/Footer";

const BFSI = () => {
  return (
    <div>
      <PageHeader
        name={"Banking, Financial Services and Insurance (BFSI)"}
        bgText={"Industries"}
        arrayOfLink={[
          { name: "Home", path: "/" },
          { name: "Indsutries", path: "/industries" },
          { name: "BFSI", path: "#" },
        ]}
      />
 
    </div>
  );
};

export default BFSI;
