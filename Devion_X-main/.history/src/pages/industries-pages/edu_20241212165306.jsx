// import React from "react";
// import Contact from "../../components/contacts/Contact";
// import Navbar from "../../components/navbar/Navbar";
import PageHeader from "../../components/pageHeader/PageHeader";
import Footer from "../../components/footer/Footer";

const Edu = () => {
  return (
    <div>
      <PageHeader
        name={"Education"}
        bgText={"Industries"}
        arrayOfLink={[
          { name: "Home", path: "/" },
          { name: "Indsutries", path: "/industries" },
          { name: "Education", path: "#" },
        ]}
      />
 
    </div>
  );
};

export default Edu;
