import PageHeader from "../../components/pageHeader/PageHeader";
import Footer from "../../components/footer/Footer";
import React from "react";

const ContactUs = () => {
  return (
    <div>
      <PageHeader
        name={"Contact Us"}
        bgText={""}
        arrayOfLink={[
          { name: "Home", path: "/" },
          { name: "Company", path: "/company" },
          { name: "Contact Us", path: "#" },
        ]}
      />
 
    </div>
  );
};

export default ContactUs;
